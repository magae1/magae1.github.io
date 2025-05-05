import { ReactNode, useCallback, useContext, useEffect, useRef } from "react";

import PeerConnectionManager from "../../models/PeerConnectionManager.ts";
import {
  TalkRTCContext,
  TalkSocketContext,
  TalkStateContext,
} from "./contexts.ts";
import {
  Chat,
  Notice,
  SignalType,
  SocketInit,
  SocketMessage,
  SocketNotice,
} from "./type";

interface Props {
  children: ReactNode;
  iceServers: RTCIceServer[];
}

export default function WebRTCProvider({ children, iceServers }: Props) {
  const { sendMsg, addReceiveCallback } = useContext(TalkSocketContext);
  const { setNumOfUsers, addChat } = useContext(TalkStateContext);
  const manager = useRef<PeerConnectionManager>(new PeerConnectionManager());

  const receiveCallback = useCallback(
    async (msg: SocketMessage) => {
      if (msg.type === "init") {
        manager.current.localId = msg.id;
        const body = msg.body as SocketInit;
        for (let i = 0; i < body.other_ids.length; i++) {
          manager.current.addConnections(body.other_ids[i], { iceServers });
          manager.current.addMessageReceiveListener(
            body.other_ids[i],
            (chat: Chat) => {
              addChat(chat);
            },
          );
        }
        sendMsg({ type: "ack" });
      } else if (msg.type === "enter") {
        const body = msg.body as SocketNotice;
        if (msg.id !== manager.current.localId) {
          manager.current.addConnections(msg.id, { iceServers });
          manager.current.addMessageReceiveListener(msg.id, addChat);
          await manager.current.sendOffer(msg.id, (offerSignal: SignalType) => {
            sendMsg<SocketMessage>({
              type: "offer",
              id: msg.id,
              body: offerSignal,
            });
          });
        }
        addChat({ content: body.msg } as Notice);
      } else if (msg.type === "leave") {
        const body = msg.body as SocketNotice;
        if (msg.id !== manager.current.localId) {
          manager.current.removeConnections(msg.id);
        }
        addChat({ content: body.msg } as Notice);
      } else if (msg.type === "offer") {
        const receivedOffer = msg.body as SignalType;
        await manager.current.receiveOffer(
          receivedOffer,
          (answerSignal: SignalType) => {
            sendMsg<SocketMessage>({
              type: "answer",
              id: receivedOffer.senderId,
              body: answerSignal,
            });
          },
          (offerSignal: SignalType) => {
            sendMsg<SocketMessage>({
              type: "offer",
              id: receivedOffer.senderId,
              body: offerSignal,
            });
          },
        );
      } else if (msg.type === "answer") {
        const receivedAnswer = msg.body as SignalType;
        await manager.current.receiveAnswer(receivedAnswer);
      }
      setNumOfUsers(manager.current.getNumOfConnections() + 1);
    },
    [addChat, iceServers, sendMsg, setNumOfUsers],
  );

  useEffect(() => {
    addReceiveCallback(receiveCallback);
  }, [addReceiveCallback, receiveCallback]);

  return (
    <TalkRTCContext
      value={{
        sendChat: (msg: string) => {
          addChat({
            id: manager.current.localId,
            isMine: true,
            timestamp: new Date(),
            content: msg,
          });
          manager.current.sendMessage(msg);
        },
      }}
    >
      {children}
    </TalkRTCContext>
  );
}

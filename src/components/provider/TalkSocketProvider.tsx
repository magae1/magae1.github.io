import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { TalkSocketContext } from "./contexts.ts";
import { SocketMessage } from "./type";
import { TALK_WEBSOCKET_URL } from "../../constants.ts";

interface Props {
  children: ReactNode;
}

export default function TalkSocketProvider({ children }: Props) {
  const conn = useRef<WebSocket | null>(null);
  const [isConnected, setConnected] = useState<boolean>(false);
  const receiveCallback = useRef<(msg: SocketMessage) => void>(() => {});

  const addReceiveCallback = useCallback((cb: (msg: SocketMessage) => void) => {
    receiveCallback.current = cb;
  }, []);

  const sendMsg = <T,>(msg: T) => {
    if (!conn.current) {
      return;
    }

    conn.current.send(JSON.stringify(msg));
  };

  useEffect(() => {
    const connectWS = () => {
      const socket = new WebSocket(TALK_WEBSOCKET_URL);
      socket.onopen = () => setConnected(true);
      socket.onclose = () => {
        setConnected(false);
      };
      conn.current = socket;
    };

    connectWS();
    return () => {
      conn.current?.close();
      conn.current = null;
    };
  }, []);

  useEffect(() => {
    if (conn.current) {
      conn.current.onmessage = (e) => {
        const message = JSON.parse(e.data) as SocketMessage;
        receiveCallback.current(message);
      };
    }
  }, [conn]);

  return (
    <TalkSocketContext value={{ isConnected, addReceiveCallback, sendMsg }}>
      {children}
    </TalkSocketContext>
  );
}

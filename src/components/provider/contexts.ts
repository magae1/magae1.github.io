import { createContext } from "react";

import { Chat, Notice, SocketMessage } from "./type";

export interface WebSocketVal {
  isConnected: boolean;
  addReceiveCallback: (callback: (msg: SocketMessage) => void) => void;
  sendMsg: <T>(msg: T) => void;
}

export const TalkSocketContext = createContext<WebSocketVal>({
  isConnected: false,
  addReceiveCallback: () => {},
  sendMsg: () => {},
});

export interface TalkState {
  numOfUsers: number;
  setNumOfUsers: (num: number) => void;
  chats: (Chat | Notice)[];
  addChat: (e: Chat | Notice) => void;
}

export const TalkStateContext = createContext<TalkState>({
  numOfUsers: 0,
  setNumOfUsers: () => {},
  chats: [],
  addChat: () => {},
});

export interface TalkRTC {
  sendChat: (msg: string) => void;
}

export const TalkRTCContext = createContext<TalkRTC>({
  sendChat: () => {},
});

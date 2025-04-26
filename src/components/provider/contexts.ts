import { createContext } from "react";

export interface WebSocketVal {
  isConnected: boolean;
  receiveCallback: <T>(callback: (msg: T) => void) => void;
  sendMsg: <T>(msg: T) => void;
}

export const TalkSocketContext = createContext<WebSocketVal>({
  isConnected: false,
  receiveCallback: () => {},
  sendMsg: () => {},
});

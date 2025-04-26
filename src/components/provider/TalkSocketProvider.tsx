import { ReactNode, useEffect, useRef, useState } from "react";

import { TalkSocketContext } from "./contexts.ts";

interface Props {
  children: ReactNode;
}

export default function TalkSocketProvider({ children }: Props) {
  const conn = useRef<WebSocket | null>(null);
  const [isConnected, setConnected] = useState<boolean>(false);

  const receiveCallback = <T,>(cb: (msg: T) => void) => {
    if (!conn.current) {
      return;
    }

    conn.current.onmessage = (e) => {
      // const message = JSON.parse(e.data) as T;
      cb(e.data);
    };
  };

  const sendMsg = <T,>(msg: T) => {
    if (!conn.current) {
      return;
    }

    conn.current.send(JSON.stringify(msg));
  };

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/1");
    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);
    conn.current = socket;
    return () => {
      socket.close();
      conn.current = null;
    };
  }, []);

  return (
    <TalkSocketContext value={{ isConnected, receiveCallback, sendMsg }}>
      {children}
    </TalkSocketContext>
  );
}

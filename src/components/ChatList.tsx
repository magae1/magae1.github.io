import { useContext, useEffect, useState } from "react";

import { TalkSocketContext } from "./provider/contexts.ts";

export default function ChatList() {
  const [chats, setChats] = useState<string[]>([]);
  const { receiveCallback } = useContext(TalkSocketContext);

  useEffect(() => {
    receiveCallback<string>((msg) => {
      console.log(msg);
      setChats((prev) => {
        return [...prev, msg];
      });
    });
  }, [receiveCallback]);

  return (
    <div className="flex flex-col">
      {chats.map((v, i) => {
        return <Chat key={i} content={v} />;
      })}
    </div>
  );
}

interface ChatProps {
  content: string;
}

function Chat({ content }: ChatProps) {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble">{content}</div>
    </div>
  );
}

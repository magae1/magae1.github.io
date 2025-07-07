import { useContext } from "react";

import { TalkStateContext } from "../provider/contexts.ts";
import Chat from "./Chat.tsx";
import Notice from "./Notice.tsx";

export default function ChatList() {
  const { chats } = useContext(TalkStateContext);

  return (
    <div className="flex flex-col-reverse overflow-y-auto">
      {chats.map((v, i) => {
        if ("id" in v && v.id) {
          return (
            <Chat
              key={i}
              id={v.id}
              isMine={v.isMine}
              timestamp={v.timestamp}
              content={v.content}
            />
          );
        } else {
          return <Notice key={i} content={v.content} />;
        }
      })}
    </div>
  );
}

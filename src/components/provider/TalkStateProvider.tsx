import { ReactNode, useState } from "react";

import { TalkStateContext } from "./contexts.ts";
import { Chat, Notice } from "./type";

interface Props {
  children: ReactNode;
}
export default function TalkStateProvider({ children }: Props) {
  const [numOfUsers, setNumOfUsers] = useState<number>(0);
  const [chats, setChats] = useState<(Chat | Notice)[]>([]);

  return (
    <TalkStateContext
      value={{
        numOfUsers: numOfUsers,
        setNumOfUsers: (num: number) => setNumOfUsers(num),
        chats: chats,
        addChat: (e) => setChats((prev) => [e, ...prev]),
      }}
    >
      {children}
    </TalkStateContext>
  );
}

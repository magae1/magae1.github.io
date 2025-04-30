import { useSuspenseQuery } from "@tanstack/react-query";

import TalkHeader from "./TalkHeader.tsx";
import TalkSocketProvider from "./provider/TalkSocketProvider.tsx";
import TalkFooter from "./TalkFooter.tsx";
import TalkBody from "./TalkBody.tsx";
import { getIceServers } from "../repositories/fetchers.ts";

export default function MagaeTalk() {
  const { data, error, isFetching } = useSuspenseQuery({
    queryKey: ["ice-servers"],
    queryFn: getIceServers,
  });

  if (error && !isFetching) {
    throw error;
  }

  return (
    <TalkSocketProvider>
      <div className="h-full text-black bg-white flex flex-col">
        <TalkHeader />
        <TalkBody />
        <TalkFooter />
      </div>
    </TalkSocketProvider>
  );
}

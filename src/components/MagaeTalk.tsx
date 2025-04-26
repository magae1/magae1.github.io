import TalkHeader from "./TalkHeader.tsx";
import TalkSocketProvider from "./provider/TalkSocketProvider.tsx";
import TalkFooter from "./TalkFooter.tsx";
import TalkBody from "./TalkBody.tsx";

export default function MagaeTalk() {
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

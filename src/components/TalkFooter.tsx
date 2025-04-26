import TalkInputBar from "./TalkInputBar.tsx";

export default function TalkFooter() {
  return (
    <div className="flex-none flex flex-col bg-gray-500 border-t border-t-gray-700/50 px-2 pt-2 pb-4 inset-shadow">
      <div className="px-2">
        <TalkInputBar />
      </div>
    </div>
  );
}

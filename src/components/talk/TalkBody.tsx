import ChatList from "./ChatList.tsx";

export default function TalkBody() {
  return (
    <div className="flex-1 overflow-y-auto">
      <ChatList />
    </div>
  );
}

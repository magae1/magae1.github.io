import dayjs from "dayjs";

interface Props {
  id: string;
  isMine: boolean;
  timestamp: Date;
  content: string;
}

export default function Chat({ id, isMine, timestamp, content }: Props) {
  return (
    <div className={`chat ${isMine ? "chat-end" : "chat-start"}`}>
      {!isMine && <div className="chat-header">{id}</div>}
      <div className="chat-bubble wrap-anywhere">{content}</div>
      <div className="chat-footer">
        <time className="text-xs opacity-60">{dayjs(timestamp).fromNow()}</time>
      </div>
    </div>
  );
}

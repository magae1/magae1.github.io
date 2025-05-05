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
      {!isMine && (
        <div className="chat-header">
          <span className="font-semibold">{id}</span>
        </div>
      )}
      <div className="chat-bubble wrap-anywhere textarea-md">{content}</div>
      <div className="chat-footer">
        <time className="text-[10px] opacity-60">
          {dayjs(timestamp).fromNow()}
        </time>
      </div>
    </div>
  );
}

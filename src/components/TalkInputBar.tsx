import { FormEvent, useContext, useRef, useState } from "react";
import { MdSend } from "react-icons/md";

import { TalkRTCContext, TalkSocketContext } from "./provider/contexts.ts";

export default function TalkInputBar() {
  const { isConnected } = useContext(TalkSocketContext);
  const { sendChat } = useContext(TalkRTCContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isConnected) {
      setShowTooltip(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
      return;
    }

    if (!inputRef.current) return;

    const inputVal = inputRef.current.value;
    if (inputVal.trim().length == 0) {
      return;
    }

    sendChat(inputVal);
    inputRef.current.value = "";
  };

  return (
    <form className="join w-full" onSubmit={handleOnSubmit}>
      <label className="grow join-item flex items-center bg-base-100 rounded-l-2xl">
        <input
          ref={inputRef}
          className="w-full focus:outline-none pl-4 pr-1"
          placeholder="메시지 입력"
        />
      </label>
      <div
        className={`${showTooltip ? "tooltip-open tooltip" : ""} tooltip-error`}
        data-tip="전송 실패"
      >
        <button className="btn btn-neutral join-item rounded-r-2xl">
          <MdSend size={18} />
        </button>
      </div>
    </form>
  );
}

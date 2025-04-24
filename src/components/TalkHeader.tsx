import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { MdPeople } from "react-icons/md";

export default function TalkHeader() {
  return (
    <div className="h-[34px] flex justify-between items-center mx-8 font-semibold">
      <CurrentTime />
      <CurrentPeople />
    </div>
  );
}

function CurrentTime() {
  const [hour, setHour] = useState<string>(dayjs().format("HH"));
  const [minute, setMinute] = useState<string>(dayjs().format("mm"));
  const [interDots, setInterDots] = useState<":" | "">(":");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs().format("HH:mm").split(":");
      setHour(now[0]);
      setMinute(now[1]);
      setInterDots((prevState) => {
        if (prevState === ":") {
          return "";
        } else {
          return ":";
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-x-[0.8px]">
      <span>{hour}</span>
      <span className="w-1 mb-0.5">{interDots}</span>
      <span>{minute}</span>
    </div>
  );
}

function CurrentPeople() {
  const numOfPeople = useRef<number>(0);

  return (
    <span className="flex items-center gap-x-1">
      <MdPeople size={18} />
      {numOfPeople.current}
    </span>
  );
}

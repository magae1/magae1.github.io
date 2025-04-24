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
  const [time, setTime] = useState<string>(dayjs().format("hh:mm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("hh:mm"));
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{time}</span>;
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

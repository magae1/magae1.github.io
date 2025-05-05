import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { motion } from "motion/react";
import { MdPeople } from "react-icons/md";
import { VscDebugDisconnect } from "react-icons/vsc";

import { TalkSocketContext, TalkStateContext } from "./provider/contexts.ts";

export default function TalkHeader() {
  const { isConnected } = useContext(TalkSocketContext);

  return (
    <div className="h-[34px] flex-none flex justify-between items-center mx-8 font-semibold">
      <CurrentTime />
      {isConnected ? (
        <CurrentPeople />
      ) : (
        <motion.span
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: [0, 1],
            transition: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <VscDebugDisconnect color="red" />
        </motion.span>
      )}
    </div>
  );
}

function CurrentTime() {
  const [hour, setHour] = useState<string>(dayjs().format("HH"));
  const [minute, setMinute] = useState<string>(dayjs().format("mm"));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs().format("HH:mm").split(":");
      setHour(now[0]);
      setMinute(now[1]);
    }, 900);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-x-[0.8px]">
      <span>{hour}</span>
      <motion.span
        className="mb-0.5"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          transition: {
            duration: 0.5,
            repeatType: "reverse",
            repeat: Infinity,
          },
        }}
      >
        :
      </motion.span>
      <span>{minute}</span>
    </div>
  );
}

function CurrentPeople() {
  const { numOfUsers } = useContext(TalkStateContext);

  return (
    <span className="flex items-center gap-x-1">
      <MdPeople size={18} />
      {numOfUsers}
    </span>
  );
}

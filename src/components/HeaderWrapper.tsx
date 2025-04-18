import { ReactNode, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

interface Props {
  children: ReactNode;
}

const topProps = {
  hidden: "-top-12",
  visible: "top-3",
};

export default function HeaderWrapper({ children }: Props) {
  const { scrollY } = useScroll();
  const [headerState, setHeaderState] =
    useState<keyof typeof topProps>("visible");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() ?? 0);
    setHeaderState(diff > 0 ? "hidden" : "visible");
  });

  return (
    <div className="sticky top-0 flex w-full justify-center">
      <div
        className="absolute w-full top-0 h-5"
        onMouseOver={() => setHeaderState("visible")}
      />
      <div
        className={`absolute ${topProps[headerState]} transition-[top] ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
}

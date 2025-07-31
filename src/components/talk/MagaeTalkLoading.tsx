"use client";

import { useEffect, useState } from "react";

export default function MagaeTalkLoading() {
  const [isDelayed, setDelayed] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full text-black bg-indigo-500 flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        <span className="text-2xl font-bold">magae talk 🗨</span>
        {isDelayed && (
          <span className="absolute top-[36px] text-sm">
            <span className="loading loading-spinner loading-xs mr-2"></span>
            서버 시작 중...
          </span>
        )}
      </div>
    </div>
  );
}

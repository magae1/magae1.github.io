import { lazy, Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { SiFastapi, SiWebrtc, SiReact } from "react-icons/si";
import { motion } from "motion/react";

import MagaeTalkLoading from "../components/talk/MagaeTalkLoading.tsx";
import MagaeTalkErrorFallback from "../components/talk/MagaeTalkErrorFallback.tsx";
const MagaeTalk = lazy(() => import("../components/talk/MagaeTalk.tsx"));

export default function TalkPage() {
  const icons = [
    {
      icon: <SiReact color="58c3dc" />,
      label: "React",
      link: "https://react.dev/",
    },
    {
      icon: <SiWebrtc />,
      label: "WebRTC",
      link: "https://webrtc.org/",
    },
    {
      icon: <SiFastapi color="039486" />,
      label: "FastAPI",
      link: "https://fastapi.tiangolo.com/",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="col-span-1 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">magae talk 🗨️</h1>
        <div className="flex gap-x-1.5 mt-4">
          {icons.map((v, i) => (
            <a href={v.link} target="_blank">
              <motion.div
                key={i}
                className="badge badge-neutral"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.3 * i,
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                }}
                whileTap={{
                  scale: 1.02,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {v.icon}
                {v.label}
              </motion.div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:items-center">
        <div className="my-10 sm:my-0">
          <div className="mockup-phone rounded-[48px]" data-theme="light">
            <div className="mockup-phone-camera w-[76px] h-[22px]"></div>
            <div className="mockup-phone-display w-[280px] h-[600px] rounded-[32px]">
              <QueryErrorResetBoundary>
                {({ reset }) => (
                  <ErrorBoundary
                    fallbackRender={MagaeTalkErrorFallback}
                    onReset={reset}
                  >
                    <Suspense fallback={<MagaeTalkLoading />}>
                      <MagaeTalk />
                    </Suspense>
                  </ErrorBoundary>
                )}
              </QueryErrorResetBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

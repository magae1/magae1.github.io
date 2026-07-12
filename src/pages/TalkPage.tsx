import {lazy, Suspense} from "react";
import {QueryErrorResetBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {FaArrowUpRightFromSquare, FaGithub} from "react-icons/fa6";
import {SiNotion} from "react-icons/si";
import {motion} from "motion/react";

import MagaeTalkLoading from "../components/talk/MagaeTalkLoading.tsx";
import MagaeTalkErrorFallback from "../components/talk/MagaeTalkErrorFallback.tsx";
import TechStackBadge from "../components/portfolio/TechStackBadge.tsx";
import {REVEAL_ANIMATION} from "../constants.ts";

const MagaeTalk = lazy(() => import("../components/talk/MagaeTalk.tsx"));

export default function TalkPage() {
  const icons = [
    {
      label: "React",
      link: "https://react.dev/",
    },
    {
      label: "WebRTC",
      link: "https://webrtc.org/",
    },
    {
      label: "FastAPI",
      link: "https://fastapi.tiangolo.com/",
    },
  ];

  return (
      <motion.div
          className="mx-auto grid min-h-[100svh] w-full max-w-[1440px] items-center gap-10 overflow-hidden bg-base-200/35 px-6 py-24 text-base-content shadow-[0_0_0_100vmax] shadow-base-200/35 selection:bg-primary selection:text-primary-content md:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-x-20 lg:px-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {transition: {staggerChildren: 0.15}},
          }}
      >
        <motion.div
            className="col-span-1 flex flex-col items-start justify-center"
            variants={{
              hidden: {},
              visible: {transition: {staggerChildren: 0.1}},
            }}
        >
          <motion.h1
              className="text-5xl font-black leading-none tracking-[-0.055em] md:text-7xl"
              variants={REVEAL_ANIMATION}
          >
            magae talk
          </motion.h1>
          <motion.div className="mt-7 flex flex-wrap gap-2" variants={REVEAL_ANIMATION}>
            {icons.map((v) => (
                <TechStackBadge key={v.label} stack={v.label}/>
            ))}
          </motion.div>
          <motion.div className="mt-8 flex flex-wrap gap-2" variants={REVEAL_ANIMATION}>
            <a
                href="https://github.com/magae1/magae-talk-server"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm portfolio-link"
                aria-label="magae talk WebSocket 서버 GitHub에서 보기"
            >
              <FaGithub/>
              <span>WebSocket 서버</span>
              <FaArrowUpRightFromSquare
                  className="portfolio-link-arrow"/>
            </a>
            <a
                href="https://magae.notion.site/magae-talk-1eab7683056f80699057f7c070b2e697?pvs=73"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm portfolio-link"
                aria-label="magae talk 프로젝트 구현 상세 내용 Notion에서 보기"
            >
              <SiNotion/>
              <span>구현 상세 보기</span>
              <FaArrowUpRightFromSquare
                  className="portfolio-link-arrow"/>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
            className="flex items-center justify-center lg:justify-end"
            variants={REVEAL_ANIMATION}
        >
          <div className="sm:my-0">
            <div
                className="mockup-phone rounded-[48px] border-base-content/15 bg-base-content shadow-2xl shadow-base-content/15"
                data-theme="light">
              <div className="mockup-phone-camera h-[22px] w-[76px]"></div>
              <div className="mockup-phone-display h-[600px] w-[280px] rounded-[32px]">
                <QueryErrorResetBoundary>
                  {({reset}) => (
                      <ErrorBoundary
                          fallbackRender={MagaeTalkErrorFallback}
                          onReset={reset}
                      >
                        <Suspense fallback={<MagaeTalkLoading/>}>
                          <MagaeTalk/>
                        </Suspense>
                      </ErrorBoundary>
                  )}
                </QueryErrorResetBoundary>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
}

import { lazy, Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import MagaeTalkLoading from "../components/MagaeTalkLoading.tsx";
import MagaeTalkErrorFallback from "../components/MagaeTalkErrorFallback.tsx";
const MagaeTalk = lazy(() => import("../components/MagaeTalk.tsx"));

export default function TalkPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="col-span-1 min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center">magae talk 🗨️</h1>
      </div>
      <div className="flex justify-center sm:items-center">
        <div className="my-10 sm:my-0">
          <div className="mockup-phone rounded-[48px]">
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

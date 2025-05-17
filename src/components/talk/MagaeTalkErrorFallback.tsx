import { FallbackProps } from "react-error-boundary";
import { MdError } from "react-icons/md";

export default function MagaeTalkErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div role="alert" className="alert alert-error alert-vertical">
        <MdError size={24} />
        <div>
          {error instanceof Error && (
            <h4 className="font-bold text-xs">[{error.message}]</h4>
          )}
          <p>서버에 접속할 수 없습니다.</p>
        </div>
        <div>
          <button
            onClick={resetErrorBoundary}
            className="btn btn-sm btn-neutral"
          >
            재시도
          </button>
        </div>
      </div>
    </div>
  );
}

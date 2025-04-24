import { useErrorBoundary } from "react-error-boundary";

interface Props {
  error: Error;
}
export default function MagaeTalkErrorFallback({ error }: Props) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
}

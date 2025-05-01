import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  iceServers: RTCIceServer[];
}
export default function WebRTCProvider({ children }: Props) {
  return <>{children}</>;
}

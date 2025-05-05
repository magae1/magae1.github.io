interface SocketInit {
  other_ids: string[];
}

interface SocketNotice {
  msg: string;
}

interface SignalType {
  senderId: string;
  signal: RTCSessionDescriptionInit;
}

export interface SocketMessage {
  type: string;
  id: string;
  body: SocketInit | SocketNotice | SignalType;
}

export interface ReceiveCallback {
  type: string;
  callback: (msg: SocketInit | SocketNotice) => void;
}

export interface Chat {
  id: string;
  isMine: boolean;
  timestamp: Date;
  content: string;
}

export interface Notice {
  content: string;
}

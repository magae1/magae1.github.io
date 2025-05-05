import LocalPeerConnection from "./LocalPeerConnection.ts";
import RemotePeerConnection from "./RemotePeerConnection.ts";
import { Chat, SignalType } from "../components/provider/type";

export default class PeerConnectionManager {
  private _localId: string = "";
  private _localPeerConnMap: Map<string, LocalPeerConnection>;
  private _remotePeerConnMap: Map<string, RemotePeerConnection>;

  constructor() {
    this._localPeerConnMap = new Map<string, LocalPeerConnection>();
    this._remotePeerConnMap = new Map<string, RemotePeerConnection>();
  }

  public addConnections(peerId: string, config: RTCConfiguration) {
    this._localPeerConnMap.set(peerId, new LocalPeerConnection(config));
    this._remotePeerConnMap.set(peerId, new RemotePeerConnection(config));
  }

  public async sendOffer(
    peerId: string,
    sendFn: (offerSignal: SignalType) => void,
  ) {
    const localConn = this._localPeerConnMap.get(peerId);
    if (!localConn) {
      throw new Error("연결을 찾을 수 없습니다.");
    }

    await localConn.sendOffer((offer: RTCSessionDescriptionInit) => {
      sendFn({ senderId: this._localId, signal: offer });
    });
  }

  public async receiveOffer(
    { senderId, signal }: SignalType,
    sendAnswerFn: (answerSignal: SignalType) => void,
    sendOfferFn: (offerSignal: SignalType) => void,
  ) {
    const remoteConn = this._remotePeerConnMap.get(senderId);
    if (!remoteConn) {
      throw new Error("연결을 찾을수 없습니다.");
    }

    await remoteConn.receiveOffer(
      signal,
      (answer: RTCSessionDescriptionInit) => {
        sendAnswerFn({ senderId: this._localId, signal: answer });
      },
    );

    const localConnState = this._localPeerConnMap
      .get(senderId)
      ?.getConnectionState();
    if (localConnState !== "connected") {
      await this.sendOffer(senderId, sendOfferFn);
    }
  }

  public async receiveAnswer({ senderId, signal }: SignalType) {
    const localConn = this._localPeerConnMap.get(senderId);
    if (!localConn) {
      throw new Error("연결을 찾을 수 없습니다.");
    }
    await localConn.receiveAnswer(signal);
  }

  public addMessageReceiveListener(
    peerId: string,
    receiveChat: (chat: Chat) => void,
  ) {
    const peerConn = this._remotePeerConnMap.get(peerId);
    if (!peerConn) {
      throw new Error("연결을 찾을수 없습니다.");
    }
    peerConn.addMessageEventListener((message: string) => {
      receiveChat({
        id: peerId,
        isMine: false,
        content: message,
        timestamp: new Date(),
      });
    });
  }

  public sendMessage(message: string) {
    this._localPeerConnMap.forEach((v) => {
      v.sendDataByChannel(new Blob([message], { type: "text/plain" }));
    });
  }

  public removeConnections(peerId: string) {
    this._localPeerConnMap.get(peerId)?.close();
    this._localPeerConnMap.delete(peerId);
    this._remotePeerConnMap.get(peerId)?.close();
    this._remotePeerConnMap.delete(peerId);
  }

  public getNumOfConnections(): number {
    return this._localPeerConnMap.size;
  }

  public set localId(id: string) {
    this._localId = id;
  }

  public get localId() {
    return this._localId;
  }
}

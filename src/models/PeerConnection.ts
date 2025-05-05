export default class PeerConnection {
  protected _conn: RTCPeerConnection;
  protected _dataChannel: RTCDataChannel;

  constructor(config: RTCConfiguration, channelLabel: string) {
    this._conn = new RTCPeerConnection(config);
    this._dataChannel = this._conn.createDataChannel(channelLabel);
  }

  public addIceCandidateListener(
    sendIceCandidate: (iceCandidate: RTCIceCandidate) => void,
  ) {
    this._conn.addEventListener("icecandidate", (e) => {
      if (e.candidate) {
        sendIceCandidate(e.candidate);
      }
    });
  }

  public async receiveIceCandidate(iceCandidate?: RTCIceCandidate | null) {
    await this._conn.addIceCandidate(iceCandidate);
  }

  public addChannelOpenEvent(event: () => void) {
    this._dataChannel.addEventListener("open", event);
  }

  public addChannelCloseEvent(event: () => void) {
    this._dataChannel.addEventListener("close", event);
  }

  public getConnectionState(): RTCPeerConnectionState {
    return this._conn.connectionState;
  }

  public close() {
    this._dataChannel.close();
    this._conn.close();
  }
}

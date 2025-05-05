import PeerConnection from "./PeerConnection.ts";

export default class LocalPeerConnection extends PeerConnection {
  constructor(
    config: RTCConfiguration,
    channelLabel: string = "localDataChannel",
  ) {
    super(config, channelLabel);
  }

  public async receiveAnswer(answer: RTCSessionDescriptionInit) {
    await this._conn.setRemoteDescription(new RTCSessionDescription(answer));
  }

  public async sendOffer(
    sendOfferFn: (offer: RTCSessionDescriptionInit) => void,
  ) {
    const offer = await this._conn.createOffer();
    await this._conn.setLocalDescription(offer);
    sendOfferFn(offer);
  }

  public sendDataByChannel(data: Blob) {
    this._dataChannel.send(data);
  }
}

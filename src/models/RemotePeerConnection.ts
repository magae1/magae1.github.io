import PeerConnection from "./PeerConnection.ts";

export default class RemotePeerConnection extends PeerConnection {
  constructor(
    config: RTCConfiguration,
    channelLabel: string = "remoteDataChannel",
  ) {
    super(config, channelLabel);
  }

  private async sendAnswer(
    sendAnswerFn: (answer: RTCSessionDescriptionInit) => void,
  ) {
    const answer = await this._conn.createAnswer();
    await this._conn.setLocalDescription(answer);
    sendAnswerFn(answer);
  }

  public async receiveOffer(
    offer: RTCSessionDescriptionInit,
    sendAnswerFn: (answer: RTCSessionDescriptionInit) => void,
  ) {
    await this._conn.setRemoteDescription(new RTCSessionDescription(offer));
    await this.sendAnswer(sendAnswerFn);
  }

  public addMessageEventListener(receiveMsg: (message: string) => void) {
    this._conn.addEventListener("datachannel", (e) => {
      const channel = e.channel;
      channel.onmessage = async (e) => {
        const msg = e.data as ArrayBuffer;
        const decoder = new TextDecoder();
        receiveMsg(decoder.decode(msg));
      };
    });
  }
}

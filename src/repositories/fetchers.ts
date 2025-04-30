import axios from "axios";

const talkFetcher = axios.create({
  baseURL: "http://localhost:8000",
});

export const getIceServers = async (): Promise<RTCIceServer[]> =>
  talkFetcher.get("/ice-servers").then((r) => r.data);

import axios from "axios";

import { TALK_SERVER_URL } from "../constants.ts";

const talkFetcher = axios.create({
  baseURL: TALK_SERVER_URL,
});

export const getIceServers = async (): Promise<RTCIceServer[]> =>
  talkFetcher.get("/ice-servers").then((r) => r.data);

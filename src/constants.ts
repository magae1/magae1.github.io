export const TALK_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://magae-talk-server.onrender.com/"
    : "http://localhost:8000";

export const TALK_WEBSOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "wss://magae-talk-server.onrender.com/ws"
    : "ws://localhost:8000/ws";

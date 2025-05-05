export const TALK_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://p01--fastapi-server--lk9hrnkdwbxn.code.run"
    : "http://localhost:8000";

export const TALK_WEBSOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "wss://p01--fastapi-server--lk9hrnkdwbxn.code.run/ws"
    : "ws://localhost:8000/ws";

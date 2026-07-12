export const TALK_SERVER_URL =
    process.env.NODE_ENV === "production"
        ? "https://scary-rivi-magae-private-351627d5.koyeb.app/"
        : "http://localhost:8000";

export const TALK_WEBSOCKET_URL =
    process.env.NODE_ENV === "production"
        ? "wss://scary-rivi-magae-private-351627d5.koyeb.app/ws"
        : "ws://localhost:8000/ws";

export const REVEAL_ANIMATION = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0},
};
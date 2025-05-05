# magae's playground
![storybookCI](https://github.com/magae1/magae1.github.io/actions/workflows/deployment.yml/badge.svg)
![React version](https://img.shields.io/github/package-json/dependency-version/magae1/magae1.github.io/react?logo=React)
![React Router version](https://img.shields.io/github/package-json/dependency-version/magae1/magae1.github.io/react-router?logo=ReactRouter)
![React Query version](https://img.shields.io/github/package-json/dependency-version/magae1/magae1.github.io/@tanstack/react-query?logo=ReactQuery)
![Tailwindcss version](https://img.shields.io/github/package-json/dependency-version/magae1/magae1.github.io/tailwindcss?logo=tailwindcss)


## magae talk 🗨

magae talk은 [WebRTC](https://webrtc.org/) 기반의 채팅 서비스입니다.

- 다중 p2p 연결을 지원
  - 여러 명이 동시에 채팅 가능
- [FastAPI](https://fastapi.tiangolo.com/) 기반의 WebSocket 서버와 연결
  - [Signaling](https://webrtc.org/getting-started/peer-connections#signaling)을 위한 HTTP 기반의 웹 API 제공  
  - 여러 클라이언트들의 Connection들을 효과적으로 관리하기 위한 커스텀 프로토콜 사용

구현 상세는 [여기](https://magae.notion.site/magae-talk-1eab7683056f80699057f7c070b2e697?pvs=4)를 참고해주세요.
import {MotionConfig} from "motion/react";
import {useRef} from "react";

import PortfolioHero from "../components/portfolio/PortfolioHero.tsx";
import ProjectScene, {PortfolioProject} from "../components/portfolio/ProjectScene.tsx";

const projects: PortfolioProject[] = [
  {
    number: "01",
    title: "하나학회",
    subtitle: "실시간 화상 금융 멘토링 플랫폼",
    period: "2025.01 — 2025.02",
    role: "팀장 · Full Stack",
    description:
        "WebRTC 화상 강의실과 실시간 채팅을 구현하고, Redis와 Kafka를 활용해 확장 가능한 시스템을 설계했습니다.",
    result: "3개 인스턴스 분리 · Jenkins CI/CD 구축",
    stack: ["Spring Boot", "Next.js", "WebRTC", "Redis", "Kafka"],
    href: "https://github.com/hanaro5-team-last-pang/hana-hakhoe-server",
    image: "/images/sys-arch-hanahakhae.png",
    imageAlt: "하나학회 시스템 아키텍처 다이어그램",
    architectureNotes: [
      "GitHub Webhook으로 프론트엔드와 백엔드 저장소의 변경을 감지하고 Jenkins Controller가 배포 파이프라인을 실행합니다.",
      "Spot Instance 기반 Jenkins Agent와 Testcontainers를 사용해 통합 테스트 환경을 필요할 때 확장합니다.",
      "Next.js·WebSocket 서버, Spring API 서버, Redis·Kafka를 각각 분리된 인스턴스에 배치했습니다.",
      "Route53과 Traefik으로 요청을 라우팅하고, Coturn을 통해 WebRTC 연결을 지원합니다.",
      "PostgreSQL에는 서비스 데이터를, S3에는 정적 파일을 저장합니다.",
    ]
  },
  {
    number: "02",
    title: "리치하나",
    subtitle: "저축 습관 도우미 서비스",
    period: "2024.10 · 2024.12",
    role: "Full Stack",
    description:
        "저축 목표 달성 알림을 Redis ListQueue로 설계하고, 외부 API 응답을 캐싱해 더 빠른 경험을 만들었습니다.",
    result: "API 평균 응답 시간 8초 → 3초",
    stack: ["Spring Boot", "React", "Redis", "Docker", "Jenkins"],
    href: "https://github.com/magae1/saltyhana_back",
    image: "/images/sys-arch-richhana.png",
    imageAlt: "리치하나 시스템 아키텍처 다이어그램",
    architectureNotes: [
      "GitHub Webhook과 Jenkins Controller·Agent를 이용해 백엔드 변경 사항을 자동으로 배포합니다.",
      "Spring Boot 서버와 Redis를 Docker 컨테이너로 분리해 애플리케이션과 캐시 저장소를 운영합니다.",
      "서비스 데이터는 PostgreSQL에 저장하고 정적 파일은 S3에서 관리합니다.",
      "프론트엔드는 S3와 AWS Amplify로 배포하며 Route53을 통해 사용자 요청을 연결합니다.",
    ]
  },
  {
    number: "03",
    title: "인급동 히스토리",
    subtitle: "유튜브 인기 급상승 아카이브",
    period: "2023.01 — 2023.07",
    role: "Personal · Full Stack",
    description:
        "인기 급상승 동영상을 자동 수집하고 시간대별 변화를 탐색할 수 있도록 만든 개인 프로젝트입니다.",
    result: "수집부터 배포까지 End-to-End 구현",
    stack: ["Python", "Django", "React", "Selenium", "Docker"],
    href: "https://github.com/magae1/ingupdong_back",
    detailHref: "https://magae.notion.site/66d84f6bf26640129b26748ce3ee3735?pvs=73"
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null);
  return (
      <MotionConfig reducedMotion="user" transition={{duration: 0.8, ease: "easeOut"}}>
        <main ref={containerRef}
              className="h-[100svh] snap-y snap-mandatory overflow-y-auto scroll-smooth bg-base-100 text-base-content selection:bg-primary selection:text-primary-content">
          <PortfolioHero/>

          <div id="projects" className="bg-base-200/35">
            {projects.map((project, index) => (
                <ProjectScene
                    key={project.title}
                    project={project}
                    nextProjectId={projects[index + 1] ? `project-${projects[index + 1].number}` : undefined}
                />
            ))}
          </div>
        </main>
      </MotionConfig>
  );
}

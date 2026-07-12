import {IconType} from "react-icons";
import {FaJava} from "react-icons/fa6";
import {
  SiApachekafka,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiJenkins,
  SiKotlin,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";

const STACK_ICONS: Record<string, IconType> = {
  Java: FaJava,
  Kotlin: SiKotlin,
  "Spring Boot": SiSpringboot,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  WebRTC: SiWebrtc,
  Redis: SiRedis,
  Kafka: SiApachekafka,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  Python: SiPython,
  Django: SiDjango,
  FastAPI: SiFastapi,
};

interface Props {
  stack: string;
}

export default function TechStackBadge({stack}: Props) {
  const Icon = STACK_ICONS[stack];

  return (
    <span className="badge badge-ghost tech-stack-badge">
      {Icon && <Icon className="shrink-0 text-sm" aria-hidden="true"/>}
      {stack}
    </span>
  );
}

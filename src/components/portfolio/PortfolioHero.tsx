import {motion} from "motion/react";
import {FaArrowUpRightFromSquare, FaGithub} from "react-icons/fa6";
import {SiTistory} from "react-icons/si";
import ScrollWrapper from "../ScrollWrapper.tsx";
import ScrollButton from "../ScrollButton.tsx";
import {REVEAL_ANIMATION} from "../../constants.ts";
import TechStackBadge from "./TechStackBadge.tsx";

const HERO_REVEAL_ANIMATION = {
  ...REVEAL_ANIMATION,
  visible: {
    ...REVEAL_ANIMATION.visible,
    transition: {duration: 0.35},
  },
};

const TECH_STACKS = [
  "Java",
  "Kotlin",
  "Spring Boot",
  "TypeScript",
  "React",
  "Next.js",
] as const;

const PROFILE_LINKS = [
  {
    label: "GitHub",
    detail: "@magae1",
    href: "https://github.com/magae1",
    icon: FaGithub,
  },
  {
    label: "Tech Blog",
    detail: "기술 블로그",
    href: "https://magae5basement.tistory.com",
    icon: SiTistory,
  },
] as const;


export default function PortfolioHero() {
  return (
      <ScrollWrapper>
        <motion.div
            className="mx-auto w-full max-w-7xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {transition: {staggerChildren: 0.1}},
            }}
        >
          <motion.p
              className="font-mono text-[10px] font-semibold tracking-[0.24em] text-base-content/40 md:text-xs"
              variants={HERO_REVEAL_ANIMATION}
          >
            MORE CODE, MORE COMFORTABLE.
          </motion.p>
          <motion.h1
              className="mt-4 max-w-5xl text-6xl font-black leading-none tracking-[-0.055em] md:text-8xl lg:text-9xl"
              variants={HERO_REVEAL_ANIMATION}
          >
            magae1
          </motion.h1>
          <motion.p
              className="mt-7 text-lg font-bold tracking-tight md:text-xl"
              variants={HERO_REVEAL_ANIMATION}
          >
            정중일 <span className="ml-1 font-normal text-base-content/40">joongil jeong</span>
          </motion.p>
          <motion.p
              className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1.5 font-mono text-xs font-semibold text-primary"
              variants={HERO_REVEAL_ANIMATION}
          >
            Backend Developer
          </motion.p>

          <div
              className="mt-10 grid gap-5 border-t border-base-content/15 pt-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <motion.div variants={HERO_REVEAL_ANIMATION}>
              <ul className="flex flex-wrap gap-2" aria-label="기술 스택">
                {TECH_STACKS.map((stack) => (
                    <li key={stack}>
                      <TechStackBadge stack={stack}/>
                    </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={HERO_REVEAL_ANIMATION}>
              <ul className="flex flex-wrap gap-2" aria-label="외부 링크">
                {PROFILE_LINKS.map(({label, detail, href, icon: Icon}) => (
                    <li key={label}>
                      <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm portfolio-link"
                          aria-label={`${label} - ${detail}`}
                      >
                        <Icon/>
                        <span>{label}</span>
                        <FaArrowUpRightFromSquare
                            className="portfolio-link-arrow"/>
                      </a>
                    </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <ScrollButton link="projects"/>
      </ScrollWrapper>
  );
}

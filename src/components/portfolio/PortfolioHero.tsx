import {motion} from "motion/react";
import {FaArrowUpRightFromSquare, FaGithub} from "react-icons/fa6";
import {SiTistory} from "react-icons/si";
import ScrollWrapper from "../ScrollWrapper.tsx";
import ScrollButton from "../ScrollButton.tsx";

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
    detail: "마개의 개발 지하실",
    href: "https://magae5basement.tistory.com/manage",
    icon: SiTistory,
  },
] as const;

const reveal = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0},
};

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
              variants={reveal}
          >
            MORE CODE, MORE COMFORTABLE.
          </motion.p>
          <motion.h1
              className="mt-4 max-w-5xl text-6xl font-black leading-none tracking-[-0.055em] md:text-8xl lg:text-9xl"
              variants={reveal}
          >
            magae1
          </motion.h1>
          <motion.p
              className="mt-7 text-lg font-bold tracking-tight md:text-xl"
              variants={reveal}
          >
            정중일 <span className="ml-1 font-normal text-base-content/40">joongil jeong</span>
          </motion.p>
          <motion.p
              className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1.5 font-mono text-xs font-semibold text-primary"
              variants={reveal}
          >
            Backend Developer
          </motion.p>

          <div
              className="mt-10 grid gap-5 border-t border-base-content/15 pt-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <motion.div variants={reveal}>
              <ul className="flex flex-wrap gap-2" aria-label="기술 스택">
                {TECH_STACKS.map((stack) => (
                    <li
                        key={stack}
                        className="rounded-lg border border-base-content/10 bg-base-200/60 px-3.5 py-2 font-mono text-xs text-base-content/70"
                    >
                      {stack}
                    </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={reveal}>
              <ul className="flex flex-wrap gap-2" aria-label="외부 링크">
                {PROFILE_LINKS.map(({label, detail, href, icon: Icon}) => (
                    <li key={label}>
                      <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-base-content/15 bg-base-100 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
                          aria-label={`${label} - ${detail}`}
                      >
                        <Icon
                            className="text-base text-base-content/50 transition-colors group-hover:text-primary"/>
                        <strong className="font-medium">{label}</strong>
                        <FaArrowUpRightFromSquare
                            className="text-[10px] text-base-content/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"/>
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

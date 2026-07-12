import { motion } from "motion/react";
import { FaArrowUpRightFromSquare, FaDiagramProject, FaGithub } from "react-icons/fa6";
import { useRef } from "react";
import ScrollButton from "../ScrollButton.tsx";
import ScrollWrapper from "../ScrollWrapper.tsx";

export interface PortfolioProject {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  description: string;
  result: string;
  stack: string[];
  href: string;
  image?: string;
  imageAlt?: string;
  architectureNotes?: string[];
  glow: string;
  gradient: string;
}

interface Props {
  project: PortfolioProject;
  nextProjectId?: string;
}

export default function ProjectScene({ project, nextProjectId }: Props) {
  const architectureDialogRef = useRef<HTMLDialogElement>(null);

  return (
    <ScrollWrapper>
      <motion.article
        id={`project-${project.number}`}
        className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-x-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.55 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[0.24em] text-base-content/40 md:text-xs">
            PROJECT {project.number}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-base-content/45">
            <span>{project.period}</span><span>·</span><span>{project.role}</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-base-content/45">{project.subtitle}</p>
          <h2 className="mt-2 text-5xl font-black leading-none tracking-[-0.055em] md:text-7xl">{project.title}</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-base-content/65 md:text-lg">{project.description}</p>
          <p className="mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">{project.result}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((skill) => (
              <span key={skill} className="rounded-lg border border-base-content/10 bg-base-200/60 px-3.5 py-2 font-mono text-xs text-base-content/70">{skill}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href={project.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-base-content/15 bg-base-100 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md">
              <FaGithub className="text-base text-base-content/50 group-hover:text-primary" />
              <strong className="font-medium">GitHub 보기</strong>
              <FaArrowUpRightFromSquare className="text-[10px] text-base-content/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {project.image && (
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full border border-base-content/15 bg-base-100 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
                onClick={() => architectureDialogRef.current?.showModal()}
              >
                <FaDiagramProject className="text-base text-base-content/50 group-hover:text-primary" />
                <strong className="font-medium">시스템 아키텍처 보기</strong>
              </button>
            )}
          </div>
        </div>
        {project.image && (
          <div className="lg:col-span-2">
            <dialog ref={architectureDialogRef} className="modal">
              <div className="modal-box w-11/12 max-w-6xl p-5 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-base-content/45">{project.title}</p>
                    <h3 className="mt-1 text-2xl font-black tracking-tight md:text-3xl">
                      시스템 아키텍처 다이어그램
                    </h3>
                  </div>
                  <form method="dialog">
                    <button className="btn btn-circle btn-ghost btn-sm" aria-label="모달 닫기">✕</button>
                  </form>
                </div>

                <figure className="mt-6 overflow-hidden rounded-xl border border-base-content/10 bg-white p-3 md:p-5">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} 시스템 아키텍처 다이어그램`}
                  className="h-auto w-full object-contain"
                />
              </figure>

                {project.architectureNotes && (
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-base-content/65 md:text-base">
                    {project.architectureNotes.map((note) => <li key={note}>{note}</li>)}
                  </ul>
                )}
              </div>
              <form method="dialog" className="modal-backdrop">
                <button aria-label="모달 닫기">close</button>
              </form>
            </dialog>
          </div>
        )}
      </motion.article>
      {nextProjectId && (
        <ScrollButton link={nextProjectId} ariaLabel="다음 프로젝트로 이동" />
      )}
    </ScrollWrapper>
  );
}

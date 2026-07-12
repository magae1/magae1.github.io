import {motion} from "motion/react";
import {FaArrowDown} from "react-icons/fa6";


interface Props {
  link: string;
  ariaLabel?: string;
}

export default function ScrollButton({link, ariaLabel = "프로젝트 섹션으로 이동"}: Props) {


  return (
      <motion.button
          type="button"
          onClick={() => document.getElementById(link)?.scrollIntoView({behavior: "smooth"})}
          aria-label={ariaLabel}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-base-content/35 transition-colors hover:text-primary md:bottom-10 cursor-pointer"
      >
        <span className="font-mono text-[9px] tracking-[0.24em]">스크롤</span>
        <motion.span
            className="btn btn-circle btn-sm border-base-content/15 bg-base-100/70 backdrop-blur"
            animate={{y: [0, 5, 0]}}
            transition={{duration: 1.6, repeat: Infinity, ease: "easeInOut"}}
        >
          <FaArrowDown className="text-xs"/>
        </motion.span>
      </motion.button>
  )
}

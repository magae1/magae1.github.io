import { MotionConfig, motion } from "motion/react";

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.8 }}>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, rotateX: 60 }}
            animate={{ opacity: 1, rotateX: 0 }}
          >
            Welcome 👋
          </motion.h1>
        </div>
      </div>
    </MotionConfig>
  );
}

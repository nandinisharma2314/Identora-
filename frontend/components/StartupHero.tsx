"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function StartupHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative w-full min-h-[90svh] md:h-[90vh] flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/assest/videos/v2.mp4"
      />

      {/* Dark & Pink Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b12]/80 via-[#2D1B1B]/70 to-[#f472b6]/30 backdrop-blur-[2px]"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-200 text-sm font-medium uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Digital Agency</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="heading text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight mb-4 md:mb-6"
        >
          Elevate Your <span className="text-pink-400 font-serif italic">Brand</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-2 md:px-0"
        >
          We blend data-driven strategies with stunning creative design to build unforgettable digital experiences that scale.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <Link
            href="/#service"
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-medium text-base sm:text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(244,114,182,0.4)] hover:shadow-[0_0_60px_rgba(244,114,182,0.6)] transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/#portfolio"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 hover:text-pink-100 font-medium text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

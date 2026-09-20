"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Sprout, Sparkles, ExternalLink, Play } from "lucide-react";

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const portfolioItems = [
    { type: "image", src: "/assest/img/1.jpeg", alt: "Social Media Creative", category: "Social Media" },
    { type: "image", src: "/assest/img/6.jpeg", alt: "Festival Creative", category: "Brand Identity" },
    { type: "video", src: "/assest/videos/v1.mp4", alt: "Video Reel 1", category: "Video Production" },
    { type: "video", src: "/assest/videos/v2.mp4", alt: "Video Reel 2", category: "Motion Graphics" },
    { type: "image", src: "/assest/img/4.jpeg", alt: "Graphic Design", category: "Graphic Design" },
    { type: "image", src: "/assest/img/5.jpeg", alt: "Web Design", category: "Web Design" },
    { type: "image", src: "/assest/img/3.jpeg", alt: "Marketing Assets", category: "Marketing Assets" },
    { type: "image", src: "/assest/img/2.jpeg", alt: "Ad Creative", category: "Ad Creative" },
  ];

  return (
    <section id="portfolio" className="pt-8 pb-4 bg-[#FFF8F5] overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute -top-10 left-0 w-48 h-48 bg-pink-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-100 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-pink-500 text-sm font-semibold flex items-center justify-center gap-2">
            Portfolio
            <Heart className="w-4 h-4" />
          </p>

          <h2 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2D1B1B] mt-2 leading-tight font-bold">
            A Glimpse of My <span className="text-pink-400 font-serif italic">Work</span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-300 to-pink-500"></div>
          </div>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Creative designs, impactful strategies and engaging digital experiences crafted to help brands grow online.
          </p>
        </motion.div>

        {/* ===================== PORTFOLIO GRID ===================== */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12"
        >
          {portfolioItems.map((item, index) => (
            <motion.article 
              variants={itemVariants}
              key={index}
              className="group relative bg-black rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/5] cursor-pointer"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
                ></video>
              )}

              {/* Glassmorphism Overlay on Hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.type === "video" ? (
                    <Play className="w-6 h-6 text-white ml-1" />
                  ) : (
                    <ExternalLink className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              {/* Category Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-sm font-medium">
                  {item.category}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Decorative Leaves */}
        <div className="absolute top-40 left-0 hidden xl:block opacity-20 pointer-events-none">
          <Leaf className="w-28 h-28 text-pink-300" />
        </div>
        <div className="absolute bottom-24 right-0 hidden xl:block opacity-20 pointer-events-none">
          <Sprout className="w-28 h-28 text-pink-300" />
        </div>

        {/* Floating Sparkles */}
        <div className="absolute top-28 left-1/4 animate-pulse hidden lg:block pointer-events-none">
          <Sparkles className="w-8 h-8 text-pink-300" />
        </div>
        <div className="absolute top-24 right-1/4 animate-pulse hidden lg:block pointer-events-none">
          <Sparkles className="w-10 h-10 text-pink-200" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse hidden lg:block pointer-events-none">
          <Sparkles className="w-7 h-7 text-pink-200" />
        </div>
      </div>
    </section>
  );
}

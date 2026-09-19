"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Quote, Sparkles, Star, Sparkle, ArrowRight, Leaf, Sprout, User, Plus, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const colorStyles = {
    pink: {
      border: "border-pink-100",
      shadow: "hover:shadow-[0_10px_30px_rgba(236,127,158,0.1)]",
      bg: "bg-pink-50 group-hover:bg-pink-500",
      text: "text-pink-400 group-hover:text-white",
      sparkle: "text-pink-200",
      hr: "border-pink-50",
      imgBorder: "border-pink-200",
      companyText: "text-pink-500",
      star: "fill-pink-500 text-pink-500"
    },
    purple: {
      border: "border-purple-100",
      shadow: "hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)]",
      bg: "bg-purple-50 group-hover:bg-purple-500",
      text: "text-purple-400 group-hover:text-white",
      sparkle: "text-purple-200",
      hr: "border-purple-50",
      imgBorder: "border-purple-200",
      companyText: "text-purple-500",
      star: "fill-purple-500 text-purple-500"
    },
    orange: {
      border: "border-orange-100",
      shadow: "hover:shadow-[0_10px_30px_rgba(251,146,60,0.1)]",
      bg: "bg-orange-50 group-hover:bg-orange-500",
      text: "text-orange-400 group-hover:text-white",
      sparkle: "text-orange-200",
      hr: "border-orange-50",
      imgBorder: "border-orange-200",
      companyText: "text-orange-500",
      star: "fill-orange-500 text-orange-500"
    }
  };

  type ColorKey = keyof typeof colorStyles;

  const initialReviews: { name: string; company: string; text: string; color: ColorKey; image?: string }[] = [
    {
      name: "Sudha Jain",
      company: "S2 Khana Khazana",
      image: "/assest/img/client1.png",
      text: "Working together was an absolute pleasure. Every design perfectly matched our brand identity and exceeded our expectations. Professional, creative and always delivered on time.",
      color: "pink"
    },
    {
      name: "Priya Sharma",
      company: "TMB Corporation",
      image: "/assest/img/client2.png",
      text: "Highly creative, responsive and full of fresh ideas. The social media strategy helped us increase engagement and reach the right audience.",
      color: "purple"
    },
    {
      name: "Nishant Patni",
      company: "Happiness Event",
      image: "/assest/img/client3.png",
      text: "Beautiful branding, premium creatives and excellent communication throughout the project. Highly recommended for digital marketing.",
      color: "orange"
    },
    {
      name: "Rahul Verma",
      company: "TechNova Solutions",
      image: "/assest/img/client1.png",
      text: "An incredible experience from start to finish. They truly understood our vision and executed the ad campaigns flawlessly, doubling our ROI in just a month.",
      color: "purple"
    },
    {
      name: "Sneha Kapoor",
      company: "Aura Lifestyle",
      image: "/assest/img/client2.png",
      text: "Our website traffic has skyrocketed since we started working together. The attention to detail and data-driven approach is exactly what our brand needed to scale.",
      color: "orange"
    },
    {
      name: "Amit Desai",
      company: "Desai Real Estate",
      image: "/assest/img/client3.png",
      text: "The lead generation strategies implemented were top-notch. We've seen a massive increase in high-quality inquiries. Fantastic service and communication!",
      color: "pink"
    }
  ];

  const [activeReviews, setActiveReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
             setActiveReviews([...data, ...initialReviews]);
          }
        }
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      }
    }
    fetchReviews();
  }, []);

  const handleAddReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      text: formData.get("text") as string,
    };

    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) newErrors.name = "Name is required";
    if (!data.company?.trim()) newErrors.company = "Company is required";
    if (!data.text?.trim()) newErrors.text = "Review text is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    const colors: ColorKey[] = ["pink", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, color: randomColor }),
      });

      if (!res.ok) throw new Error("Failed to submit review");
      
      const newReview = await res.json();
      setActiveReviews([newReview, ...activeReviews]);
      
      setStatus("success");
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus("idle");
        form.reset();
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="testi" className="pt-10 pb-16 overflow-hidden relative bg-gradient-to-b from-[#FFF5F8] to-[#FFF0F5]">
      <div className="w-full px-4 md:px-8 lg:px-12">
        
        {/* ===================== SECTION HEADING ===================== */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[3px] text-pink-500 text-sm font-semibold flex items-center justify-center gap-2">
            Testimonials
            <Heart className="w-4 h-4" />
          </p>
          <h2 className="heading text-4xl md:text-5xl font-bold text-[#2D1B1B] mt-2 leading-tight">
            Kind Words From My <span className="text-pink-400 font-serif italic">Clients</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-300 to-pink-500"></div>
          </div>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every successful project begins with trust, collaboration, and creativity.
            Here's what some of my amazing clients have to say.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-50 text-pink-500 font-semibold text-sm hover:bg-pink-100 transition-colors duration-300 border border-pink-200 shadow-sm"
          >
            <Plus className="w-4 h-4" /> Add Your Review
          </button>
        </motion.div>

        {/* ===================== TESTIMONIAL CAROUSEL ===================== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <Swiper
            modules={[Autoplay, Pagination, FreeMode]}
            spaceBetween={24}
            slidesPerView={1.1}
            freeMode={true}
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4.5 },
              1536: { slidesPerView: 5.5 },
            }}
            className="!pb-16"
          >
            {activeReviews.map((review, idx) => {
              const styles = colorStyles[review.color];
              return (
                <SwiperSlide key={idx} className="!h-auto">
                  <div 
                    className={`h-full group relative bg-white/60 backdrop-blur-md rounded-3xl border ${styles.border} p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${styles.shadow} hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex justify-between items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${styles.bg}`}>
                          <Quote className={`w-5 h-5 transition-colors duration-300 ${styles.text}`} />
                        </div>
                        {idx % 2 === 0 ? (
                          <Sparkles className={`w-5 h-5 ${styles.sparkle}`} />
                        ) : (
                          <Sparkle className={`w-5 h-5 ${styles.sparkle}`} />
                        )}
                      </div>
                      <p className="mt-6 text-gray-700 leading-relaxed text-sm italic">
                        "{review.text}"
                      </p>
                    </div>
                    
                    <div className="mt-6">
                      <hr className={`mb-5 ${styles.hr}`} />
                      <div className="flex items-center gap-4">
                        {/* Dummy Profile Icon */}
                        <div className={`w-12 h-12 rounded-full border-2 ${styles.imgBorder} ${styles.bg} flex items-center justify-center shrink-0`}>
                          <User className={`w-6 h-6 ${styles.companyText}`} />
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-[#2D1B1B] text-sm">{review.name}</h4>
                          <p className={`text-xs font-medium ${styles.companyText}`}>{review.company}</p>
                          <div className="flex gap-1 mt-1">
                            <Star className={`w-3 h-3 ${styles.star}`} />
                            <Star className={`w-3 h-3 ${styles.star}`} />
                            <Star className={`w-3 h-3 ${styles.star}`} />
                            <Star className={`w-3 h-3 ${styles.star}`} />
                            <Star className={`w-3 h-3 ${styles.star}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>

      {/* Decorative Leaves */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-20 pointer-events-none">
        <Leaf className="w-24 h-24 text-pink-300" />
      </div>
      <div className="absolute right-0 bottom-20 hidden xl:block opacity-20 pointer-events-none">
        <Sprout className="w-24 h-24 text-pink-300" />
      </div>

      {/* ===================== ADD REVIEW MODAL ===================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B1B]/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-lg shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-[#2D1B1B] mb-2">Leave a Review ✨</h3>
              <p className="text-gray-500 text-sm mb-6">I'd love to hear about your experience working with me!</p>

              <form onSubmit={handleAddReview} noValidate className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className={`w-full bg-pink-50/30 px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all placeholder:text-gray-400 text-gray-700`}
                  />
                  {errors.name && <p className="text-red-500 text-xs font-medium mt-1 ml-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-1.5 block">Company/Brand Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Corp"
                    className={`w-full bg-pink-50/30 px-4 py-3 rounded-xl border ${errors.company ? 'border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all placeholder:text-gray-400 text-gray-700`}
                  />
                  {errors.company && <p className="text-red-500 text-xs font-medium mt-1 ml-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="text-sm font-bold text-[#2D1B1B] ml-1 mb-1.5 block">Your Experience</label>
                  <textarea
                    name="text"
                    rows={4}
                    placeholder="Working together was amazing because..."
                    className={`w-full bg-pink-50/30 px-4 py-3 rounded-xl border ${errors.text ? 'border-red-400 focus:ring-red-100/50' : 'border-pink-50 focus:border-pink-300 focus:ring-pink-100/50'} focus:ring-4 outline-none transition-all resize-none placeholder:text-gray-400 text-gray-700`}
                  ></textarea>
                  {errors.text && <p className="text-red-500 text-xs font-medium mt-1 ml-1">{errors.text}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(236,72,153,0.25)] hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Submitting..." : status === "success" ? "Submitted Successfully!" : "Submit Review"}
                </button>
                
                {status === "error" && (
                  <p className="text-red-500 text-center text-sm font-medium mt-2">Failed to submit review. Please try again.</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

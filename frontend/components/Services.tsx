"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Target, BarChart3, Smartphone, Camera, Megaphone, PenTool, Layout, Layers, Compass, TrendingUp, Zap, DollarSign, Users, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  const services = [
    {
      id: "modal-social",
      icon: <Smartphone className="text-3xl text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />,
      title: "Social Media Management",
      desc: "From content planning to community engagement, we manage your social presence that converts.",
      stats: [
        { icon: <Target />, value: "50+", label: "Brands Handled" },
        { icon: <TrendingUp />, value: "3x", label: "Avg. Engagement Growth" },
        { icon: <Layout />, value: "30+", label: "Posts / Month" },
        { icon: <Star />, value: "100%", label: "Client Satisfaction" },
      ],
      features: [
        { title: "Content Strategy & Planning", desc: "Monthly content calendars tailored to your brand voice, audience, and business goals." },
        { title: "Creative Content Creation", desc: "Eye-catching visuals, captions, stories and reels crafted to stop the scroll." },
        { title: "Community Engagement", desc: "Timely replies, comment management and community building to grow loyal followers." },
      ]
    },
    {
      id: "modal-graphic",
      icon: <PenTool className="text-3xl text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />,
      title: "Graphic Designing",
      desc: "Visually stunning designs that communicate your brand story and make you stand out.",
      stats: [
        { icon: <Layers />, value: "200+", label: "Designs Delivered" },
        { icon: <Target />, value: "30+", label: "Brand Identities" },
        { icon: <Zap />, value: "48h", label: "Avg. Delivery" },
        { icon: <Star />, value: "5.0", label: "Average Rating" },
      ],
      features: [
        { title: "Brand Identity & Logo", desc: "Complete brand identity packages — logo, colour palette, typography and brand guidelines." },
        { title: "Social Media Graphics", desc: "Posts, stories, highlight covers, carousels and banners designed for maximum impact." },
        { title: "Marketing Materials", desc: "Flyers, brochures, posters, presentations and digital ads that convert." },
      ]
    },
    {
      id: "modal-reels",
      icon: <Camera className="text-3xl text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />,
      title: "Reels & Video Editing",
      desc: "Scroll-stopping reels and short-form videos crafted to go viral and drive real results.",
      stats: [
        { icon: <Camera />, value: "100+", label: "Reels Edited" },
        { icon: <Users />, value: "5M+", label: "Total Views" },
        { icon: <Zap />, value: "24h", label: "Turnaround Time" },
        { icon: <TrendingUp />, value: "4x", label: "Avg. Reach Boost" },
      ],
      features: [
        { title: "Instagram & YouTube Reels", desc: "Vertical short-form videos with trendy transitions, effects and music sync." },
        { title: "Talking Head Edits", desc: "Podcast clips, interviews and talking head videos edited for social media." },
        { title: "Motion Graphics & Captions", desc: "Animated text, subtitles and motion elements that make videos pop." },
      ]
    },
    {
      id: "modal-content",
      icon: <Layout className="text-3xl text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />,
      title: "Content Creation",
      desc: "Compelling copy and creative assets that tell your brand story and drive meaningful action.",
      stats: [
        { icon: <Layout />, value: "500+", label: "Content Pieces" },
        { icon: <TrendingUp />, value: "10x", label: "Engagement Lift" },
        { icon: <Users />, value: "40+", label: "Clients Served" },
        { icon: <Star />, value: "100%", label: "On-Time Delivery" },
      ],
      features: [
        { title: "Social Media Captions", desc: "Engaging, on-brand captions with hooks, storytelling and strong CTAs for every platform." },
        { title: "Blog & Article Writing", desc: "SEO-optimised long-form blog posts and articles that establish authority and drive traffic." },
        { title: "Website Copy", desc: "Persuasive homepage, about, and service page copy that converts visitors into clients." },
      ]
    },
    {
      id: "modal-brand",
      icon: <Compass className="text-3xl text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />,
      title: "Brand Strategy",
      desc: "Strategic positioning and identity building that makes your brand truly unforgettable.",
      stats: [
        { icon: <Target />, value: "25+", label: "Brands Transformed" },
        { icon: <TrendingUp />, value: "2x", label: "Avg. Revenue Growth" },
        { icon: <Layers />, value: "30+", label: "Brand Identities Built" },
        { icon: <Star />, value: "5.0", label: "Average Rating" },
      ],
      features: [
        { title: "Brand Positioning", desc: "Defining your unique market position, value proposition and competitive advantage." },
        { title: "Audience Persona Building", desc: "Deep research into your ideal customers' behaviours, pain points and motivations." },
        { title: "Go-to-Market Strategy", desc: "A comprehensive launch or growth plan with clear milestones and action steps." },
      ]
    },
    {
      id: "modal-ads",
      icon: <Megaphone className="text-3xl text-pink-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />,
      title: "Meta Ads & Google Ads",
      desc: "Data-driven paid ad campaigns that maximise your ROI and grow revenue predictably.",
      stats: [
        { icon: <Zap />, value: "5x", label: "Avg. ROAS" },
        { icon: <TrendingUp />, value: "40%", label: "Lower CPL" },
        { icon: <DollarSign />, value: "₹50L+", label: "Ad Spend Managed" },
        { icon: <Users />, value: "20+", label: "Clients Scaled" },
      ],
      features: [
        { title: "Meta (Facebook & Instagram) Ads", desc: "Highly targeted campaigns across Meta platforms to reach and convert your ideal audience." },
        { title: "Google Search Ads", desc: "Intent-based search campaigns that capture high-intent buyers actively searching for you." },
        { title: "Retargeting Campaigns", desc: "Re-engaging warm audiences who have already shown interest in your brand or products." },
      ]
    }
  ];

  return (
    <>
      <section id="service" className="py-16 bg-gradient-to-b from-[#FFF8F5] to-white relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-pink-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

        <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative"
          >
            <p className="uppercase tracking-[2px] text-pink-500 text-sm font-semibold flex items-center justify-center gap-2">
              Our Expertise <Heart className="w-4 h-4" />
            </p>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1B] leading-tight mt-2">
              Creative solutions to elevate your <span className="text-pink-400">brand</span>.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full mx-auto mt-4"></div>
            
            {/* Animated Arrow 1 */}
            <div className="hidden lg:block absolute -bottom-16 -right-10 pointer-events-none">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  d="M10 10C40 30 80 20 110 60" 
                  stroke="#F59CB7" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeDasharray="6 6" 
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  d="M100 50L110 60L95 65" 
                  stroke="#F59CB7" 
                  strokeWidth="2" 
                  fill="none" 
                />
              </svg>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="mt-12 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            <Swiper
              modules={[Autoplay, Pagination, FreeMode]}
              spaceBetween={20}
              slidesPerView={1.2}
              freeMode={true}
              grabCursor={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.5 },
                1280: { slidesPerView: 4.5 },
              }}
              className="!pb-16"
            >
              {services.map((svc) => (
                <SwiperSlide key={svc.id} className="h-auto">
                  <div 
                    className="h-full group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(236,127,158,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                    onClick={() => openModal(svc.id)}
                  >
                    {/* Subtle Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 to-pink-100/0 group-hover:from-pink-50/50 group-hover:to-pink-100/50 transition-colors duration-300 -z-10"></div>

                    <div>
                      <div className="flex flex-col gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-white shadow-sm border border-pink-50 flex justify-center items-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                          {svc.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#2D1B1B] group-hover:text-pink-500 transition-colors duration-300">{svc.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed mt-2">{svc.desc}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                      <span className="text-pink-500 text-sm font-semibold transition-all duration-300">
                        Explore Service
                      </span>
                      <div className="w-8 h-8 rounded-full bg-pink-50 group-hover:bg-pink-500 flex items-center justify-center transition-colors duration-300">
                        <ArrowRight className="w-4 h-4 text-pink-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-2xl shadow-lg px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Strategy. Creativity. Results.</h3>
                  <p className="text-pink-100 text-sm">Everything your brand needs to scale digitally.</p>
                </div>
              </div>
              <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-pink-500 text-sm font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full md:w-auto text-center">
                Let's Grow Together
              </button>
            </motion.div>

            {/* Animated Arrow 2 */}
            <div className="hidden lg:block absolute -top-16 -left-12 pointer-events-none">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  d="M110 10C80 30 40 20 10 60" 
                  stroke="#F59CB7" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeDasharray="6 6" 
                />
                <motion.path 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8 }}
                  d="M20 50L10 60L25 65" 
                  stroke="#F59CB7" 
                  strokeWidth="2" 
                  fill="none" 
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* MODALS */}
      {services.map((svc) => (
        <div
          key={`modal-${svc.id}`}
          className={`svc-modal-overlay ${activeModal === svc.id ? "active" : ""}`}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="svc-modal">
            <button className="svc-modal-close" onClick={closeModal}>&#10005;</button>
            <p className="uppercase tracking-[4px] text-pink-500 font-semibold flex items-center gap-2">
              SERVICE <Heart className="w-5 h-5" />
            </p>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B1B] leading-tight mt-3">
              {svc.title.split(" ")[0]} <span className="text-pink-400">{svc.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            <div className="w-20 sm:w-28 h-1 bg-pink-300 rounded-full mt-4 mb-4 sm:mb-5"></div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed sm:leading-8">{svc.desc}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {svc.stats.map((stat, idx) => (
                <div key={idx} className="svc-stat-card bg-white rounded-2xl p-5 text-center shadow-sm">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 text-pink-500">
                    {stat.icon}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-[#2D1B1B]">{stat.value}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <p className="uppercase tracking-[4px] text-pink-500 font-semibold mt-10 mb-2">What's Included</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {svc.features.map((feat, idx) => (
                <div key={idx} className="svc-item-card bg-[#FFF8F5] rounded-2xl p-5">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <h4 className="font-semibold text-[#2D1B1B] mb-2">{feat.title}</h4>
                  <p className="text-gray-600 text-sm leading-6">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

import { Heart, Briefcase, Star, Check, Lightbulb, Target, Quote, Sparkles, Flower2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FFF8F5] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            {/* Background Shape */}
            <div className="absolute w-[300px] h-[380px] sm:w-[430px] sm:h-[520px] rounded-t-full bg-pink-100"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-16 sm:bottom-28 left-0 bg-white rounded-3xl shadow-xl px-5 py-6 z-20">
              <p className="text-gray-700 font-medium leading-8 text-sm sm:text-base">
                Passionate <br />
                Creative <br />
                Strategic
              </p>
            </div>
            
            {/* Main Image */}
            <img src="/assest/img/girl2.png" className="relative z-10 w-[300px] sm:w-[430px]" alt="Harshika Jain" />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="uppercase tracking-[4px] text-pink-500 font-semibold flex items-center gap-2">
              ABOUT ME
              <Heart className="w-5 h-5" />
            </p>
            
            <h2 className="heading text-5xl sm:text-6xl leading-tight mt-4 text-[#2D1B1B]">
              More Than a <span className="text-pink-400">Marketer</span>
            </h2>
            
            <div className="w-40 h-1 bg-pink-300 rounded-full mt-4 mb-8"></div>
            
            <p className="text-lg text-gray-700 leading-9">
              I'm <span className="font-semibold text-pink-500">Harshika Jain</span> — a passionate Digital Marketer and Creative
              Designer helping brands grow with strategic marketing, creative storytelling, engaging content and impactful digital experiences.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10 relative z-20">
          
          {/* Experience Card */}
          <article className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D1B1B]">Experience</h3>
                <div className="w-16 h-1 bg-pink-300 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="mt-6 text-pink-500 font-semibold">2+ Internships Completed</p>
            <p className="text-gray-600 leading-8 mt-3">
              Worked as a Social Media Marketing Intern, managing content creation, branding,
              audience engagement and digital campaigns for growing businesses.
            </p>
          </article>

          {/* Skills Card */}
          <article className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D1B1B]">Skills</h3>
                <div className="w-16 h-1 bg-green-300 rounded-full mt-2"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-6">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Social Media Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">SEO & SEM</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Graphic Designing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Meta Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Content Creation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">Google Ads</span>
              </div>
            </div>
          </article>

          {/* Creative Thinking */}
          <article className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D1B1B]">Creative Thinking</h3>
                <div className="w-16 h-1 bg-purple-300 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-gray-600 leading-8 mt-6">
              Creating unique ideas and visually appealing designs that connect brands with audiences,
              improve engagement and leave a lasting impression.
            </p>
          </article>

          {/* Strategy */}
          <article className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D1B1B]">Strategy + Design</h3>
                <div className="w-16 h-1 bg-orange-300 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-gray-600 leading-8 mt-6">
              Combining creativity with data-driven strategy to build meaningful digital experiences that
              increase brand visibility and measurable growth.
            </p>
          </article>
        </div>

        {/* ===================== QUOTE BANNER ===================== */}
        <div className="mt-10 bg-gradient-to-r from-pink-50 via-white to-pink-50 rounded-3xl sm:rounded-full shadow-md border border-pink-100 px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-20">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center shrink-0">
              <Quote className="w-8 h-8 text-pink-500 fill-pink-500" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-pink-500">Creativity. Strategy. Results.</h4>
              <p className="text-gray-600 mt-1">Everything your brand needs to grow digitally.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-16 w-px bg-pink-200"></div>

          {/* Right */}
          <div className="text-center">
            <h3 className="heading text-4xl text-[#2D1B1B]">
              Let's Grow Together! <span className="text-pink-400">♡</span>
            </h3>
          </div>
        </div>

        {/* Decorative Sparkles */}
        <div className="absolute top-16 right-10 hidden lg:block animate-pulse z-10">
          <Sparkles className="w-10 h-10 text-pink-300" />
        </div>
        <div className="absolute bottom-10 left-10 hidden lg:block animate-pulse z-10">
          <Flower2 className="w-12 h-12 text-pink-200" />
        </div>
      </div>
    </section>
  );
}

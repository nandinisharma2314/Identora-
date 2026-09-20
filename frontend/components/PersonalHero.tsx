import { ArrowRight, Heart, Target, PenTool, BarChart3, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 pt-8">
        <div className="grid lg:grid-cols-2 items-center min-h-[85vh]">
          {/* LEFT */}
          <div>
            <p className="text-4xl italic mb-5">Hi, I'm</p>
            <h1 className="heading text-7xl font-bold text-[#2D1B1B] leading-tight">
              Harshika Jain
            </h1>
            <h3 className="text-pink-500 text-3xl mt-4 font-medium">
              Digital Marketer | Creative Designer
            </h3>
            <p className="mt-10 text-2xl text-gray-700 leading-10 max-w-lg">
              Helping brands grow through creativity & strategy.
            </p>
            <div className="flex gap-6 mt-12">
              <Link
                href="/#portfolio"
                className="bg-pink-500 text-white px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 hover:scale-105 duration-300"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#contact"
                className="border border-pink-300 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-pink-100 duration-300 cursor-pointer"
              >
                <span>Let's Connect</span>
                <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center mt-12 lg:mt-0">
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] bg-pink-100 rounded-full"></div>
            <img src="/assest/img/girl.png" className="relative z-10 w-[300px] sm:w-[400px] lg:w-[500px]" alt="Harshika Jain" />
            
            {/* Floating Card */}
            <div className="absolute z-10 top-8 left-0 lg:left-0 bg-white rounded-2xl shadow-xl px-3 py-2 animate-bounce-slow">
              <p className="font-semibold text-sm sm:text-base">Creative Strategy</p>
              <div className="mt-4 flex gap-2 items-end">
                <div className="w-4 h-4 bg-pink-200"></div>
                <div className="w-4 h-6 bg-pink-300"></div>
                <div className="w-4 h-9 bg-pink-400"></div>
                <div className="w-4 h-14 bg-pink-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto pb-10 px-6 mt-10 lg:mt-0">
        <div className="bg-white rounded-3xl shadow-xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x divide-gray-100">
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-pink-100 mx-auto flex items-center justify-center">
              <Target className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-semibold mt-3">Strategic Approach</h3>
          </div>
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-pink-100 mx-auto flex items-center justify-center">
              <PenTool className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-semibold mt-3">Creative Solutions</h3>
          </div>
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-pink-100 mx-auto flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-semibold mt-3">Data Driven Results</h3>
          </div>
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-pink-100 mx-auto flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-semibold mt-3">Client Focused</h3>
          </div>
        </div>
      </section>
    </>
  );
}

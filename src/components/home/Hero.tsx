import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Students engaged in classroom learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/88 via-red-900/72 to-red-900/48" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Alexander B. Cummings
            <span className="block text-white mt-2">
              Model Science & Technology School
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
            Preparing the next generation of innovators, leaders, and
            problem-solvers through excellence in STEM education in Liberia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-900 rounded-md text-base font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
            >
              Explore Our School
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-md text-base font-semibold hover:bg-white hover:text-red-900 transition-all"
            >
              <GraduationCap className="w-5 h-5" />
              Admissions
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

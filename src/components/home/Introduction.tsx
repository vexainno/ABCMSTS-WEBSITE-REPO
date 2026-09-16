import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ABOUT_IMAGE } from "@/lib/data";

export default function Introduction() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="Students learning in a classroom"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="bg-white text-red-900 rounded-xl px-8 py-6 shadow-xl">
                <div className="text-4xl font-bold">Est.</div>
                <div className="text-2xl font-bold">2015</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-red-700 mb-3">
              Our Commitment to Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 leading-tight">
              Cultivating a Wholesome Learning Environment
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At ABCMSTS, we are committed to providing our students with
                educational excellence by cultivating a wholesome learning
                environment. We encourage positive behaviours and critical
                thinking skills for the development of lifelong learning,
                inclusive of skill-building strategies.
              </p>
              <p>
                Your trust in us is paramount and we are dedicated to upholding
                the highest standards in all aspects of school life. Our
                academic programs are designed to develop students both
                academically and personally, with emphasis on science,
                technology, innovation, leadership, discipline, and national
                development.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-red-800 font-semibold hover:text-red-700 transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

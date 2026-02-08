// src/components/home/Hero.jsx
import React from "react";
import { Calendar } from "lucide-react";
export default function Hero() {
  const announcements = [
    { date: "Nov 15", title: "End Semester Viva-Voce Schedule Dec 2025" },
    { date: "Nov 01", title: "Ph.D. Admission Shortlist - Spring 2026" },
  ];
  return (
    <section className="px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Brand Hero with Background Photo */}
      <div className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[450px] flex flex-col justify-center p-10 shadow-xl">
        {/* The Image Background */}
        <img
          src="https://i.postimg.cc/C1RDwd3r/image.png"
          alt="NIT Patna CSE Department"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay for Typography Clarity */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1A1F22] via-[#1A1F22]/80 to-transparent"></div>

        <div className="relative z-10 max-w-xl">
          <span className="text-amber-400 font-semibold tracking-widest uppercase text-sm drop-shadow-md">
            Department of CSE
          </span>
          <h2 className="text-5xl font-bold mt-4 mb-6 leading-tight text-white drop-shadow-lg">
            Pioneering Computing <br /> Excellence.
          </h2>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Nurturing the next generation of engineers through rigorous research
            and an industry-aligned curriculum at NIT Patna.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#800000] text-white px-8 py-3 rounded-xl font-bold hover:bg-red-900 transition-all flex items-center gap-2">
              Explore Programs
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">
              Research Labs
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Announcements (remains the same as previous code) */}
      {/* ... */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
          <Calendar size={20} className="text-[#800000]" /> Announcements
        </h3>
        <div className="space-y-4">
          {announcements.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition"
            >
              <span className="text-xs font-bold text-[#800000] uppercase">
                {item.date}
              </span>
              <p className="font-semibold text-gray-800 mt-1 group-hover:text-[#800000]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-3 text-sm font-bold text-gray-500 hover:text-[#800000] border-t">
          View All Notices
        </button>
      </div>
    </section>
  );
}

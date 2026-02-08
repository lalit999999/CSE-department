import React from "react";
import Hero from "./Hero";
import StatsGrid from "./StatsGrid";
import Research from "./Research";
import About from "./About";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* 1. Impact Section: High-res visual and critical notices */}
      <Hero />

      {/* 2. Trust Section: Numerical proof of department success */}
      <div className="max-w-7xl mx-auto py-8">
        <StatsGrid />
      </div>

      {/* 3. Deep Dive: Highlighting our Core Academic Offerings */}
      <About />

      {/* 4. Innovation: Showcasing current research projects */}
      <Research />

      {/* 5. Modern CTA: For prospective students */}
      <section className="px-8 py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-[#800000] to-red-900 text-white shadow-2xl shadow-red-900/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to join the future of Computing?
          </h2>
          <p className="text-red-100 mb-10 text-lg opacity-90">
            Admissions for the 2026 Academic Year are now open for B.Tech and
            M.Tech programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 text-[#800000] px-8 py-4 rounded-2xl font-black hover:bg-white transition-colors">
              APPLY NOW
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-colors">
              DOWNLOAD PROSPECTUS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

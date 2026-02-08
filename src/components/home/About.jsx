import React from "react";
import { Target, Eye, Rocket, CheckCircle2, Shield } from "lucide-react";

export default function About() {
  const missionPoints = [
    "To improve employability by providing high-quality undergraduate and graduate education in computer-related disciplines.",
    "To develop professionals to satisfy the rising personnel demands and needs of industry and entrepreneurship for the state's and country's economic growth.",
    "To become capable in conducting high-quality technological research for the benefit of society.",
  ];

  const outcomes = [
    "Engage in requirement analysis, design, implementation, and testing of software systems.",
    "Solve socially relevant challenges using CSE expertise and pursue higher research.",
    "Work productively in teams and as individuals in interdisciplinary projects.",
    "Participate in lifelong learning and career advancement to adapt to social requirements.",
  ];

  return (
    <section className="py-24 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <h4 className="text-[#800000] font-black tracking-widest uppercase text-sm mb-4">
            Inside the Department
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F3E46] leading-tight max-w-3xl">
            Defining the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] to-red-600">
              Computational Leadership.
            </span>
          </h2>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Card */}
          <div className="group p-10 rounded-[3rem] bg-[#F8F9FA] border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={120} />
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#800000] shadow-sm mb-8">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#2F3E46]">
              Our Vision
            </h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              To formulate up-to-date and flexible technical programs which will
              allow our graduates to attain their maximum technical potential,
              managerial capability, be competitive in the job market and to
              emerge as a centre of excellence.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group p-10 rounded-[3rem] bg-[#800000] text-white shadow-xl hover:shadow-red-900/40 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target size={120} />
            </div>
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-amber-400 mb-8">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <ul className="space-y-4">
              {missionPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-red-50/80 leading-relaxed"
                >
                  <Rocket size={18} className="text-amber-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Program Outcomes & Educational Objectives Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 py-4">
            <h3 className="text-2xl font-bold text-[#2F3E46] mb-4">
              Program Outcomes
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Our graduates are prepared to meet the highest standards of the
              global software industry through these core competencies.
            </p>
            <div className="h-1 w-20 bg-[#800000] rounded-full"></div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 hover:border-[#800000]/20 hover:bg-gray-50 transition-colors"
              >
                <div className="flex gap-4">
                  <CheckCircle2
                    size={20}
                    className="text-[#800000] shrink-0 mt-1"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PEO Feature (Bento Highlight) */}
        <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-[#2F3E46] text-white flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div className="w-20 h-20 bg-amber-400 rounded-3xl flex items-center justify-center text-[#2F3E46]">
              <Shield size={40} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">
              Program Educational Objectives (PEOs)
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
              Our PEOs ensure graduates apply reasoning informed by contextual
              knowledge to assess societal, health, safety, and legal issues
              while upholding ethical principles and lifelong learning in
              technology.
            </p>
          </div>
          <button className="whitespace-nowrap bg-white text-[#2F3E46] px-8 py-3 rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors">
            Detailed Objectives
          </button>
        </div>
      </div>
    </section>
  );
}

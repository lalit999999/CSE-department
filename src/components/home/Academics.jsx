import React from "react";
import { FileText, Clock, GraduationCap } from "lucide-react";

const academicData = [
  {
    category: "Undergraduate (B.Tech)",
    programs: [
      {
        name: "B.Tech in Computer Science and Engineering",
        degree: "B.Tech",
        duration: "4 Years",
        admission: "JEE (Main)",
        syllabus: ["2022 onwards", "2025 onwards"],
      },
      {
        name: "B.Tech in Artificial Intelligence and Data Science",
        degree: "B.Tech",
        duration: "4 Years",
        admission: "JEE (Main)",
        syllabus: ["Curriculum/Syllabus"],
      },
    ],
  },
  {
    category: "Integrated Dual Degree",
    programs: [
      {
        name: "B.Tech + M.Tech (Cyber Security)",
        degree: "Integrated",
        duration: "5 Years",
        admission: "JEE (Main)",
        syllabus: ["2022 onwards", "2025 onwards"],
      },
      {
        name: "B.Tech + M.Tech (Data Science)",
        degree: "Integrated",
        duration: "5 Years",
        admission: "JEE (Main)",
        syllabus: ["2022 onwards", "2025 onwards"],
      },
    ],
  },
  {
    category: "Postgraduate (MCA/M.Tech)",
    programs: [
      {
        name: "MCA (AI & IoT)",
        degree: "MCA",
        duration: "3 Years",
        admission: "NIMCET",
        syllabus: ["2024 onwards", "2025 onwards"],
      },
      {
        name: "M.Tech in Cyber Security",
        degree: "M.Tech",
        duration: "2 Years",
        admission: "GATE",
        syllabus: ["Full Syllabus"],
      },
    ],
  },
];

export default function Academics() {
  return (
    <div className="bg-white">
      {/* About Section in Programs */}
      <section className="bg-[#800000] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Academic Programs</h1>
          <p className="text-xl text-red-50 opacity-90 leading-relaxed max-w-4xl">
            The Department of Computer Science and Engineering offers a wide
            spectrum of academic programs to prepare students for the rapidly
            evolving digital era. From foundational B.Tech degrees to
            specialized Ph.D. research, our curriculum is designed to foster
            innovation, technical excellence, and ethical leadership.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        {academicData.map((group, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold text-[#2F3E46] mb-8 border-l-4 border-[#800000] pl-4">
              {group.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {group.programs.map((program, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#800000] max-w-[70%]">
                      {program.name}
                    </h3>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border shadow-sm">
                      {program.degree}
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm flex items-center gap-2 text-gray-600">
                      <Clock size={16} /> Duration: {program.duration}
                    </p>
                    <p className="text-sm flex items-center gap-2 text-gray-600">
                      <GraduationCap size={16} /> Admission: {program.admission}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {program.syllabus.map((s, sIdx) => (
                      <button
                        key={sIdx}
                        className="flex items-center gap-2 text-xs font-bold py-2 px-4 bg-white border rounded-lg hover:bg-gray-50 transition"
                      >
                        <FileText size={14} className="text-[#800000]" /> {s}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

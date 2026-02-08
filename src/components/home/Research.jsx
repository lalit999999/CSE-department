import React from "react";
import { FlaskConical, FileText, ArrowUpRight } from "lucide-react";

export default function Research() {
  const projects = [
    {
      title: "Deep Learning for Healthcare Analytics",
      funder: "MeitY",
      tag: "AI",
    },
    {
      title: "Quantum-Safe Cryptographic Protocols",
      funder: "SERB",
      tag: "Security",
    },
  ];

  return (
    <section className="px-8 py-16 bg-[#F8F9FA]">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-bold mb-4">
            Research & <br />
            Innovation
          </h2>
          <p className="text-gray-500 mb-8">
            Pushing the boundaries of technology through collaborative research
            with global impact.
          </p>
          <div className="p-6 bg-[#800000] rounded-3xl text-white">
            <h4 className="text-4xl font-bold">23</h4>
            <p className="text-red-100 opacity-80 mt-1">
              Ongoing Research Projects
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold uppercase rounded-full tracking-wider">
                  {proj.tag}
                </span>
                <h4 className="text-lg font-bold mt-4 mb-2">{proj.title}</h4>
                <p className="text-sm text-gray-400 font-medium">
                  Funded by:{" "}
                  <span className="text-gray-600">{proj.funder}</span>
                </p>
              </div>
              <button className="mt-8 flex items-center gap-2 text-sm font-bold text-[#800000] hover:gap-3 transition-all">
                Project Details <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

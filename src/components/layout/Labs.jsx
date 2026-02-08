import { Layers, Monitor, ShieldCheck, Cpu } from "lucide-react";
import React from "react";

const labData = [
  {
    name: "Computing Lab-1",
    desc: "Uses Linux (Fedora) for OS management, memory functions, and shell programming. Deals with OOP, Web Tech, and DBMS.",
    features: ["Fedora 16.0", "Shell Programming", "DBMS"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Network System Lab",
    desc: "Well-equipped systems for research including Network Training Kits. Primary focus on Cyber Security courses.",
    features: ["Network Kits", "Cyber Security", "Research Systems"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Image Processing Lab",
    desc: "Hardware includes Image Capture Cameras and Grabber Cards for digital image analysis and manipulation.",
    features: ["Image Capture Hardware", "Grabber Cards", "Enhanced Analysis"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  // Add others following this pattern...
];

export default function Labs() {
  return (
    <div className="bg-[#F8F9FA] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2F3E46]">
            Department Laboratories
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our labs are equipped with state-of-the-art hardware and software to
            facilitate advanced research and practical learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {labData.map((lab, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-gray-100 group hover:shadow-xl transition-all"
            >
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-4 text-[#800000]">
                  {lab.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {lab.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {lab.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 rounded-md"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

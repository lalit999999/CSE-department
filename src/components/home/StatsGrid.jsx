import React from "react";
import { Users, BookOpen, ShieldCheck, Microscope } from "lucide-react";

export default function StatsGrid() {
  const stats = [
    {
      label: "Faculty Members",
      value: "28",
      icon: <Users className="text-blue-500" />,
    },
    {
      label: "Research Scholars",
      value: "264",
      icon: <Microscope className="text-purple-500" />,
    },
    {
      label: "Journal Papers",
      value: "872+",
      icon: <BookOpen className="text-green-500" />,
    },
    {
      label: "Patents Filed",
      value: "79",
      icon: <ShieldCheck className="text-amber-500" />,
    },
  ];

  return (
    <div className="px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bento-card flex flex-col items-center text-center"
        >
          <div className="p-3 bg-gray-50 rounded-2xl mb-4">{stat.icon}</div>
          <h4 className="text-3xl font-black text-[#2F3E46]">{stat.value}</h4>
          <p className="text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useMemo } from "react";
import { facultyData } from "../../data/faculty";
import { staffData } from "../../data/staf";
import { scholarData } from "../../data/scholardata";
import {
  Search,
  Mail,
  Phone,
  Globe,
  BookOpen,
  Award,
  Briefcase,
  User,
  Book,
  Calendar,
  Settings,
  GraduationCap, // Added missing icons
} from "lucide-react";

// Mock data based on your requirements
const peopleData = {
  faculty: facultyData,
  staff: staffData,
  scholars: scholarData,
};

export default function People() {
  const [activeTab, setActiveTab] = useState("faculty");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = useMemo(() => {
    const list = peopleData[activeTab] || []; // Fallback to empty array to prevent 'undefined' error
    const query = searchQuery.toLowerCase();

    return list.filter((person) => {
      // Base search: Name matches
      const nameMatch = person.name.toLowerCase().includes(query);

      // Faculty search: check specialization
      const specMatch = person.specialization?.some((s) =>
        s.toLowerCase().includes(query),
      );

      // Staff search: check expertise
      const expMatch = person.expertise?.toLowerCase().includes(query);

      // Scholar search: check research area or supervisor
      const scholarMatch =
        person.area?.toLowerCase().includes(query) ||
        person.supervisor?.toLowerCase().includes(query);

      return nameMatch || specMatch || expMatch || scholarMatch;
    });
  }, [activeTab, searchQuery]);
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-20">
      {/* Header & Filter Section */}
      <section className="bg-white border-b sticky top-20 z-40 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex bg-gray-100 p-1 rounded-2xl w-full md:w-auto">
            {["faculty", "staff", "scholars"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-8 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                  activeTab === tab
                    ? "bg-[#800000] text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        {filteredList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredList.map((person, idx) => {
              if (activeTab === "faculty")
                return <FacultyCard key={idx} data={person} />;
              if (activeTab === "staff")
                return <StaffCard key={idx} data={person} />;
              return <ScholarCard key={idx} data={person} />;
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 font-medium">
              No results found for "{searchQuery}"
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

// --- Specialized Card Components ---

function FacultyCard({ data }) {
  return (
    <div className="bg-[#FAF7F5]  rounded-xl overflow-hidden border border-gray-200 flex flex-col md:flex-row min-h-[320px] hover:shadow-xl transition-all duration-300">
      {/* Left Column: Profile Section */}
      <div className="md:w-1/3 flex flex-col items-center justify-center p-6 text-center border-r border-gray-100 bg-white/50">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(data.name)}"
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-[#5D3011] leading-tight">
          {data.name}
        </h3>
        <p className="text-[#800000] text-sm font-semibold mt-1">{data.role}</p>
      </div>

      {/* Right Column: Details Section */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between bg-white">
        <div className="space-y-4">
          {/* Contact & Links */}
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${data.email}`}
              className="text-sm text-gray-600 flex items-center gap-2 hover:text-[#800000] transition-colors"
            >
              <Mail size={16} className="text-[#800000]" /> {data.email}
            </a>
            {data.ext && (
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <Phone size={16} className="text-[#800000]" />{" "}
                <span>{data.ext}</span>
              </div>
            )}
            <a
              href="#"
              className="text-sm text-blue-600 flex items-center gap-2 hover:underline"
            >
              <Globe size={16} /> Personal Webpage
            </a>
          </div>

          {/* Specialization Tags */}
          <div>
            <p className="text-xs font-bold text-[#5D3011] uppercase tracking-wider mb-2">
              Specialization
            </p>
            <div className="flex flex-wrap gap-2">
              {data.specialization.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#F5EBE4] text-[#5D3011] rounded-lg text-[11px] font-semibold border border-[#E8DED6]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid: Integrated at the bottom */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <StatBox
            icon={<BookOpen size={16} />}
            value={data.stats.publications || 0}
            label="Publications"
            bgColor="bg-[#FDF2F2]"
            textColor="text-[#800000]"
          />
          <StatBox
            icon={<Briefcase size={16} />}
            value={data.stats.projects || 0}
            label="Projects"
            bgColor="bg-[#FDF2F2]"
            textColor="text-[#800000]"
          />
          <StatBox
            icon={<Award size={16} />}
            value={data.stats.patents || 0}
            label="Patents"
            bgColor="bg-[#FDF2F2]"
            textColor="text-[#800000]"
          />
        </div>
      </div>
    </div>
  );
}

function StaffCard({ data }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex gap-6 items-center">
      <img
        src={data.image}
        className="w-20 h-20 rounded-2xl bg-gray-100"
        alt=""
      />
      <div>
        <h3 className="font-bold text-lg">{data.name}</h3>
        <p className="text-[#800000] text-sm font-bold mb-2">{data.role}</p>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">
          <span className="font-bold">Expertise:</span> {data.expertise}
        </p>
        <div className="flex gap-4">
          <Mail
            size={16}
            className="text-gray-400 cursor-pointer hover:text-[#800000]"
          />
          <Phone
            size={16}
            className="text-gray-400 cursor-pointer hover:text-[#800000]"
          />
        </div>
      </div>
    </div>
  );
}
function ScholarCard({ data }) {
  // Define status colors for quick visual identification
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "thesis_submitted":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "presubmission":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "registered":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Decorative side accent */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#800000] opacity-20 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-[#2F3E46]">{data.name}</h3>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#800000]/60">
            {data.type} Scholar
          </span>
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-1 rounded-md border ${getStatusColor(data.status)}`}
        >
          {data.status.replace("_", " ")}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <User size={16} className="text-gray-400 mt-1 shrink-0" />
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">
              Supervisor
            </p>
            <p className="text-sm font-semibold text-gray-700">
              {data.supervisor}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Book size={16} className="text-gray-400 mt-1 shrink-0" />
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">
              Research Area
            </p>
            <p className="text-sm text-gray-600 leading-tight">{data.area}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
          <Calendar size={14} className="text-gray-400" />
          <span className="text-xs text-gray-500 font-medium">
            {data.duration}
          </span>
        </div>
      </div>
    </div>
  );
}

function StatBox({ icon, value, label, bgColor, textColor }) {
  return (
    <div
      className={`${bgColor} ${textColor} p-2 rounded-lg flex flex-col items-center justify-center border border-gray-100 shadow-sm`}
    >
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-sm font-bold">{value}</span>
      </div>
      <span className="text-[10px] font-bold uppercase opacity-80">
        {label}
      </span>
    </div>
  );
}

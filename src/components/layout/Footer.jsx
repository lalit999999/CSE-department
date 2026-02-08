import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#1A1F22] text-white px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold text-amber-400 mb-6">NIT Patna</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Ashok Rajpath, Mahendru, Patna, Bihar 800005
            <br />
            <br />
            Email: info@nitp.ac.in
            <br />
            Phone: 0612-2371715
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-amber-400 cursor-pointer">
              NIRF Ranking
            </li>
            <li className="hover:text-amber-400 cursor-pointer">New Campus</li>
            <li className="hover:text-amber-400 cursor-pointer">RTI</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-amber-400 cursor-pointer">Time Table</li>
            <li className="hover:text-amber-400 cursor-pointer">
              Academic Calendar
            </li>
            <li className="hover:text-amber-400 cursor-pointer">
              Senate Minutes
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#800000] transition-colors cursor-pointer">
              In
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#800000] transition-colors cursor-pointer">
              X
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2024 National Institute of Technology Patna. All Rights Reserved.
      </div>
    </footer>
  );
}

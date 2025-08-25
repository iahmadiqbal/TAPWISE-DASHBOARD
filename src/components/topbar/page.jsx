"use client";

import { FiThumbsUp } from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between px-6 h-14">
        <div className="font-semibold flex items-center gap-2">
          <span>Welcome Muhammad</span>
          <FiThumbsUp className="h-5 w-5 text-gray-700" />
        </div>

        {/* male avatar */}
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User avatar"
          className="h-8 w-8 rounded-full border border-gray-200 object-cover"
          loading="lazy"
        />
      </div>
    </header>
  );
}

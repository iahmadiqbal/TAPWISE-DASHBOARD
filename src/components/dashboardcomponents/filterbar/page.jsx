"use client";
import React from "react";
import { FiCalendar } from "react-icons/fi";

const FilterBar = () => {
  return (
    <div className="mt-6 w-full rounded-lg   bg-white p-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3 border border-solid border-[var(--border-color)]">
      {/* User Select */}
      <select className="w-full sm:w-1/3 rounded-lg border border-[var(--border-color)] py-[10px] px-[12px] bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFD900]">
        <option>Select user</option>
      </select>

      {/* Apply */}

      {/* Date Range */}
      <div className="sm:w-1/3 w-full flex items-center gap-2 rounded-lg border border-[var(--border-color)] bg-white text-sm text-gray-700 px-[12px] py-[10px]">
        <input
          type="text"
          placeholder="Select your range"
          className="flex-1 focus:outline-none"
        />
        <FiCalendar className="text-gray-500" />
      </div>

      <button className="rounded-md bg-[#FFD900] px-6 py-2 text-sm font-medium text-black hover:bg-[#ffe657] transition-colors">
        Apply
      </button>
      {/* Reset */}
      <button className="rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition-colors">
        Reset
      </button>
    </div>
  );
};

export default FilterBar;

"use client";
import React from "react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Total Profiles */}
      <div className="p-5 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.08)] border border-solid border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-[500] text-gray-700">
            Total Profiles
          </span>
          <i className="fi fi-rr-users-alt text-[var(--bg-tapwise-yellow)] text-[24px]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-2">41</h3>
        {/* Progress Bar */}
        <div className="w-full h-4 bg-[var(--secondary-white)] rounded-md overflow-hidden mt-2">
          <div
            className="h-4 bg-[var(--bg-tapwise-yellow)] transition-[width] duration-500 ease-in-out rounded-md"
            style={{ width: "31.7%" }}
          />
        </div>
      </div>

      {/* Used Profiles */}
      <div className="p-5 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.08)] border border-solid border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-[500] text-gray-700">
            Used Profiles
          </span>
          <i className="fi fi-rr-users text-[var(--text-color)] text-[24px]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-2">13</h3>
        <span className="text-sm text-green-500 mt-1">31.7% used</span>
      </div>

      {/* Profile Visits */}
      <div className="p-5 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.08)] border border-solid border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-[500] text-gray-700">
            Profile Visits
          </span>
          <i className="fi fi-rr-eye text-blue-500 text-[24px]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-2">102</h3>
        <span className="text-sm text-[var(--text-color)] mt-1">
          +23% this week
        </span>
      </div>

      {/* New Leads */}
      <div className="p-5 bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.08)] border border-solid border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-[500] text-gray-700">New Leads</span>
          <i className="fi fi-rr-chat-arrow-grow text-purple-500 text-[24px]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mt-2">18</h3>
        <span className="text-sm text-[var(--text-color)] mt-1">
          +1% this week
        </span>
      </div>
    </div>
  );
};

export default DashboardStats;

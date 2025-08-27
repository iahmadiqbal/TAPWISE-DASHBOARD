"use client";

import React, { useMemo } from "react";
import { FiUsers, FiTrendingUp, FiZap, FiCreditCard } from "react-icons/fi";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const DashboardComponents = () => {
  const { yellow, yellowHover, black, darkGray, gray100, gray200 } =
    useMemo(() => {
      if (typeof window === "undefined") {
        return {
          yellow: "#FFD900",
          yellowHover: "#FFE657",
          black: "#1E1E1E",
          darkGray: "#374151",
          gray100: "#F3F4F6",
          gray200: "#D1D5DB",
        };
      }
      const css = getComputedStyle(document.documentElement);
      return {
        yellow: css.getPropertyValue("--bg-tapwise-yellow").trim() || "#FFD900",
        yellowHover:
          css.getPropertyValue("--tapwise-yellow-hover").trim() || "#FFE657",
        black: css.getPropertyValue("--tapwise-black").trim() || "#1E1E1E",
        darkGray: "#374151",
        gray100: "#F3F4F6",
        gray200: "#D1D5DB",
      };
    }, []);

  // 🔹 Left Chart: Now has an extra slice with value 2
  const leadsTop5 = [
    { name: "Muhammad Ali", value: 5, fill: black },
    { name: "Sarah J.", value: 4, fill: darkGray },
    { name: "Michael C.", value: 3, fill: gray200 },
    { name: "Ayesha K.", value: 2, fill: gray100 },
    { name: "John S.", value: 1, fill: yellowHover },
    { name: "Extra User", value: 2, fill: yellow }, // 🔥 Added this slice
  ];

  const tapsTop5 = [
    { name: "Tech Corp", value: 5, fill: yellow },
    { name: "Design Co.", value: 4, fill: yellowHover },
    { name: "Marketing Pro", value: 3, fill: black },
    { name: "Creative Studio", value: 2, fill: darkGray },
    { name: "Blue Ocean", value: 1, fill: gray200 },
  ];

  return (
    <div className="space-y-6">
      {/* 🔹 Stats Boxes (unchanged) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl p-5 border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div>
              <p className="text-xs text-[var(--tapwise-gray)]">
                Used Profiles
              </p>
              <p className="text-xl font-bold text-[var(--tapwise-black)]">
                13 / 41
              </p>
            </div>
            <FiUsers className="h-7 w-7 text-tapwise-yellow" />
          </div>
          <p className="text-xs text-[var(--tapwise-gray)]">
            31.7% of total profiles used
          </p>
        </div>
        <div className="rounded-xl p-5 border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div>
              <p className="text-xs text-[var(--tapwise-gray)]">
                Profile Visits
              </p>
              <p className="text-xl font-bold text-[var(--tapwise-black)]">
                Total Taps: 86
              </p>
            </div>
            <FiTrendingUp className="h-7 w-7 text-tapwise-yellow" />
          </div>
          <p className="text-xs text-red-500">This week: 7 (-81%)</p>
        </div>
        <div className="rounded-xl p-5 border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div>
              <p className="text-xs text-[var(--tapwise-gray)]">New Leads</p>
              <p className="text-xl font-bold text-[var(--tapwise-black)]">
                Total Leads: 18
              </p>
            </div>
            <FiZap className="h-7 w-7 text-tapwise-yellow" />
          </div>
          <p className="text-xs text-green-500">This week: 1 (+100%)</p>
        </div>
        <div className="rounded-xl p-5 border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
            <div>
              <p className="text-xs text-[var(--tapwise-gray)]">MRR</p>
              <p className="text-xl font-bold text-[var(--tapwise-black)]">
                $3,276
              </p>
            </div>
            <FiCreditCard className="h-7 w-7 text-tapwise-yellow" />
          </div>
          <p className="text-xs text-[var(--tapwise-gray)]">
            Professional plan
          </p>
        </div>
      </div>

      {/* 🔹 Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Chart */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <h3 className="text-sm font-medium text-[var(--tapwise-black)]">
              Top 5 by Leads Users
            </h3>
          </div>
          <div className="p-5">
            <div className="w-full h-64 sm:h-72 lg:h-80 xl:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadsTop5}
                    dataKey="value"
                    nameKey="name"
                    outerRadius="80%"
                    paddingAngle={2}
                    stroke="#fff"
                    strokeWidth={2}
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Chart */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-soft hover:shadow-medium transition-shadow">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <h3 className="text-sm font-medium text-[var(--tapwise-black)]">
              Top 5 by Taps Users
            </h3>
          </div>
          <div className="p-5">
            <div className="w-full h-64 sm:h-72 lg:h-80 xl:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tapsTop5}
                    dataKey="value"
                    nameKey="name"
                    outerRadius="80%"
                    paddingAngle={2}
                    stroke="#fff"
                    strokeWidth={2}
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <div className="flex">
        <div></div>
      </div>
    </div>
  );
};

export default DashboardComponents;

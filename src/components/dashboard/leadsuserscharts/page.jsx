"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

const barData = [
  { name: "Muhammad Ali", uv: 400 },
  { name: "Jawad Ahmed", uv: 320 },
  { name: "Abdul Ahad", uv: 480 },
  { name: "Saad Rafique", uv: 360 },
  { name: "Test User", uv: 290 },
];

const pieData = [
  { name: "Muhammad Ali", value: 24 },
  { name: "Jawad Ahmed", value: 18 },
  { name: "Abdul Ahad", value: 16 },
  { name: "Saad Rafique", value: 12 },
  { name: "Test User", value: 9 },
];

const pieColors = [
  "var(--bg-tapwise-yellow, #FFD900)",
  "var(--tapwise-black, #1E1E1E)",
  "var(--text-color, #22C55E)",
  "var(--tapwise-gray, #6B7280)",
  "var(--tapwise-border, #C2C2C2)",
];

const lineData = [...barData];

const TopCharts = () => {
  return (
    <section className="w-full mt-5">
      <style>{`
        /* 🔥 Disable all outlines/focus rings inside charts */
        svg:focus, g:focus, div:focus, canvas:focus {
          outline: none !important;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5">
        {/* LEFT: Bar Chart */}
        <div className="bg-white border-custom rounded-lg p-4 md:p-5 shadow-[0_2px_6px_rgba(0,0,0,0.06)] select-none">
          <h4 className="text-custom mb-3">Top 5 by Leads Users</h4>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="uv"
                  fill="var(--bg-tapwise-yellow, #FFD900)"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT: Line Chart */}
        <div className="bg-white border-custom rounded-lg p-4 md:p-5 shadow-[0_2px_6px_rgba(0,0,0,0.06)] select-none">
          <h4 className="text-custom mb-3">Top 5 by Taps Users</h4>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="purple"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCharts;

"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ===== Chart Data with Months ===== */
const data = [
  { name: "January", uv: 400, pv: 2400, amt: 2400 },
  { name: "February", uv: 300, pv: 2210, amt: 2210 },
  { name: "March", uv: 200, pv: 2290, amt: 2290 },
  { name: "April", uv: 278, pv: 2000, amt: 2000 },
  { name: "May", uv: 189, pv: 2181, amt: 2181 },
  { name: "June", uv: 239, pv: 2500, amt: 2500 },
];

/* ===== Custom Triangle Bar Shape ===== */
const TriangleBar = ({ fill, x, y, width, height }) => {
  const path = `M${x},${y + height}L${x + width / 2},${y}L${x + width},${
    y + height
  }Z`;
  return <path d={path} stroke="none" fill={fill} />;
};

/* ===== Tooltip Helper ===== */
function getIntroOfPage(label) {
  switch (label) {
    case "January":
      return "January stats overview";
    case "February":
      return "February stats overview";
    case "March":
      return "March stats overview";
    case "April":
      return "April stats overview";
    case "May":
      return "May stats overview";
    case "June":
      return "June stats overview";
    default:
      return "";
  }
}

/* ===== Custom Tooltip ===== */
function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-md">
        <p className="font-medium text-gray-800">{`${label} : ${payload[0].value}`}</p>
        <p className="text-sm text-gray-600">{getIntroOfPage(label)}</p>
      </div>
    );
  }
  return null;
}

/* ===== Chart Component with Fixed Size ===== */
const RenderBarChart = () => (
  <div className="w-full h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          radius={[4, 4, 0, 0]}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill="#8884d8" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

/* ===== Panels Layout ===== */
const RecentAlertsPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      {/* LEFT PANEL (Wide) */}
      <div className="md:col-span-2 border border-solid border-[var(--border-color)] rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Stats Last 6 Months
        </h2>

        <div className="flex mx-5 justify-center gap-10">
          <img src="greenbox.png" />
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Leads</h2>

          <img src="yellowbox.png" />
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Top</h2>
        </div>
        <RenderBarChart />
      </div>

      {/* RIGHT PANEL (Recent Alerts with List) */}
      <RecentAlerts />
    </div>
  );
};

/* ===== Alerts Card ===== */
const RecentAlerts = () => {
  const alerts = [
    { name: "Muhamamd Ali", date: "August 25, 12:02", status: "lead" },
    { name: "jawad", date: "August 06, 15:09", status: "lead" },
    { name: "Ahad Ali", date: "August 06, 15:09", status: "lead" },
    { name: "Test02", date: "July 14, 13:06", status: "lead" },
    { name: "jawad ahmed", date: "July 14, 12:59", status: "lead" },
  ];

  return (
    <div className="border border-solid border-[var(--border-color)] rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Recent Alerts</h2>
        <button className="text-sm  font-bold text-gray-800 ">View All</button>
      </div>

      <div className="flex flex-col gap-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-none"
          >
            <div>
              <span className="text-sm font-medium text-gray-800">
                {alert.name}
              </span>
              <span className="block text-xs text-gray-500">{alert.date}</span>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
              {alert.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAlertsPanel;

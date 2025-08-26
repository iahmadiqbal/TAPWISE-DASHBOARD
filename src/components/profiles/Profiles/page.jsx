"use client";

import React from "react";
import {
  FiSearch,
  FiPlus,
  FiEdit,
  FiEye,
  FiTrash2,
  FiMoreHorizontal,
  FiActivity,
} from "react-icons/fi";
import { LuQrCode } from "react-icons/lu";

// ------- dummy  data (same) -------
const mockProfiles = [
  /* ...same as your code... */
];

const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "inactive":
      return "bg-red-100 text-red-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export default function Profiles() {
  return (
    <div className="space-y-6 font-system">
      {/* 👈 added font-system */}
      {/* Header Actions: mobile -> row (button right), sm+ -> 3-col grid (search centered) */}
      <div className="flex items-center justify-between gap-2 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
        {/* Search */}
        <div className="flex sm:col-start-2 sm:justify-center">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-tapwise-gray h-4 w-4" />
            <input
              type="text"
              placeholder="Search profiles..."
              className="h-9 w-40 sm:w-64 pl-10 rounded-md border border-border bg-white text-sm placeholder:text-tapwise-gray focus:outline-none"
            />
          </div>
        </div>

        {/* Add Profile */}
        <div className="sm:col-start-3 sm:justify-self-end">
          <button className="inline-flex items-center justify-center h-9 px-4 rounded-md transition-colors">
            <FiPlus className="h-4 w-4 mr-2" />
            Add Profile
          </button>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfiles.map((profile) => (
          <div
            key={profile.id}
            className="border border-border rounded-lg bg-white shadow-soft hover:shadow-medium transition-shadow"
          >
            {/* CardHeader */}
            <div className="p-6 pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-tapwise-yellow rounded-full flex items-center justify-center">
                    <span className="font-semibold text-tapwise-black">
                      {getInitials(profile.name)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-tapwise-black">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-tapwise-gray">
                      {profile.cardId}
                    </p>
                  </div>
                </div>

                <button
                  className="h-8 w-8 rounded-md hover:bg-gray-100 inline-flex items-center justify-center"
                  aria-label="More"
                >
                  <FiMoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* CardContent */}
            <div className="p-6 pt-3 space-y-4">
              <div>
                <p className="text-sm text-tapwise-gray">{profile.email}</p>
                <p className="text-sm text-tapwise-gray">{profile.company}</p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                    profile.status
                  )}`}
                >
                  {profile.status}
                </span>

                <div className="flex items-center space-x-1 text-sm text-tapwise-gray">
                  <LuQrCode className="h-4 w-4" />
                  <span>{profile.scans} scans</span>
                </div>
              </div>

              <div className="flex items-center space-x-1 text-xs text-tapwise-gray">
                <FiActivity className="h-3 w-3" />
                <span>Last activity: {profile.lastActivity}</span>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <button className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-border text-sm transition-colors flex-1">
                  <FiEye className="h-4 w-4 mr-1" />
                  View
                </button>
                <button className="inline-flex items-center justify-center h-8 px-3 rounded-md border border-border text-sm transition-colors flex-1">
                  <FiEdit className="h-4 w-4 mr-1" />
                  Edit
                </button>
                <button
                  className="inline-flex items-center justify-center h-8 px-2 rounded-md border border-border text-sm transition-colors"
                  title="Delete"
                >
                  <FiTrash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-tapwise-yellow">4</div>
            <div className="text-sm text-tapwise-gray">Total Profiles</div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-green-500">2</div>
            <div className="text-sm text-tapwise-gray">Active</div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">1</div>
            <div className="text-sm text-tapwise-gray">Pending</div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-white shadow-soft">
          <div className="p-4 text-center">
            <div className="text-2xl font-bold text-tapwise-black">535</div>
            <div className="text-sm text-tapwise-gray">Total Scans</div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";

const profiles = [
  {
    name: "ALI ALAHMARI",
    status: "Expired",
    qr: 20,
    avatar: "/images/profilepicture-1.png",
  },
  {
    name: "Abdul Ahad",
    role: "Web Developer",
    email: "test123@gmail.com",
    phone: "+92121234545",
    status: "Active",
    qr: 49,
    avatar: "/images/profilepicture2.png",
  },
  { name: "Unnamed", status: "Active", qr: 0, avatar: "/images/unnamed.png" },
  {
    name: "Muhammad Ali 01",
    phone: "+387123",
    status: "Active",
    qr: 6,
    avatar: "/images/Ali.png",
  },
  {
    name: "Muhammad Ali 0679",
    phone: "+358181234",
    status: "Active",
    qr: 2,
    avatar: "/images/image5.png",
  },
  {
    name: "Abdulah Alhokair",
    phone: "+933455601448",
    status: "Active",
    qr: 5,
    avatar: "/images/abdullah.png",
  },
  {
    name: "test phon ext",
    status: "Active",
    qr: 1,
    avatar: "/images/testphoneimage.png",
  },
  {
    name: "Image Issue",
    status: "Active",
    qr: 0,
    avatar: "/images/issueimage.png",
  },
  {
    name: "test image",
    status: "Active",
    qr: 1,
    avatar: "/images/testimage.png",
  },
  {
    name: "Ahad Ali",
    role: "Web developer",
    email: "ahadalimeer@gmail.com",
    status: "Active",
    qr: 2,
    avatar: "/images/ahadali.png",
  },
  { name: "Goods", status: "Active", qr: 0, avatar: "/images/good.png" },
  {
    name: "Saad Malik",
    role: "CEO",
    email: "saadmalikworld=1@gmail.com",
    phone: "+9203440512256",
    status: "Active",
    qr: 12,
    avatar: "/images/saadmalik.png",
  },
  {
    name: "Saad Rafique",
    role: "CEO",
    email: "info@hikenseek.ae",
    phone: "+9203335153038",
    status: "Active",
    qr: 18,
    avatar: "/images/profilepicture13.png",
  },
];

// 🔹 Status Badge
const StatusChip = ({ status }) => {
  const isActive = status === "Active";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
        isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
      }`}
    >
      <span
        className={`mr-1 h-2 w-2 rounded-full ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      />
      {status}
    </span>
  );
};

// 🔹 QR Code Badge
const QRBadge = ({ count = 0 }) => (
  <div className="flex items-center gap-1 text-gray-700">
    <img src="/images/qr.svg" alt="QR Code" className="w-5 h-5" />
    <span className="text-sm font-semibold">{count}</span>
  </div>
);

// 🔹 Profile Card
const ProfileCard = ({ p }) => (
  <div className="rounded-lg bg-white p-4 shadow-sm border-custom flex flex-col justify-between h-[240px] w-full text-custom">
    <div>
      <div className="flex items-start gap-3">
        <img
          src={p.avatar}
          alt={p.name}
          className="h-12 w-12 rounded-full object-cover border-custom"
        />
        <div className="flex-1 min-w-0">
          <h3 className="truncate text-base font-semibold text-gray-900">
            {p.name}
          </h3>
          {p.role && <p className="text-xs text-gray-600">{p.role}</p>}
        </div>
      </div>
      <div className="mt-2 space-y-0.5 text-xs text-gray-700">
        {p.email && <p className="truncate">{p.email}</p>}
        {p.phone && <p className="truncate">{p.phone}</p>}
      </div>
    </div>

    <div className="mt-2 flex items-center justify-between">
      <StatusChip status={p.status} />
      <QRBadge count={p.qr} />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <button className="flex-1 rounded-md border-custom px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
        <i className="fi fi-rr-eye mr-1" /> View
      </button>
      <button className="flex-1 rounded-md border-custom px-3 py-1.5 text-xs font-medium hover:bg-gray-50">
        <i className="fi fi-rr-edit mr-1" /> Edit
      </button>
    </div>
  </div>
);

// 🔹 Main Profiles Page
const Profile = () => {
  const available = 28;
  const consumed = 13;

  return (
    <div className="pt-0 pb-3 text-custom">
      {/* Title + Add Button in one row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl text-[var(--tapwise-black)] font-bold">
          Profiles
        </h1>
        <button className="rounded-md bg-[var(--bg-tapwise-yellow)] px-4 py-2 text-sm font-semibold text-black hover:bg-[var(--tapwise-yellow-hover)] flex items-center gap-1">
          <i className="fi fi-rr-plus" /> Add Profile
        </button>
      </div>

      {/* Search Bar Below */}
      <div className="relative sm:w-64 mb-4">
        <i className="fi fi-rr-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search profiles..."
          className="w-full rounded-md border-custom pl-9 pr-3 py-2 text-[14px] leading-normal text-[#737373] placeholder:text-[#737373] focus:outline-none"
        />
      </div>

      {/* Counters */}
      <div className="flex justify-end gap-5 mb-3">
        <div className="flex items-center gap-1">
          <span className="h-4 w-4 rounded-full bg-[var(--bg-tapwise-yellow)]" />
          <span className="font-sans font-normal text-black text-base leading-normal">
            {available}
          </span>
          <span className="text-gray-600 ">Available</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-4 w-4 rounded-full bg-green-500" />
          <span className="font-sans font-normal text-black text-base leading-normal">
            {consumed}
          </span>
          <span className="text-gray-600 font-[16px]">Consumed</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {profiles.map((p, i) => (
          <ProfileCard key={i} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Profile;

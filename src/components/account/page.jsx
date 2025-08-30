"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaRedditAlien,
  FaWhatsapp,
  FaSnapchatGhost,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FiGlobe, FiPlus, FiEdit2 } from "react-icons/fi";

/* Helpers */
const Card = ({ className = "", children }) => (
  <section
    className={`rounded-2xl border border-[#E5E7EB] bg-white ${className}`}
  >
    {children}
  </section>
);

const HeaderBar = ({ title, right }) => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB] bg-white rounded-t-2xl">
    <h4 className="text-[15px] font-semibold">{title}</h4>
    {right}
  </div>
);

const AddBtn = () => (
  <button className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold bg-[#FFD900] hover:brightness-95">
    <FiPlus className="h-4 w-4" />
    Add
  </button>
);

const ListItem = ({ icon, label, actions }) => (
  <div className="flex items-center justify-between px-4 py-2.5">
    <div className="flex items-center gap-3">
      <span className="h-8 w-8 grid place-items-center rounded-full border border-black/15 bg-white">
        {icon}
      </span>
      <span className="text-[15px]">{label}</span>
    </div>
    <div className="flex items-center gap-2">{actions}</div>
  </div>
);

const PillStat = ({ label, value }) => (
  <div className="rounded-xl bg-[#F7F7F7] px-5 py-4 flex items-center justify-between">
    <span className="text-[16px] text-[#6B7280]">{label}</span>
    <span className="text-[20px] font-bold">{value}</span>
  </div>
);

const AccountComponents = () => {
  return (
    <main className="min-h-screen bg-[#F5F5F5] font-sans text-black">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-6 pb-10">
        {/* header row */}
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-[32px] font-semibold">Account Details</h1>
          <button className="rounded-lg px-4 py-2 text-sm font-semibold bg-[#FFD900] hover:brightness-95">
            Edit Company Detail
          </button>
        </div>

        {/* top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Company Information (left, 2/3) */}
          <Card className="md:col-span-2 p-4">
            <div className="flex items-center gap-3 text-[16px]">
              <span className="h-7 w-7 grid place-items-center rounded-full border border-black/20">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c1.6-4.4 6-6 8-6s6.4 1.6 8 6" />
                </svg>
              </span>
              <span className="font-medium">Company Information</span>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="h-[96px] w-[96px] rounded-full bg-[#FFFAE9] ring-[10px] ring-[#E6E7EA] shadow-[0_6px_16px_rgba(0,0,0,0.15)] grid place-items-center">
                <svg viewBox="0 0 48 48" className="h-12 w-12">
                  <circle cx="24" cy="16" r="8" fill="#FDBA4D" />
                  <path d="M10 40c2-8 10-12 14-12s12 4 14 12" fill="#FDBA4D" />
                </svg>
              </div>
              <h2 className="mt-2 text-[22px] font-semibold">TapWise</h2>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#F7F7F7] px-4 py-3">
                <p className="text-[15px] font-semibold">Company Email</p>
                <p className="text-[15px] text-[#6B7280]">
                  ali.tapwise@gmail.com
                </p>
              </div>
              <div className="rounded-xl bg-[#F7F7F7] px-4 py-3">
                <p className="text-[15px] font-semibold">Phone</p>
                <p className="text-[15px] text-[#6B7280]">+923455604321</p>
              </div>
              <div className="rounded-xl bg-[#F7F7F7] px-4 py-3">
                <p className="text-[15px] font-semibold">Website</p>
                <p className="text-[15px] text-[#6B7280] break-all">
                  https://tapwise.digital
                </p>
              </div>
              <div className="rounded-xl bg-[#F7F7F7] px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-semibold">Addresses</p>
                  <div className="flex items-center gap-2">
                    <button className="h-8 w-8 rounded-full bg-[#FFD900] grid place-items-center hover:brightness-95">
                      <FiPlus className="h-4 w-4" />
                    </button>
                    <button className="h-8 w-8 rounded-full bg-[#FFD900] grid place-items-center hover:brightness-95">
                      <FiEdit2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-[15px] text-[#6B7280]">2 addresses listed</p>
              </div>
            </div>
          </Card>

          {/* Usage Summary (right, EXACT like screenshot) */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              {/* tiny waveform icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h3l2-4 4 8 2-4h5" />
              </svg>
              <h3 className="text-[18px] font-semibold">Usage Summary</h3>
            </div>

            <div className="space-y-4">
              <PillStat label="Total Profiles" value="41" />
              <PillStat label="Total Taps" value="125" />
              <PillStat label="Current Month Taps" value="104" />
              <PillStat label="Current Month Leads" value="0" />
            </div>
          </Card>
        </div>

        {/* bottom grid - 4 columns */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Social */}
          <Card>
            <HeaderBar title="Social" right={<AddBtn />} />
            <div className="py-2">
              {[
                {
                  label: "Facebook",
                  icon: <FaFacebookF className="h-4 w-4" />,
                },
                {
                  label: "Instagram",
                  icon: <FaInstagram className="h-4 w-4" />,
                },
                { label: "Twitter", icon: <FaTwitter className="h-4 w-4" /> },
                { label: "TikTok", icon: <FaTiktok className="h-4 w-4" /> },
                {
                  label: "LinkedIn",
                  icon: <FaLinkedinIn className="h-4 w-4" />,
                },
                { label: "Behance", icon: <FaBehance className="h-4 w-4" /> },
                { label: "Dribbble", icon: <FaDribbble className="h-4 w-4" /> },
                {
                  label: "Reddit",
                  icon: <FaRedditAlien className="h-4 w-4" />,
                },
                { label: "WhatsApp", icon: <FaWhatsapp className="h-4 w-4" /> },
                {
                  label: "Snapchat",
                  icon: <FaSnapchatGhost className="h-4 w-4" />,
                },
              ].map((it, i) => (
                <ListItem
                  key={i}
                  icon={it.icon}
                  label={it.label}
                  actions={<FiEdit2 className="h-4 w-4 opacity-70" />}
                />
              ))}
            </div>
          </Card>

          {/* Play Store */}
          <Card>
            <HeaderBar title="Play Store" right={<AddBtn />} />
            <div className="py-2">
              {["Play Store 01", "Play Store 02", "Play Store 03"].map(
                (label, i) => (
                  <ListItem
                    key={i}
                    icon={<FaGooglePlay className="h-4 w-4" />}
                    label={label}
                    actions={<FiEdit2 className="h-4 w-4 opacity-70" />}
                  />
                )
              )}
            </div>
          </Card>

          {/* App Store */}
          <Card>
            <HeaderBar title="App Store" right={<AddBtn />} />
            <div className="py-2">
              {["App Store 01", "App Store 02"].map((label, i) => (
                <ListItem
                  key={i}
                  icon={<FaApple className="h-4 w-4" />}
                  label={label}
                  actions={<FiEdit2 className="h-4 w-4 opacity-70" />}
                />
              ))}
            </div>
          </Card>

          {/* Web Apps */}
          <Card>
            <HeaderBar title="Web Apps" right={<AddBtn />} />
            <div className="py-2">
              {["Web App 01", "Web App 01"].map((label, i) => (
                <ListItem
                  key={i}
                  icon={<FiGlobe className="h-4 w-4" />}
                  label={label}
                  actions={<FiEdit2 className="h-4 w-4 opacity-70" />}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default AccountComponents;

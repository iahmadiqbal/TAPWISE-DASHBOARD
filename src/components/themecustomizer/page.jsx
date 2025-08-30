"use client";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { LuScanLine } from "react-icons/lu";

/* ===== tiny icons kept ===== */
const Pencil = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25Z"
      stroke="#FFD900"
      strokeWidth="1.6"
    />
    <path d="m14.75 5.06 3.75 3.75" stroke="#FFD900" strokeWidth="1.6" />
  </svg>
);
const ChevronRight = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PlayIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
  </svg>
);
const AppleIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <path
      d="M16.7 13.3c-.1 2.6 2.3 3.4 2.3 3.4s-1.8 5.1-4.2 5.1c-1.1 0-2-.8-3.2-.8s-2.1.8-3.2.8C6.2 21.8 4 17 4 14.1c0-3 2.1-4.6 4.2-4.6 1.1 0 2.1.8 3.2.8s2.1-.9 3.6-.9c.6 0 2.7.1 3.9 2.1-2.1 1.1-2.4 2.8-2.2 3.8Z"
      fill="currentColor"
    />
    <path
      d="M14.9 4.4c.7-.8 1.2-2 1-3.1-1 .1-2.2.7-2.9 1.5-.6.7-1.1 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z"
      fill="currentColor"
    />
  </svg>
);
const GlobeIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p}>
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M2 12h20M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/* ===== tiny atoms ===== */
const Swatch = ({ color, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="h-11 w-11 rounded-xl border-2 border-[#D1D5DB] bg-white grid place-items-center overflow-hidden focus:outline-none"
  >
    {color ? (
      <span
        className="h-9 w-9 rounded-lg block"
        style={{ background: color }}
      />
    ) : (
      <Pencil />
    )}
  </button>
);
const StoreRow = ({ Icon, label }) => (
  <button className="mt-2 w-full flex items-center justify-between px-2 py-2.5">
    <div className="flex items-center gap-3">
      <Icon />
      <span className="text-[18px]">{label}</span>
    </div>
    <ChevronRight />
  </button>
);

/* ===== main component ===== */
export default function ThemeRightExact() {
  const coverRef = useRef(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [coverError, setCoverError] = useState("");
  const logoRef = useRef(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoError, setLogoError] = useState("");
  const pickA = useRef(null),
    pickB = useRef(null),
    pickC = useRef(null),
    pickD = useRef(null);

  const handleFile = (e, setPreview, setError) => {
    setError("");
    const f = e.target.files?.[0];
    if (!f) return;
    const okType = ["image/jpeg", "image/png"].includes(f.type);
    const okSize = f.size <= 8 * 1024 * 1024;
    if (!okType) return setError("Please select a .jpeg or .png image.");
    if (!okSize) return setError("Max file size is 8MB.");
    setPreview(URL.createObjectURL(f));
  };

  return (
    <main className="bg-[#F5F5F5] min-h-screen font-sans text-base leading-normal font-normal text-black">
      <div className="mx-auto max-w-[1150px] px-4 pt-3">
        <h1 className="text-[28px] font-semibold">Theme</h1>
      </div>

      <div className="mx-auto max-w-[1150px] px-4 pb-10 grid grid-cols-12 gap-4">
        {/* LEFT COLUMN (unchanged) */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          {/* Cover Image */}
          <section className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm p-4">
            <h2 className="text-[18px] font-semibold">Cover Image</h2>
            <div className="mt-3">
              <div className="w-full rounded-[18px] bg-black overflow-hidden aspect-[21/6]">
                {coverPreview && (
                  <img
                    src={coverPreview}
                    alt="Cover"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="mt-2 flex items-start justify-between">
              <div className="text-xs text-[#6B7280] leading-5">
                <p>Recommended dimensions: 1100x700px</p>
                <p>Max file size 8MB (.jpeg or .png only)</p>
                {coverError && (
                  <p className="mt-1 text-red-600">{coverError}</p>
                )}
              </div>
              <div>
                <button
                  onClick={() => coverRef.current?.click()}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-black bg-[var(--bg-tapwise-yellow,#FFD900)] hover:brightness-95"
                >
                  Update
                </button>
                <input
                  ref={coverRef}
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={(e) =>
                    handleFile(e, setCoverPreview, setCoverError)
                  }
                  className="hidden"
                />
              </div>
            </div>
          </section>

          {/* Company Logo */}
          <section className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm p-4">
            <h2 className="text-[18px] font-semibold mb-2">Company Logo</h2>
            <div className="flex items-start gap-4">
              <div className="h-[82px] w-[82px] rounded-full bg-[#F3F4F6] ring-1 ring-[#D1D5DB] grid place-items-center overflow-hidden">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <svg viewBox="0 0 48 48" className="h-12 w-12">
                    <circle cx="24" cy="16" r="8" fill="#FBBF24" />
                    <path
                      d="M10 40c2-8 10-12 14-12s12 4 14 12"
                      fill="#FBBF24"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#6B7280]">
                  Recommended dimensions: 100px × 100px
                </p>
                <p className="text-xs text-[#6B7280]">
                  Max file size: 8MB (.jpeg or .png only)
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => logoRef.current?.click()}
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-black bg-[var(--bg-tapwise-yellow,#FFD900)] hover:brightness-95"
                  >
                    Change
                  </button>
                  <button
                    onClick={() => {
                      setLogoPreview(null);
                      if (logoRef.current) logoRef.current.value = "";
                    }}
                    className="rounded-lg px-4 py-2 text-sm font-semibold text-black bg-white border border-black/60 hover:bg-black/5"
                  >
                    Remove
                  </button>
                  <input
                    ref={logoRef}
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={(e) =>
                      handleFile(e, setLogoPreview, setLogoError)
                    }
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Color Customization */}
          <section className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm p-4">
            <h2 className="text-[18px] font-semibold">Color Customization</h2>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <p className="text-[14px] font-semibold mb-2">
                  Background Color
                </p>
                <div className="flex items-center gap-3">
                  <Swatch onClick={() => pickA.current?.click()} />
                  <Swatch color="#FFF6DB" />
                  <Swatch onClick={() => pickB.current?.click()} />
                  <Swatch color="#FFFFFF" />
                </div>
              </div>
              <div>
                <p className="text-[14px] font-semibold mb-2">Text Colors</p>
                <div className="flex items-center gap-3">
                  <Swatch onClick={() => pickC.current?.click()} />
                  <Swatch color="#000000" />
                </div>
              </div>
              <div>
                <p className="text-[14px] font-semibold mb-2">Button Color</p>
                <div className="flex items-center gap-3">
                  <Swatch onClick={() => pickD.current?.click()} />
                  <Swatch color="var(--bg-tapwise-yellow, #FFD900)" />
                </div>
              </div>
              <div>
                <p className="text-[14px] font-semibold mb-2">
                  Button Text Color
                </p>
                <div className="flex items-center gap-3">
                  <Swatch />
                  <Swatch color="#000000" />
                </div>
              </div>
            </div>
            <input ref={pickA} type="color" className="hidden" />
            <input ref={pickB} type="color" className="hidden" />
            <input ref={pickC} type="color" className="hidden" />
            <input ref={pickD} type="color" className="hidden" />
          </section>

          {/* Action bar */}
          <section className="rounded-xl border border-[#E5E7EB] bg-white shadow-sm p-3">
            <div className="flex items-center gap-3">
              <button className="rounded-lg px-5 py-2.5 text-sm font-semibold text-black bg-[var(--bg-tapwise-yellow,#FFD900)] hover:brightness-95">
                Save Changes
              </button>
              <button className="rounded-lg px-5 py-2.5 text-sm font-semibold text-black bg-white border border-black/60 hover:bg-black/5">
                Reset Changes
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN — EXACT screenshot layout */}
        <aside className="col-span-12 md:col-span-4">
          <div className="bg-[#FFFBE9] rounded-md overflow-hidden">
            {/* taller black cover for exact look */}
            <div className="w-full bg-black h-[200px]" />

            <div className="relative px-4 pb-8">
              {/* CARD */}
              <div className="mx-auto w-full max-w-[430px] rounded-[26px] bg-white border border-black/10 shadow-[0_16px_40px_rgba(0,0,0,0.16)] px-6 pt-20 pb-7">
                <div className="text-center">
                  <h4 className="text-[32px] leading-[34px] font-semibold">
                    Full Name
                  </h4>
                  <p className="text-[20px] leading-[24px] text-[#6B7280] mt-2">
                    Position
                  </p>
                </div>

                <div className="mt-8">
                  {/* email */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 grid place-items-center rounded-full border border-black/20">
                        <FiMail className="h-5 w-5" />
                      </span>
                      <span className="text-[18px]">yours@gmail.com</span>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="border-b border-black/10" />

                  {/* phone */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 grid place-items-center rounded-full border border-black/20">
                        <FiPhone className="h-5 w-5" />
                      </span>
                      <span className="text-[18px]">+92 1111111111</span>
                    </div>
                    <ChevronRight />
                  </div>
                  <div className="border-b border-black/10" />

                  {/* location */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="h-9 w-9 grid place-items-center rounded-full border border-black/20">
                        <FiMapPin className="h-5 w-5" />
                      </span>
                      <span className="text-[18px]">Islamabad, Pakistan</span>
                    </div>
                    <ChevronRight />
                  </div>
                </div>
              </div>

              {/* AVATAR + BADGE (perfectly overlapping) */}
              <div className="absolute left-1/2 -top-[65px] -translate-x-1/2">
                <div className="relative">
                  {/* outer ring + glow */}
                  <div className="h-[132px] w-[132px] rounded-full bg-[#FFFAE9] ring-[10px] ring-[#E7E8EB] shadow-[0_8px_22px_rgba(0,0,0,0.28)] grid place-items-center">
                    <div className="h-[110px] w-[110px] rounded-full bg-[#FFFAE9] grid place-items-center">
                      <svg viewBox="0 0 48 48" className="h-[72px] w-[72px]">
                        <circle cx="24" cy="16" r="8" fill="#FDBA4D" />
                        <path
                          d="M10 40c2-8 10-12 14-12s12 4 14 12"
                          fill="#FDBA4D"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* floating yellow scan badge with white outline */}
                  <span className="absolute -right-2 bottom-2 h-10 w-10 rounded-full bg-[var(--bg-tapwise-yellow,#FFD900)] ring-4 ring-white grid place-items-center shadow-md">
                    <LuScanLine className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

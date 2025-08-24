"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LuLayoutDashboard as LayoutDashboard,
  LuUsers as Users,
  LuUserPlus as UserPlus,
  LuPalette as Palette,
  LuUser as UserIcon,
  LuCreditCard as CreditCard,
  LuLogOut as LogOut,
  LuMenu as Menu,
} from "react-icons/lu";

const navigation = [
  { name: "Dashboard", href: "/pages/dashboard", icon: LayoutDashboard },
  { name: "Profiles", href: "/pages/profiles", icon: Users },
  { name: "Leads", href: "/pages/leads", icon: UserPlus },
  { name: "Theme", href: "/pages/theme", icon: Palette },
  { name: "Account", href: "/pages/account", icon: UserIcon },
  { name: "Subscription", href: "/pages/subscription", icon: CreditCard },
];

export default function Sidebar() {
  const pathname = usePathname() || "/";
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  // Close drawer on route change
  useEffect(() => {
    setIsOpenMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpenMobile(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Mobile open button */}
      <button
        type="button"
        onClick={() => setIsOpenMobile(true)}
        className="md:hidden fixed top-[max(0.5rem,env(safe-area-inset-top))] left-[max(0.5rem,env(safe-area-inset-left))] z-50 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white border border-gray-200 shadow-soft"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop for mobile */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsOpenMobile(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <div
        className={[
          "bg-white border-r border-gray-200",
          "fixed md:static inset-y-0 left-0 z-50 md:z-0",
          "h-[100dvh] md:h-screen flex flex-col",
          "transition-transform duration-300 ease-in-out",
          "md:w-64 w-72", // fixed width
          isOpenMobile ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "overflow-y-auto overscroll-contain",
        ].join(" ")}
      >
        {/* Header with Single Logo */}
        <div className="h-14 px-4 border-b border-gray-200 flex items-center justify-center sticky top-0 bg-white z-20">
          <Link
            href="/pages/dashboard"
            className="font-semibold text-xl leading-none"
          >
            <img
              src="/images/tapwise-dark-logo.png"
              alt="Tapwise logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map(({ name, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <li key={name}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-yellow-400 text-black"
                        : "text-gray-700 hover:bg-gray-100",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="ml-3 truncate">{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            type="button"
            className={[
              "w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
              "bg-black text-white hover:bg-gray-800",
              "h-10 px-4 py-2",
            ].join(" ")}
          >
            <LogOut className="h-5 w-5" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

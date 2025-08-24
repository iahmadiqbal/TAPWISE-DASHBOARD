"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ✅ Use ONE icon pack (Lucide) to avoid name clashes
import {
  LuLayoutDashboard as LayoutDashboard,
  LuUsers as Users,
  LuUserPlus as UserPlus,
  LuPalette as Palette,
  LuUser as UserIcon,
  LuCreditCard as CreditCard,
  LuLogOut as LogOut,
  LuMenu as Menu,
  LuX as X,
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname() || "/";

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div
      className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col`}
    >
      {/* Header (align with Topbar) */}
      <div className="h-14 px-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-20">
        {!isCollapsed ? (
          <Link
            href="/pages/dashboard"
            className="font-semibold text-xl leading-none"
          >
            {/* logo image */}
            <img
              src="/images/tapwise-dark-logo.png"
              alt="Tapwise logo"
              className="h-6 w-auto"
            />
          </Link>
        ) : (
          <Link
            href="/pages/dashboard"
            className="font-semibold text-lg leading-none"
          >
            T
          </Link>
        )}

        <button
          type="button"
          onClick={() => setIsCollapsed((v) => !v)}
          className="inline-flex items-center justify-center h-8 w-8 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <X className="h-4 w-4" />
          )}
        </button>
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
                    isCollapsed ? "justify-center" : "",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 truncate">{name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          type="button"
          className={[
            "w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            "bg-black text-white hover:bg-gray-800",
            isCollapsed ? "h-9 px-2 py-2" : "h-10 px-4 py-2",
          ].join(" ")}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
}

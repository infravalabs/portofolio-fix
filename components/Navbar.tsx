"use client";

import React, { useState } from "react";
import NavList from "./NavList";
import useScrollSpy from "./UseScrollSpy";
import Image from "next/image";
import { XMarkIcon, Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "@/context/ThemeContext";

interface NavItem {
  href: string;
  title: string;
}

const NavLists: NavItem[] = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About Us" },
  { href: "#projects", title: "Projects" },
  { href: "#services", title: "Services" },
  { href: "#faq", title: "FAQ" },
  { href: "#contact", title: "Contact Us" },
];

const Navbar: React.FC = () => {
  const activeId = useScrollSpy(
    NavLists.map((link) => link.href.replace("#", "")),
    80
  );

  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const textColor = "text-dev-black";
  const iconColor = "text-dev-black";

  return (
    <nav className="layout-container fixed top-0 left-0 z-30 right-0">
      <header className="flex justify-between bg-background items-center px-10 md:px-25 py-5 transition-colors duration-300">
        {/* Logo */}
        <div className="flex gap-2.5 justify-center items-center">
          <Image
            src={"/logo.png"}
            alt="Logo Infrava"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <h1 className={`${textColor} font-semibold text-body-md-16 transition-colors duration-300`}>
            Infrava Labs
          </h1>
        </div>

        {/* tombol mobile + tablet */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Toggle dark mode */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 ${
              theme === "dark" ? "hover:bg-gray-700 border border-white" : ""
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <SunIcon width={24} height={24} className="text-black" />
            ) : (
              <MoonIcon width={24} height={24} className="text-white" />
            )}
          </button>

          {/* Burger menu (mobile + md) */}
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="border cursor-pointer"
          >
            {navOpen ? (
              <XMarkIcon width={24} height={24} className={iconColor} />
            ) : (
              <Bars3Icon width={24} height={24} className={iconColor} />
            )}
          </div>
        </div>

        {/* menu desktop */}
        <div className="hidden lg:flex gap-4">
          <ul className="flex px-2.5 py-2.5 gap-7.5">
            {NavLists.map((link, index) => (
              <li
                key={index}
                className={`px-2.5 text-body-sm-14 ${textColor} leading-normal transition-colors duration-300`}
              >
                <NavList href={link.href} title={link.title} activeId={activeId} />
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border border-black hover:bg-gray-200 transition-colors duration-300 ${
              theme === "dark" ? "hover:bg-gray-700 border border-white" : ""
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <SunIcon width={24} height={24} className="text-black" />
            ) : (
              <MoonIcon width={24} height={24} className="text-white" />
            )}
          </button>
        </div>
      </header>

      {/* menu overlay untuk mobile + md */}
      <div className="lg:hidden text-body-xs-12">
        {navOpen && <MenuOverlay links={NavLists} activeId={activeId} />}
      </div>
    </nav>
  );
};

export default Navbar;

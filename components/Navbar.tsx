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

  const textColor = theme === "dark" ? "text-dev-black" : "text-dev-black";
  const iconColor = theme === "dark" ? "text-dev-black" : "text-dev-black";

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

        {/* tombol mobile + toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Toggle dark mode */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full  hover:bg-gray-200 transition-colors duration-300 ${
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

          {/* Burger menu (mobile) */}
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="border md:hidden cursor-pointer"
          >
            {navOpen ? (
              <XMarkIcon width={24} height={24} className={iconColor} />
            ) : (
              <Bars3Icon width={24} height={24} className={iconColor} />
            )}
          </div>
        </div>

        {/* menu desktop */}
        {/* Toggle dark mode */}
          <div className="hidden md:flex gap-4">
            <ul className="hidden md:flex px-2.5 py-2.5 gap-7.5">
              {NavLists.map((link, index) => (
                <li
                  key={index}
                  className={`px-2.5 md:text-body-sm-14 ${textColor} leading-normal transition-colors duration-300`}
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

      {/* menu mobile overlay */}
      <div className="md:hidden text-body-xs-12">
        {navOpen && <MenuOverlay links={NavLists} activeId={activeId} />}
      </div>
    </nav>
  );
};

export default Navbar;

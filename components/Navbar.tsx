"use client";

import React, { useState } from "react";
import NavList from "./NavList";
import useScrollSpy from "./UseScrollSpy";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

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

  return (
    <nav className="layout-container fixed top-0 left-0 z-10 right-0">
      <header className="flex justify-between items-center px-10 md:px-25 py-5 bg-white">
        <div className="flex gap-2.5 justify-center items-center">
          <Image
            src={"/logo.png"}
            alt="Logo Infrava"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <h1 className="text-dev-black font-semibold text-body-md-16">
            Infrava Labs
          </h1>
        </div>

        {/* tombol mobile */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="border md:hidden cursor-pointer"
        >
          {navOpen ? (
            <XMarkIcon width={24} height={24} className="text-dev-black" />
          ) : (
            <Bars3Icon width={24} height={24} className="text-dev-black" />
          )}
        </div>

        {/* menu desktop */}
        <ul className="hidden md:flex px-2.5 py-2.5 gap-7.5">
          {NavLists.map((link, index) => (
            <li
              key={index}
              className="px-2.5 md:text-body-sm-14 text-dev-black leading-normal"
            >
              <NavList
                href={link.href}
                title={link.title}
                activeId={activeId}
              />
            </li>
          ))}
        </ul>
      </header>

      {/* menu mobile overlay */}
      <div className="md:hidden text-body-xs-12">
        {navOpen && <MenuOverlay links={NavLists} activeId={activeId} />}
      </div>
    </nav>
  );
};

export default Navbar;

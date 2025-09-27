"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

interface NavListProps {
  href: string;
  title: string;
  activeId: string;
}

const NavList: React.FC<NavListProps> = ({ href, title, activeId }) => {
  const { theme } = useTheme();
  const sectionId = href.replace("#", "");
  const isActive = activeId === sectionId;

  const activeColor =
    theme === "dark" ? "text-white font-medium" : "text-black font-medium";
  const inactiveColor =
    theme === "dark"
      ? "text-gray-400 hover:text-white"
      : "text-gray-400 hover:text-black";

  return (
    <Link
      href={href}
      className={`${isActive ? activeColor : inactiveColor} transition-colors duration-300`}
    >
      {title}
    </Link>
  );
};

export default NavList;

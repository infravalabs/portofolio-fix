"use client";

import Link from "next/link";
import React from "react";

interface NavListProps {
  href: string;
  title: string;
  activeId: string;
}

const NavList: React.FC<NavListProps> = ({ href, title, activeId }) => {
  const sectionId = href.replace("#", ""); // hapus '#' biar bisa dibandingkan
  const isActive = activeId === sectionId;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-black font-medium"
          : "text-gray-400 hover:text-black"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavList;

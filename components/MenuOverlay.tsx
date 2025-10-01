import React from "react"
import NavList from "./NavList"

type LinkItem = {
  href: string
  title: string
}

interface MenuOverlayProps {
  links: LinkItem[]
  activeId: string
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, activeId }) => {
  return (
    <div className="bg-dev-white shadow-sm rounded-sm border border-gray-200 lg:hidden w-[160px] absolute top-20 right-12 mt-1 z-20 group">
      <div className="p-1">
        {links.map((link, index) => (
          <div
            key={index}
            className="px-2 py-1.5 rounded hover:bg-dev-grey text-dev-black transition-colors duration-500"
          >
            <NavList href={link.href} title={link.title} activeId={activeId} />
          </div>
        ))}
      </div>
    </div>
  )
}


export default MenuOverlay

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/context/ThemeContext"

const teamMembers = [
  {
    name: "Yogi Prasetya",
    role: "Founder & FE",
    img: "/yogi2.jpg",
    linkedin: "/linkedin.png",
    github: "/github.png",
    linkedinUrl: "https://www.linkedin.com/in/yogiprasetyad/",
    githubUrl:"https://github.com/YogiPrasetyaD/"
  },
  {
    name: "Ajay Binjay",
    role: "Founder & BE",
    img: "/ajay.png",
    linkedin: "/linkedin.png",
    github: "/github.png",
    linkedinUrl: "https://www.linkedin.com/in/yogiprasetyad/",
    githubUrl:"https://github.com/YogiPrasetyaD/"
  },
  {
    name: "Ngurah",
    role: "Front End Developer",
    img: "/dekwah2.jpg",
    linkedin: "/linkedin.png",
    github: "/github.png",
    linkedinUrl: "https://www.linkedin.com/in/yogiprasetyad/",
    githubUrl:"https://github.com/YogiPrasetyaD/"
  },
  {
    name: "Mahardika",
    role: "Hardware Specialist",
    img: "/ajay.png",
    linkedin: "/linkedin.svg",
    github: "/github.png",
    linkedinUrl: "https://www.linkedin.com/in/yogiprasetyad/",
    githubUrl:"https://github.com/YogiPrasetyaD/"
  },
]


const OurTeam = () => {

  const { theme } = useTheme();
  
  const textColor = theme === "dark" ? "text-dev-blue" : "text-dev-light-blue";
  const textColorRole = theme === "dark" ? "text-dev-grey" : "text-dev-light-grey";

  return (
    <div id="ourteam" className="md:px-50 mt-10 md:mt-20 scroll-mt-20 flex flex-col gap-5 md:gap-5">
      {/* Heading */}
      <div className="flex flex-col gap-4 px-5 py-5">
        <p><span className='rounded-2xl border border-dev-black text-body-sm-14 px-1 py-0.5'>Who</span> <span className='rounded-2xl border border-dev-black text-body-sm-14 px-1 py-0.5'>We</span> <span className='rounded-2xl border border-dev-black text-body-sm-14 px-1 py-0.5'>Are</span></p>
        <h2 className="text-body-lg-20 md:text-head-2-48 font-bold w-full">
          Amazing Team Behind Infrava
        </h2>
      </div>
      {/* Description */}
      <div className="px-5 py-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-justify text-body-md-16 font-semibold">
            Smart ideas, powerful tech, driving impact in the digital era.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-body-sm-14 text-justify text-dev-grey">
            Driven by innovation and customer trust, Infrava Labs specializes in Web Development, Digital Wedding Invitations, and Hardware Repair. Our vision is to lead in practical digital solutions, while our mission is to deliver reliable, creative, and impactful services that empower both individuals and businesses.
          </p>
          <p className="text-body-sm-14 text-justify text-dev-grey">
            Behind Infrava Labs stands a committed team of Web Developers, Digital Invitation Creators, and Hardware Specialists. Together, we turn challenges into practical solutions. For us, technology is not just about functionality, it’s about creativity, teamwork, and delivering value that lasts.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 px-5 py-5 gap-10 md:gap-5">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="rounded-lg relative shadow-xl border-gray-200 h-120 md:h-80 flex"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={600}
              height={600}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 w-full h-25 md:h-15 z-10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

              {/* Content di atas gradient */}
              <div className="relative z-20 flex flex-col px-5 w-full h-full">
                {/* Nama */}
                <h5 className={`text-body-lg-20 md:text-body-sm-14 ${textColor} font-bold`}>
                  {member.name}
                </h5>

                {/* Role kiri + Ikon kanan */}
                <div className="flex flex-row justify-between items-center w-full">
                  {/* Role */}
                  <p className={`text-body-md-16 md:text-body-xs-12 ${textColorRole}`}>
                    {member.role}
                  </p>

                  {/* Ikon Sosmed */}
                  <div className="flex gap-2">
                    <Link href={member.linkedinUrl}>
                      <svg
                        className="w-6 h-6 md:w-5 md:h-5 text-white border rounded-full p-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clipRule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </Link>
                    <Link href={member.githubUrl}>
                      <svg
                        className="w-6 h-6 md:w-5 md:h-5 text-white border rounded-full p-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam

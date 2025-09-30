"use client"

import Link from 'next/link'
import React from 'react'
import { useTheme } from "@/context/ThemeContext"

const Footer = () => {
    
    const { theme } = useTheme()
    const textColor = theme === "dark" ? "text-dev-grey" : "text-dev-light-grey"
    const textColorTitle = theme === "dark" ? "text-dev-black" : "text-dev-white"

  return (
    <div className='mt-20 items-center'>
        <div className=' bg-dev-blue-navy py-9 px-5 md:px-60'>
            <div className='flex justify-between items-start'>
                <div className='pb-8 flex'>
                    <div className={`flex flex-col gap-5 ${textColorTitle}`}>
                        <h2 className='font-bold text-body-md-16 md:text-body-lg-20'>Infrava Labs</h2>
                        <div className={`flex flex-col gap-2 ${textColor}`}>
                            <p className='font-medium text-body-xs-12'>0412825688</p>
                            <p className='font-medium text-body-xs-12'>infravalabs@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-3 justify-start'>
                        <h2 className={`font-bold text-body-md-16 md:text-body-lg-20 ${textColorTitle}`}>Infrava Labs</h2>
                        <div className={`flex flex-col gap-1 ${textColor}`}>
                            <Link href={"/#home"} className='text-body-xs-12'>
                                Home
                            </Link>
                            <Link href={"/#about"} className='text-body-xs-12'>
                                About Us
                            </Link>
                            <Link href={"/#projects"} className=' text-body-xs-12'>
                                Projects
                            </Link>
                            <Link href={"/#services"} className=' text-body-xs-12'>
                                Services
                            </Link>
                            <Link href={"/#faq"} className=' text-body-xs-12'>
                                FAQ
                            </Link>
                            <Link href={"/#contact"} className=' text-body-xs-12'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 justify-start'>
                        <h2 className={`font-bold text-body-md-16 md:text-body-lg-20 ${textColorTitle}`} >Socials</h2>
                        <div className={`flex flex-col gap-1 ${textColor}`}>
                            <Link href={"/home"} className=' text-body-xs-12'>
                                Instagram
                            </Link>
                            <Link href={"/about"} className=' text-body-xs-12'>
                                Linked In
                            </Link>
                            <Link href={"/projects"} className=' text-body-xs-12'>
                                Whatsapp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full mt-8 ${textColor}`}>
                <div className="h-[1px] bg-gray-500 w-full"></div>
                <p className="text-body-xs-12 text-center mt-2">© 2025 Mamaku Studio</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
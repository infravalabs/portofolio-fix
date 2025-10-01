"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { useTheme } from "@/context/ThemeContext"

const HeroSection = () => {
  const { theme } = useTheme()

  const container: Variants = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.4 } 
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } 
    }
  }

  // Warna sesuai tema
  const textColor = theme === "dark" ? "text-dev-black" : "text-dev-white"
  const subTextColor = theme === "dark" ? "text-dev-black" : "text-dev-white"
  const ctaBg = theme === "dark" ? "bg-white text-black hover:bg-gray-200" : "bg-dev-white text-dev-blue hover:bg-dev-light-grey"

  return (
    <div id='home' className='lg:px-10 xl:px-50 mt-10 md:mt-20 scroll-mt-32'>
      <div className='flex h-180 md:w-full md:h-135 lg:rounded-2xl relative'>

        {/* Hero Image */}
        <Image 
          src="/hero.png"
          alt="Infrava Labs membantu bisnis hadir online dengan website profesional"
          width={1400}
          height={1200}
          className='w-full h-full object-cover md:object-cover md:bg-cover lg:rounded-2xl brightness-50'
        />

        {/* Overlay Warna (tetap biru, nggak ikut theme) */}
        <div className='bg-dev-blue absolute w-40 h-full md:w-90 lg:w-90 xl:w-97 opacity-60 md:rounded-tl-2xl md:rounded-bl-2xl'></div>

        {/* Container Animasi */}
        <motion.div
          className='absolute px-10 py-50 md:px-20 lg:px-10 xl:px-28 md:py-30 gap-12 md:gap-16 flex flex-col md:items-start'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          {/* Main Heading */}
          <motion.h1
            className={`font-bold text-head-3-32 md:text-[50px] md:w-150 leading-tight ${textColor}`}
            variants={item}
          >
            Take Your Business Online with Infrava Labs
          </motion.h1>

          {/* Subheading pakai H2 */}
          <motion.h2
            className={`font-bold w-70 text-body-md-16 md:text-body-md-16 md:w-65 leading-tight ${subTextColor}`}
            variants={item}
          >
            We create professional websites for your business—fast and easy.
          </motion.h2>

          {/* CTA */}
          <motion.div variants={item} className='group'>
            <Link 
              href="#contact"
              title="Contact Infrava Labs to build your website now"
              className={`h-12 w-55 md:w-55 md:h-16 justify-center rounded-2xl flex items-center gap-4 ${ctaBg}`}
            >
              <p className='text-body-xs-12 md:text-body-[13px] font-bold'>
                Build Your Website Now
              </p>
              <ArrowRightIcon width={16} height={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection

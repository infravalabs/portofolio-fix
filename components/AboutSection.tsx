"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"
import { ArrowRightIcon, BanknotesIcon, DevicePhoneMobileIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const AboutSection = () => {
  const { theme } = useTheme()

  const bottomCards = [
    {
      Icon: BanknotesIcon,
      title: "Reasonable Prices",
      desc: "We believe professional websites should be accessible to everyone. That’s why we offer competitive pricing while still delivering high-quality results."
    },
    {
      Icon: DevicePhoneMobileIcon,
      title: "Responsive Devices",
      desc: "In today’s digital world, users browse from all kinds of devices. Our responsive designs guarantee a seamless experience on desktop, tablet, and mobile."
    },
    {
      Icon: ChatBubbleLeftRightIcon,
      title: "Dedicated Support",
      desc: "Our commitment doesn’t end when your site goes live. We provide ongoing support and maintenance to keep your website up-to-date and running smoothly."
    }
  ]

  const textColorCTA = theme === "dark" ? "text-dev-black" : "text-dev-white"

  return (
    <div id='about' className='px-5 md:px-8 ipadpro:px-10 lg:px-50 mt-25 w-full scroll-mt-32'>
      

      {/* Top Section */}
      <div className='flex flex-col md:flex-row h-auto md:h-95 ipadpro:h-95 lg:h-90 gap-8 md:gap-10 ipadpro:gap-10 lg:gap-12 md:px-4'>
        
        {/* Images */}
        <div className="relative w-full md:w-90 ipadpro:w-110 lg:w-160 h-60 md:h-70 ipadpro:h-75 lg:h-85 order-1">
          <div className="absolute top-0 left-0 w-85 h-55 md:w-70 md:h-55 ipadpro:w-100 ipadpro:h-65 lg:w-120 lg:h-78">
            <Image
              src="/about.png"
              alt="Team Infrava Labs working on IT solutions and web development"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="absolute bottom-0 right-0 w-85 h-55 md:w-70 md:h-55 ipadpro:w-100 ipadpro:h-65 lg:w-120 lg:h-78">
            <Image
              src="/about.png"
              alt="Infrava Labs providing laptop and computer hardware repair service"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text */}
        <div className='w-full md:w-120 ipadpro:w-130 lg:w-152 h-auto px-2.5 order-2'>
          <div className='grid grid-cols-1 px-2.5 gap-y-8 md:gap-y-12 ipadpro:gap-y-12 lg:gap-y-18'>
            <motion.div
              className='px-2.5 py-2.5 gap-3 flex flex-col'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='text-dev-blue font-bold text-body-xxs-10 tracking-[0.2em]'>
                About Us
              </h2>
              <h3 className='text-[24px] md:text-[28px] ipadpro:text-[30px] lg:text-[38px] text-dev-black font-bold leading-tight tracking-normal'>
                Smart IT Solutions by Professional Experts
              </h3>
              <p className='text-body-sm-14 md:text-[15px] ipadpro:text-[15px] lg:text-body-sm-14 text-dev-grey font-medium text-justify'>
                At Infrava Labs, we specialize in Web Development, Digital Wedding Invitations, and Laptop & Computer Hardware Repair. Our mission is to deliver reliable digital solutions and trusted technical support.
              </p>
            </motion.div>

            <motion.div
              className='px-2.5'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/#ourteam" 
                title="Read more about Infrava Labs"
                className={`bg-dev-blue hover:bg-dev-blue-navy h-10 w-full md:w-45 md:h-11 ipadpro:w-48 ipadpro:h-11 lg:w-50 lg:h-12 justify-center ${textColorCTA} font-semibold rounded-lg flex items-center gap-3 transition ease-in-out duration-200`}
              >
                <p className='text-body-xs-12 md:text-[13px] ipadpro:text-[13px] lg:text-body-xs-12'>Continue Reading</p>
                <ArrowRightIcon width={16} height={16}/>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 ipadpro:grid-cols-2 lg:grid-cols-3 py-5 gap-4 md:gap-6 ipadpro:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.5 } }
        }}
      >
        {bottomCards.map((card, idx) => (
          <motion.div
            key={idx}
            className='flex flex-row rounded-xl gap-4 px-5 py-5 shadow-lg border-gray-300 border'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            <card.Icon width={28} height={28} className='text-dev-black shrink-0'/>
            <div className='flex flex-col gap-2'>
              <h4 className='text-body-md-16 text-dev-black font-bold'>{card.title}</h4>
              <p className='text-body-sm-14 md:text-[15px] ipadpro:text-[15px] lg:text-body-sm-14 text-dev-grey font-medium text-justify'>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AboutSection

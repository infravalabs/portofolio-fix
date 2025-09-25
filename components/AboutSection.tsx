"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { ArrowRightIcon, BanknotesIcon, DevicePhoneMobileIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const AboutSection = () => {

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

  return (
    <div id='about' className='px-5 md:px-10 lg:px-50 mt-25 w-full scroll-mt-32'>

      {/* Top Section */}
      <div className='flex flex-col md:flex-row h-auto md:h-90 gap-8 md:gap-8 lg:gap-12 md:px-5'>
        
        {/* Images */}
        <div className="relative w-full md:w-100 lg:w-160 h-60 md:h-65 lg:h-85 order-1 md:order-1">
          <div
            className="absolute top-0 left-0 w-85 h-55 md:w-65 md:h-50 lg:w-120 lg:h-78"
          >
            <Image
              src="/about.png"
              alt="About Infrava Image Left"
              width={600}
              height={800}
              className="w-full h-full"
            />
          </div>

          <div
            className="absolute bottom-0 right-0 w-85 h-55 md:w-65 md:h-50 lg:w-120 lg:h-78"
          >
            <Image
              src="/about.png"
              alt="About Infrava Image Right"
              width={600}
              height={800}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Text */}
        <div className='w-full md:w-152 h-auto px-2.5 order-2 md:order-2'>
          <div className='grid grid-cols-1 px-2.5 gap-y-8 md:gap-y-18'>
            <motion.div
              className='px-2.5 py-2.5 gap-3 flex flex-col'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className='text-dev-blue font-bold text-body-xxs-10 tracking-[0.2em]'>About Us</p>
              <h2 className='text-[24px] md:text-[30px] lg:text-[38px] text-dev-black font-bold leading-tight tracking-normal'>
                Smart IT Solutions by Professional Experts
              </h2>
              <h5 className='text-body-sm-14 text-dev-grey font-medium text-justify'>
                At InfravaLabs, we specialize in Web Development and Laptop & Computer Hardware Repair. 
                Our mission is to deliver reliable digital solutions and technical support.
              </h5>
            </motion.div>

            <motion.div
              className='px-2.5'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href={"/about"} 
                className='bg-dev-blue hover:bg-dev-blue-navy h-10 w-full md:w-50 md:h-12 justify-center text-dev-white font-semibold rounded-lg flex items-center gap-3 transition ease-in-out duration-200'
              >
                <p className='text-body-xs-12'>Continue Reading</p>
                <ArrowRightIcon width={16} height={16} fontWeight={1}/>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 py-5 gap-4 md:gap-5"
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
              <h5 className='text-body-md-16 text-dev-black font-bold'>{card.title}</h5>
              <p className='text-body-sm-14 text-dev-grey font-medium text-justify'>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>


    </div>
  )
}

export default AboutSection

"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {

  const container: Variants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.4 // muncul satu per satu tiap elemen
      } 
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } // ease custom untuk smooth
    }
  }

  return (
    <div id='home' className='lg:px-50 mt-10 md:mt-20 scroll-mt-32'>
      <div className='flex h-100 md:w-full md:h-135 bg-black lg:rounded-2xl relative'>
        <Image 
          src={"/hero.png"}
          alt='Hero Infrava'
          width={1400}
          height={1200}
          className='w-full h-auto object-cover md:object-cover md:bg-cover lg:rounded-2xl brightness-50'
        />
        <div className='bg-dev-blue absolute w-40 h-full md:w-90 lg:w-97 opacity-60 md:rounded-tl-2xl md:rounded-bl-2xl'></div>

        {/* Container Animasi */}
        <motion.div
          className='absolute px-10 py-10 md:px-20 lg:px-28 md:py-30 gap-12 md:gap-16 flex flex-col md:items-start'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={container}
        >
          <motion.h1
            className='font-bold text-head-3-32 text-dev-white md:text-[50px] md:w-150 leading-tight'
            variants={item}
          >
            Take Your Business Online with Infrava Labs
          </motion.h1>

          <motion.h5
            className='font-bold w-70 text-body-md-16 text-dev-white md:text-body-md-16 md:w-65 leading-tight'
            variants={item}
          >
            We create professional websites for your business—fast and easy.
          </motion.h5>

          <motion.div variants={item} className='group'>
            <Link href={"#contact"} className='bg-dev-white hover:bg-dev-light-grey h-12 w-55 md:w-55 md:h-16 justify-center text-dev-blue rounded-2xl flex items-center gap-4'>
              <p className='text-body-xs-12 md:text-body-[13px] font-bold'>Build Your Website Now</p>
              <ArrowRightIcon width={16} height={16} fontWeight={1}/>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection

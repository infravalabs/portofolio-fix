"use client"

import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Script from 'next/script'
import { useTheme } from "@/context/ThemeContext"
import clsx from "clsx"

const faqContent = [
  { title: "What services does InfravaLabs provide?", description: "We focus on two main areas: website development and hardware solutions. ..." },
  { title: "How much does it cost to build a website?", description: "It depends on what you need. A simple company profile starts at an affordable rate ..." },
  { title: "How long will it take to finish my website?", description: "A basic website usually takes 1–2 weeks. Larger projects with custom features ..." },
  { title: "Do you also handle domain and hosting?", description: "Yes. We’ll help you secure a domain, set up hosting, and get your website live ..." },
  { title: "What hardware services do you provide?", description: "From cleaning and performance upgrades to troubleshooting and custom PC builds ..." },
  { title: "Can I request ongoing support after the project is done?", description: "Definitely. Many clients choose our maintenance or support packages for long-term peace of mind." },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { theme } = useTheme()
  const textColor = theme === "dark" ? "text-dev-black" : "text-dev-white"

  const toggleFaq = (index: number) => setOpenIndex(openIndex === index ? null : index)

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  // FAQ JSON-LD
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqContent.map(faq => ({ "@type": "Question", name: faq.title, acceptedAnswer: { "@type": "Answer", text: faq.description } })) }

  return (
    <div id='faq' className="px-5 md:px-10 lg:px-10 xl:px-50 gap-2 mt-20 scroll-mt-32">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
        {/* LEFT: Title */}
        <motion.div className="flex flex-col px-2.5 py-2.5 md:gap-2 gap-1" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.div className="sticky top-20 lg:top-28 px-2.5 py-1 md:py-2.5 flex flex-col justify-start" variants={itemVariants}>
            <h2 className="text-dev-black text-[24px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-bold mb-2">General FAQ’s</h2>
            <p className="text-dev-grey text-body-sm-14 font-medium md:text-justify">
              We’ve gathered the most frequent questions our clients ask, from website solutions to hardware support, to give you a clearer picture of what working with InfravaLabs looks like.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT: FAQ List */}
        <motion.ul className="flex flex-col px-2.5 py-2 md:gap-3 lg:gap-4 gap-2 overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          {faqContent.map((content, index) => (
            <motion.li key={index} onClick={() => toggleFaq(index)} className={clsx(
              "rounded-lg border px-5 py-2.5 cursor-pointer group transition-colors duration-200",
              theme === "dark" ? "bg-dev-light-blue text-dev-black border-dev-light-blue hover:bg-dev-black" : "bg-dev-blue text-dev-white border-dev-blue hover:bg-dev-white"
            )} variants={itemVariants}>
              <div className="flex justify-between items-center py-5">
                <h5 className="group-hover:text-dev-blue text-body-sm-14 font-semibold">{content.title}</h5>
                {openIndex === index ? <MinusCircleIcon width={24} height={24} className="text-white group-hover:text-dev-blue" /> : <PlusCircleIcon width={24} height={24} className="text-white group-hover:text-dev-blue" />}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className={`${textColor} group-hover:text-dev-blue font-medium text-body-xs-12 pb-3`}>{content.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default Faq

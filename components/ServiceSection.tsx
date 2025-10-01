"use client"

import React from 'react'
import Script from "next/script"
import {
  GlobeAltIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,
  TagIcon,
  AdjustmentsHorizontalIcon,
  PhotoIcon,
  MapIcon,
  BoltIcon
} from "@heroicons/react/24/outline";
import Link from 'next/link';
import { useTheme } from "@/context/ThemeContext"

const ServiceSection = () => {
  const { theme } = useTheme()
  const textColorServiceCard = theme === "dark" ? "text-dev-black" : "text-dev-white"
  const textColorServiceCardWhite = theme === "dark" ? "text-dev-white" : "text-dev-black"
  const textColorTitleCard = theme === "dark" ? "text-dev-blue" : "text-dev-light-blue"
  const bgTitleCardWhite = theme === "dark" ? "bg-dev-black" : "bg-dev-white"

  return (
    <div id='services' className='px-5 md:px-10 lg:px-10 xl:px-50 mt-18 w-full scroll-mt-32'>
      <div className='flex flex-col gap-4 md:gap-8 lg:gap-5'>
        
        {/* Title */}
        <div className='flex flex-col gap-3'>
          <div className='flex px-5 md:px-12 lg:px-12 xl:px-16 py-1 justify-center items-center'>
            <h2 className='text-dev-black font-bold text-[24px] md:text-[32px] lg:text-[32px] xl:text-[42px] text-center'>
              What Can We Do for You
            </h2>
          </div>
          <div className='flex justify-center items-center px-5 md:px-12 lg:px-12 xl:px-28 py-1'>
            <p className='text-dev-grey font-medium text-body-sm-14 md:text-body-sm-15 lg:text-body-sm-15 xl:text-body-md-16 text-center'>
              Think of us as your creative partner. From concept to realization, we help you shape spaces that inspire, connect, and last. 
              With minimal design and thoughtful details, Infrava Labs is here to turn your ideas into timeless works.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-6 xl:gap-10 px-1 md:px-5 lg:px-5 xl:px-10'>

          {/* Card 1 */}
          <div className='px-2.5 py-2 flex flex-col bg-[#272C41] rounded-xl shadow-xl gap-3'>
            <div className='gap-2.5 px-2.5 py-2.5 flex flex-col'>
              <h5 className={`${textColorTitleCard} text-body-md-16 font-semibold`}>Landing Page</h5>
              <p className={`${textColorServiceCard} text-body-sm-14 font-medium`}>Company Profile, UMKM, etc.</p>
              <div className='flex flex-col gap-0.5'>
                <p className={`${textColorTitleCard} font-semibold text-body-xs-12`}>Start From</p>
                <p className={`font-bold text-[24px] ${textColorServiceCard}`}>$25
                  <span className='text-dev-grey font-bold text-body-xs-12'> /year</span>
                </p>
              </div>
            </div>
            <div className={`flex flex-col px-2.5 py-2.5 gap-2 ${textColorServiceCard}`}>
              <div className='flex gap-2.5 items-center'><GlobeAltIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>SSD Web Hosting 500Mb</p></div>
              <div className='flex gap-2.5 items-center'><BuildingOffice2Icon width={16} height={16}/><p className='text-body-xs-12 font-normal'>1 Email .com</p></div>
              <div className='flex gap-2.5 items-center'><EnvelopeIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Inquiry from Email</p></div>
              <div className='flex gap-2.5 items-center'><UserIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Link to Social Media</p></div>
              <div className='flex gap-2.5 items-center'><MagnifyingGlassCircleIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Google Indexing</p></div>
              <div className='flex gap-2.5 items-center'><TagIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Relative Page Pricing</p></div>
            </div>
            <div className='px-2.5 py-1 w-full mb-5 group'>
              <Link href={"/#contact"} className={`${bgTitleCardWhite} group-hover:bg-dev-light-grey py-1.5 rounded-lg flex justify-center items-center duration-150`}>
                <p className={`text-dev-blue text-body-xs-12 font-semibold`}>Get Started Today</p>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`px-2.5 py-2 flex flex-col ${bgTitleCardWhite} border border-gray-300 rounded-xl shadow-xl gap-3`}>
            <div className='gap-2.5 px-2.5 py-2.5 flex flex-col'>
              <h5 className={`${textColorTitleCard} text-body-md-16 font-semibold`}>Digital Wedding Invitation</h5>
              <p className={`${textColorServiceCardWhite} text-body-sm-14 font-medium`}>Exclusive & Interactive Wedding Website</p>
              <div className='flex flex-col gap-0.5'>
                <p className='text-dev-light-blue font-semibold text-body-xs-12'>Start From</p>
                <p className='font-bold text-dev-blue text-[24px]'>$20
                  <span className='text-dev-grey font-bold text-body-xs-12'> /event</span>
                </p>
              </div>
            </div>
            <div className='flex flex-col px-2.5 py-2.5 gap-2'>
              <div className='flex gap-2.5 items-center'><GlobeAltIcon width={16} height={16} className='text-dev-blue'/><p className='text-body-xs-12 text-dev-blue font-normal'>Custom Domain or Subdomain</p></div>
              <div className='flex gap-2.5 items-center'><AdjustmentsHorizontalIcon width={16} height={16} className='text-dev-blue'/><p className='text-body-xs-12 text-dev-blue font-normal'>Beautiful Theme & Design</p></div>
              <div className='flex gap-2.5 items-center'><EnvelopeIcon width={16} height={16} className='text-dev-blue'/><p className='text-body-xs-12 text-dev-blue font-normal'>RSVP Online & Guest Book</p></div>
              <div className='flex gap-2.5 items-center'><PhotoIcon width={16} height={16} className='text-dev-blue'/><p className='text-body-xs-12 text-dev-blue font-normal'>Photo & Video Gallery</p></div>
              <div className='flex gap-2.5 items-center'><MapIcon width={16} height={16} className='text-dev-blue'/><p className='text-body-xs-12 text-dev-blue font-normal'>Maps Integration & Countdown</p></div>
              <div className='flex gap-2.5 items-center'><BoltIcon width={16} height={16} className='text-dev-blue'/><p className='text-body-xs-12 text-dev-blue font-normal'>AI Wedding Agent (Interactive)</p></div>
            </div>
            <div className='px-2.5 py-1 w-full mb-5 group'>
              <Link href={"/#contact"} className='bg-dev-blue group-hover:bg-dev-blue-navy py-1.5 rounded-lg flex justify-center items-center duration-150'>
                <p className={`${textColorServiceCard} text-body-xs-12 font-semibold`}>Get Started Today</p>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className='px-2.5 py-2 flex flex-col bg-dev-blue-navy rounded-xl shadow-xl gap-3'>
            <div className='gap-2.5 px-2.5 py-2.5 flex flex-col'>
              <h5 className={`${textColorTitleCard} text-body-md-16 font-semibold`}>Custom Website Feature</h5>
              <p className={`${textColorServiceCard} text-body-sm-14 font-medium`}>Add features tailored to your needs.</p>
              <div className='flex flex-col gap-0.5'>
                <p className={`${textColorTitleCard} font-semibold text-body-xs-12`}>Start From</p>
                <p className={`font-bold text-[24px] ${textColorServiceCard}`}>$10
                  <span className='text-dev-grey font-bold text-body-xs-12'> /project</span>
                </p>
              </div>
            </div>
            <div className={`flex flex-col px-2.5 py-2.5 gap-2 h-full ${textColorServiceCard}`}>
              <div className='flex gap-2.5 items-center'><GlobeAltIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Social Media Share Buttons</p></div>
              <div className='flex gap-2.5 items-center'><BuildingOffice2Icon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Popup Modal / Announcement</p></div>
              <div className='flex gap-2.5 items-center'><EnvelopeIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Google Maps / Location Embed</p></div>
              <div className='flex gap-2.5 items-center'><UserIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Simple Contact / Feedback Form</p></div>
              <div className='flex gap-2.5 items-center'><MagnifyingGlassCircleIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Basic Image Gallery</p></div>
              <div className='flex gap-2.5 items-center'><TagIcon width={16} height={16}/><p className='text-body-xs-12 font-normal'>Custom Section (FAQ, Pricing, etc.)</p></div>
            </div>
            <div className='px-2.5 py-1 w-full mb-5 group'>
              <Link href={"/#contact"} className={`${bgTitleCardWhite} group-hover:bg-dev-light-grey py-1.5 rounded-lg flex justify-center items-center duration-150`}>
                <p className={`text-dev-blue text-body-xs-12 font-semibold`}>Get Started Today</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Structured Data */}
      <Script id="services-ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development & Digital Services",
          "provider": {
            "@type": "Organization",
            "name": "Infrava Labs",
            "url": "https://infrava.com"
          }
        })}
      </Script>
    </div>
  )
}

export default ServiceSection

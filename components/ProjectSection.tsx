"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import { EyeIcon, XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; 

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState("/mamaku.png")
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [projectOpen, setProjectOpen] = useState(true) // default terbuka
  const [hardwareOpen, setHardwareOpen] = useState(false)

  const projects = [
    { id: 1, title: "Mamaku Studio", desc: "We believe professional websites should be accessible to everyone. That’s why we offer competitive pricing while still delivering high-quality results.", img: "/mamaku.png" },
    { id: 2, title: "Infrava Website", desc: "A modern company profile website with responsive design and optimized performance.", img: "/tes.jpg" },
    { id: 3, title: "E-Commerce Demo", desc: "An e-commerce platform with cart system, checkout, and admin panel for managing products.", img: "/tes.jpg" }
  ]

  const hardwareProjects = [
    {
      id: 1,
      title: "Laptop Cleaning Service",
      desc: "A professional deep cleaning and maintenance service that includes dust removal, cooling system optimization, and overall performance check to extend the device’s lifespan.",
      img: "/mamaku.png"
    },
    {
      id: 2,
      title: "Keyboard Repair & Replacement",
      desc: "Reliable solutions for damaged or unresponsive laptop keyboards. From single key fixes to full replacements, restoring functionality and comfort.",
      img: "/keyboard.jpg"
    },
    {
      id: 3,
      title: "SSD Upgrade",
      desc: "Enhance device performance with the latest solid-state drive technology. Enjoy faster boot times, smoother multitasking, and improved system responsiveness.",
      img: "/ssd-upgrade.jpg"
    },
    {
      id: 4,
      title: "Battery Replacement",
      desc: "Restore mobility and productivity with high-quality battery replacement, ensuring longer usage hours and reliable power on the go.",
      img: "/battery.jpg"
    },
    {
      id: 5,
      title: "Screen Repair",
      desc: "Professional screen repair and replacement service. Fixing cracks, display issues, and ensuring accurate color reproduction with premium panels.",
      img: "/screen-repair.jpg"
    },
    {
      id: 6,
      title: "GPU Thermal Service",
      desc: "Specialized GPU thermal maintenance that prevents overheating, improves stability, and extends the overall lifespan of your graphics card.",
      img: "/gpu-service.jpg"
    }
  ];



  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div id='projects' className='md:px-50 mt-10 md:mt-20 scroll-mt-20 flex flex-col gap-5 md:gap-5'>

      {/* Header clickable untuk toggle */}
      <div
        onClick={() => setProjectOpen(!projectOpen)}
        className="flex items-center gap-2 cursor-pointer select-none px-5 mb2"
      >
        <ChevronRightIcon
          width={24}
          height={24}
          className={`text-dev-black transition-transform duration-300 ${projectOpen ? "rotate-90" : ""}`}
        />
        <h2 className='text-[24px] md:text-[38px] text-dev-black font-bold leading-tight tracking-normal'>
          Web Development
        </h2>
      </div>
      {/* Grid kiri-kanan ikut hilang/muncul */}
      <AnimatePresence>
        {projectOpen && (
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 md:gap-15'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* LEFT SIDE */}
            <motion.div
              className='flex flex-col gap-3 px-5 py-10'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.p
                className='text-dev-blue font-bold text-body-xxs-10 tracking-[0.2em]'
                variants={itemVariants}
              >
                Our Beloved Project
              </motion.p>

              <motion.div
                className='flex flex-col py-2.5 h-90 overflow-y-auto pr-2 gap-2'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    onClick={() => setActiveProject(project.img)}
                    className={`flex py-2 gap-2.5 px-2 cursor-pointer transition-all duration-300 
                      ${activeProject === project.img 
                        ? "bg-dev-blue-navy text-white" 
                        : "bg-dev-light-grey hover:bg-dev-blue-navy hover:text-white group"
                      }`}
                    variants={itemVariants}
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={600}
                      height={400}
                      className='w-40 h-32'
                    />
                    <div className='flex flex-col gap-3'>
                      <h5 className='text-body-lg-20 md:text-[24px] font-bold'>{project.title}</h5>
                      <p className='text-body-xs-12 font-medium text-justify'>
                        {project.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Mac + Preview */}
            <div className="relative flex justify-center items-center">
              <Image
                src={"/mac.png"}
                alt="Macbook"
                width={600}
                height={600}
                className="w-full h-full"
              />

              <div className="absolute top-[19.8%] left-[12%] w-[76%] h-[48%] clip-trapezoid overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -50, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={activeProject}
                      alt="Active Project"
                      fill
                      className="object-cover"
                    />

                    <div
                      onClick={() => setIsPreviewOpen(true)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
                    >
                      <EyeIcon className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Preview */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] md:w-[70%] h-[70%] bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={activeProject}
                alt="Preview Project"
                fill
                className="object-contain bg-black"
              />
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-full"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Header clickable untuk toggle */}
      <div
        onClick={() => setHardwareOpen(!hardwareOpen)}
        className="flex items-center gap-2 cursor-pointer select-none px-5 mb2"
      >
        <ChevronRightIcon
          width={24}
          height={24}
          className={`text-dev-black transition-transform duration-300 ${hardwareOpen ? "rotate-90" : ""}`}
        />
        <h2 className='text-[24px] md:text-[38px] text-dev-black font-bold leading-tight tracking-normal'>
          Hardware 
        </h2>
      </div>
      <AnimatePresence initial={false}>
        {hardwareOpen && (
          <motion.div
            key="hardware-grid"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start px-5 py-5'>
              {hardwareProjects.map((hardware, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-64 perspective cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* FRONT */}
                  <div className="absolute w-full h-full backface-hidden border border-gray-300 shadow-xl flex flex-col items-start justify-center">
                    <Image 
                      src={hardware.img} 
                      alt="Hardware repair" 
                      width={300} 
                      height={200} 
                      className="object-cover w-full h-47" 
                    />
                    <div className='px-5 py-5'>
                      <h5 className=" text-lg font-semibold text-dev-black">{hardware.title}</h5>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute w-full h-full backface-hidden border border-gray-300 shadow-xl bg-gray-200 flex flex-col items-start px-5 py-5 rotate-y-180 overflow-y-auto">
                    <h5 className="text-lg font-semibold mb-2 text-dev-black">{hardware.title}</h5>
                    <p className="text-sm text-justify text-gray-700 mb-3">{hardware.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectSection

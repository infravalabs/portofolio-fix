"use client"

import React from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import Script from "next/script"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
};

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (result.success) {
        toast.success("✅ Email sent successfully!")
        reset()
      } else {
        toast.error("❌ Failed to send email")
      }
    } catch (error) {
      console.error(error)
      toast.error("⚠️ Something went wrong")
    }
  }

  // JSON-LD schema untuk ContactPage
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "InfravaLabs",
      "url": "https://www.infravalabs.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+62-361-123456",
          "contactType": "customer service",
          "areaServed": "ID",
          "availableLanguage": ["English", "Indonesian"],
          "email": "infravalbas@gmail.com"
        }
      ]
    }
  }

  return (
    <section id="contact" className="px-5 md:px-50 mt-20 md:mt-25 w-full scroll-mt-32">
      {/* Inject JSON-LD Schema.org */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Toaster position="top-right" reverseOrder={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2">


        {/* Text / Contact Info */}
        <div className="w-full md:w-152 h-auto px-2.5 order-2 md:order-2">
          <div className="grid grid-cols-1 px-2.5 gap-y-4 md:gap-y-10 order-1 md:order-2">
            <motion.div
              className="px-2.5 py-2.5 gap-3 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-dev-blue font-bold text-body-xxs-10 tracking-[0.2em]">We’re here to help you.</p>
              <h2 className="text-[24px] md:text-[48px] text-dev-black font-medium leading-tight tracking-normal">
                <span className="font-bold">Start</span> your project with InfravaLabs <span className="font-bold">today</span>.
              </h2>
              <h5 className="text-body-sm-14 text-dev-grey font-medium text-justify">
                You can reach us anytime through email, WhatsApp, or our website’s contact form. We’ll get back to you as soon as possible.
              </h5>
            </motion.div>

            <motion.div
              className="px-2.5 flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex gap-5 items-center">
                <EnvelopeIcon width={50} height={50} className="text-dev-blue"/>
                <div className="flex flex-col py-2.5">
                  <h5 className="text-dev-grey text-body-sm-14 font-bold">Email</h5>
                  <p className="text-dev-grey text-body-md-16 font-medium">infravalabs@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <PhoneIcon width={50} height={50} className="text-dev-blue"/>
                <div className="flex flex-col py-2.5">
                  <h5 className="text-dev-grey text-body-sm-14 font-bold">Phone Number</h5>
                  <p className="text-dev-grey text-body-md-16 font-medium">(+62) 89605699929</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* FORM SIDE */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-2.5 md:px-12 py-2.5 order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col py-7 gap-10 border border-gray-300 shadow-2xl rounded-2xl">
            {["name", "email", "subject", "message"].map((field) => (
              <div className="flex flex-col px-7 gap-1" key={field}>
                <label htmlFor={field} className="text-dev-black font-bold text-body-sm-14">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    className="px-2.5 py-2.5 text-dev-grey w-full rounded-lg bg-dev-contact-grey text-body-xs-12"
                    {...register(field as keyof FormData, { required: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` })}
                  />
                ) : (
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    className="px-2.5 py-2.5 text-dev-grey w-full rounded-lg bg-dev-contact-grey text-body-xs-12"
                    {...register("message", { required: "Message is required" })}
                  />
                )}
                {errors[field as keyof FormData] && (
                  <p className="text-red-500 text-xs">{errors[field as keyof FormData]?.message}</p>
                )}
              </div>
            ))}

            <div className="flex justify-end px-7">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-dev-blue text-white px-7 py-2 rounded-lg hover:bg-dev-blue-dark flex gap-4 items-center justify-center"
              >
                <p className="text-body-sm-14">{isSubmitting ? "Sending..." : "Get a solution"}</p>
                <ArrowRightIcon width={12} height={12} className="text-white" />
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection

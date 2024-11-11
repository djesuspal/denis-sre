'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="min-h-[70vh] px-4 py-8 sm:py-12">
      <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="mb-2 sm:mb-3 text-2xl sm:text-3xl font-bold text-[#E2FF3F]">CONTACT &#123;</h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-400">
            Have any interesting investment opportunities? My inbox is always open!
          </p>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#E2FF3F]" />
              <a href="mailto:me@denis.pe" className="text-sm sm:text-base hover:text-[#E2FF3F]">
                me@denis.pe
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Github className="h-5 w-5 sm:h-6 sm:w-6 text-[#E2FF3F]" />
              <a href="https://github.com/djesuspal" className="text-sm sm:text-base hover:text-[#E2FF3F]" target="_blank" rel="noopener noreferrer">
                Denis
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-[#E2FF3F]" />
              <a
                href="https://www.linkedin.com/in/denis-jesus-palma-abanto-512417336/"
                className="text-sm sm:text-base hover:text-[#E2FF3F]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Denis Palma Abanto
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Input className="border-[#E2FF3F] bg-transparent font-mono h-9 sm:h-10 text-sm" placeholder="Email" />
          <Input className="border-[#E2FF3F] bg-transparent font-mono h-9 sm:h-10 text-sm" placeholder="Subject" />
          <Textarea className="min-h-[100px] sm:min-h-[120px] border-[#E2FF3F] bg-transparent font-mono text-sm" placeholder="Message" />
          <Button
            className="w-full bg-[#E2FF3F] text-black hover:bg-[#E2FF3F]/90 font-mono h-9 sm:h-10 text-sm"
            onClick={() => setSubmitted(true)}
          >
            Submit
          </Button>
          {submitted && (
            <p className="text-center text-[#E2FF3F] text-sm">Thanks for your message! I'll get back to you soon.</p>
          )}
        </div>
      </div>
    </section>
  )
}

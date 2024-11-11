'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export function Hero({ scrollToSection }: HeroProps) {
  const [heroTextIndex, setHeroTextIndex] = useState(0)
  const [showRetired, setShowRetired] = useState(false)
  const [nameCharIndex, setNameCharIndex] = useState(0)

  const heroTexts = [
    "Self-taught programmer motivated by passion and personal projects.",
    "Expert at searching bugs on Google and quickly scanning the best StackOverflow answers."
  ]

  const fullName = "Denis Jesus Palma Abanto"

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRetired((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (nameCharIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setNameCharIndex(nameCharIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [nameCharIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroTexts.length]);

  return (
    <section id="about" className="flex min-h-[90vh] flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="grid max-w-6xl gap-8 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#E2FF3F] inline-block">
              {fullName.slice(0, nameCharIndex)}
              <span className="animate-blink">|</span>
              {fullName.slice(nameCharIndex)}
            </span>
          </h1>
          <p className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold flex flex-wrap items-center">
            SOFTWARE ENGINEER
            <span className={`ml-2 text-red-500 transition-opacity duration-300 ${showRetired ? 'opacity-100' : 'opacity-0'}`}>
              (Retired)
            </span>
          </p>
          <p className="mb-6 text-sm sm:text-base md:text-lg text-gray-400 h-16 transition-opacity duration-500 ease-in-out">
            {heroTexts[heroTextIndex]}
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#E2FF3F] text-black hover:bg-[#E2FF3F]/90 font-mono text-sm sm:text-base"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-full border-2 border-[#E2FF3F] max-w-[250px] sm:max-w-[300px] mx-auto md:max-w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/denis-jesus-palma-abanto-1-5bmh7aeCNyVEh6ygtfxRoX8ziCGmdO.png"
            alt="Denis Jesus Palma Abanto - Software Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

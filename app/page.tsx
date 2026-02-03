'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/sections/hero'
import AboutSection from '@/components/sections/about'
import SkillsSection from '@/components/sections/skills'
import CaseStudiesSection from '@/components/sections/case-studies'
import ProcessSection from '@/components/sections/process'
import TestimonialsSection from '@/components/sections/testimonials'
import ContactSection from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F1419]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <div id="work">
          <CaseStudiesSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <ContactSection />
      </main>
    </>
  )
}

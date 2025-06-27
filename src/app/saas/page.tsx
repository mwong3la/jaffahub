import ContactSection from '@/components/ContactSection'
import { CTASection } from '@/components/CTASection'
import FeaturesSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection/>
      <ContactSection />
      <ProcessSection />
      <CTASection />
    </div>
  )
}

export default page
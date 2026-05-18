'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Loader } from '@/components/Loader'
import { PageTransition } from '@/components/providers/PageTransition'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { DashboardSection } from '@/components/sections/DashboardSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { WhyChooseSection } from '@/components/sections/WhyChooseSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import { IntegrationsSection } from '@/components/sections/IntegrationsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)

  return (
    <PageTransition>
      <ScrollProgressBar />
      <main className="w-full overflow-x-hidden pt-20 transition-colors duration-300 bg-transparent text-foreground">
        {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <PricingSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <UseCasesSection />
        <IntegrationsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </PageTransition>
  )
}

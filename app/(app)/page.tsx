import CTASection from '@/components/custom/CTAsection'
import Features from '@/components/custom/Features'
import Hero from '@/components/custom/Hero'
import HowItWorks from '@/components/custom/HowItWorks'
import Testimonials from '@/components/custom/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  )
}

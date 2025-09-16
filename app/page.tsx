import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { LoadingScreen } from "@/components/loading-screen"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section with full viewport height */}
        <HeroSection />

        {/* Main Content Wrapper */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

          {/* Content Sections */}
          <div className="relative z-10">
            <StatsSection />

            {/* About & Skills Combined Section */}
            <section className="py-20 lg:py-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                  <div>
                    <AboutSection />
                  </div>
                  <div>
                    <SkillsSection />
                  </div>
                </div>
              </div>
            </section>

            <ExperienceSection />
            <TestimonialsSection />

            {/* Contact Section with enhanced styling */}
            <div className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
              <ContactSection />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

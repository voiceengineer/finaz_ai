import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeatureGrid />

      <section id="lending" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-accent" />
                <p className="text-xs uppercase tracking-wider text-accent font-medium">Lending Intelligence</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[0.90]">
                Capital
                <br />
                <span className="text-accent">Acceleration</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform debt markets with AI-driven risk assessment, automated document verification, and intelligent
                decisioning protocols.
              </p>
              <div className="pt-4">
                <Button>
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="aspect-[4/3] bg-secondary border-2 border-border relative overflow-hidden">
              <img
                src="/loan-origination-dashboard-screenshot.jpg"
                alt="Loan Origination Platform"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="real-estate" className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-background border-2 border-border relative overflow-hidden order-2 lg:order-1">
              <img
                src="/luxury-modern-architecture-glass-skyscraper-with-d.jpg"
                alt="Premium Real Estate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-accent" />
                <p className="text-xs uppercase tracking-wider text-accent font-medium">PropTech Innovation</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[0.90]">
                Premium
                <br />
                <span className="text-accent">Listings</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Multi-channel distribution, virtual tour integration, and developer-focused project tracking for
                high-end real estate markets.
              </p>
              <div className="pt-4">
                <Button>
                  View Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="crm" className="py-24 px-6 border-t border-border">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-accent" />
              <p className="text-xs uppercase tracking-wider text-accent font-medium">CRM Intelligence</p>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.90]">
              Enterprise CRM
              <br />
              <span className="text-accent">Intelligence</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Unify every lead, loan, and listing. One platform. One truth. Infinite possibilities.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Request Demo</Button>
              <Button size="lg" variant="outline">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-24 px-6 border-t border-border text-center">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            Ready to Transform
            <br />
            <span className="text-accent">Your Operations?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join elite financial institutions powering their growth with Finaz.ai's intelligent platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg">Get Started Now</Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

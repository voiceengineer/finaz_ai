import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Zap, Globe, Users, Lightbulb, TrendingUp, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering AI-driven solutions that transform traditional finance into intelligent systems.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade encryption and compliance built into every layer of our platform.",
    },
    {
      icon: Zap,
      title: "Velocity",
      description: "High-throughput infrastructure designed for the speed of modern capital markets.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building partnerships with institutions to solve the most complex financial challenges.",
    },
  ]

  const achievements = [
    {
      stat: "2022",
      label: "Founded in NYC",
      description: "With a clear vision to revolutionize financial infrastructure",
    },
    {
      stat: "$5B+",
      label: "Annual Volume",
      description: "Processed through our intelligent platform annually",
    },
    {
      stat: "500+",
      label: "Global Partners",
      description: "Financial institutions trusting our proprietary technology",
    },
    {
      stat: "150+",
      label: "Team Members",
      description: "World-class engineers and financial experts",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-xs uppercase tracking-widest font-semibold text-accent">About Finaz.ai</p>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
                  Building the
                  <br />
                  <span className="text-accent">Infrastructure</span>
                  <br />
                  of Modern Finance
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We design and deploy intelligent financial systems that power the world's most sophisticated
                institutions. Our mission is to make complex markets transparent, accessible, and profitable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="cursor-pointer">
                  Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="cursor-pointer bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] bg-muted border border-border overflow-hidden group">
              <img
                src="/modern-financial-team-collaborating.jpg"
                alt="Finaz.ai Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-secondary/30 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent">Our Core Values</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What Drives Our Innovation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={i}
                  className="bg-background border border-border p-8 space-y-6 group hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-16">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent">Our Mission</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              We don't just process data.
              <br />
              <span className="text-accent">We engineer clarity</span> for the world's most complex markets.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mx-auto max-w-2xl">
              In a world where capital moves at the speed of light and complexity increases daily, institutions need
              more than tools—they need intelligent partners. We provide the foundational infrastructure that transforms
              uncertainty into insight and opportunity.
            </p>
          </div>

          <div className="h-px w-24 bg-accent mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="space-y-2">
                  <p className="text-5xl md:text-4xl font-bold text-accent">{item.stat}</p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-foreground">{item.label}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-secondary/30 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] bg-muted border border-border overflow-hidden group">
              <img
                src="/fintech-team-working-office.jpg"
                alt="Finaz.ai Team Working"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest font-semibold text-accent">Our Team</p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                  World-Class Talent,
                  <br />
                  <span className="text-accent">United by Purpose</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines deep expertise in financial services, machine learning, and systems architecture.
                We've built products at leading fintechs, worked with Fortune 500 enterprises, and contributed to the
                open-source community.
              </p>

              <div className="space-y-4">
                {[
                  "Expert engineers from leading fintech & tech companies",
                  "Advanced degrees in Computer Science, Finance & Mathematics",
                  "Combined 200+ years of industry experience",
                  "Committed to continuous learning and innovation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="outline" className="cursor-pointer bg-transparent">
                  View Careers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-b border-border">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-widest font-semibold text-accent">Technology</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Built for Enterprise Scale</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Enterprise Security",
                items: ["End-to-end encryption", "ISO 27001 Certified", "SOC 2 Type II Compliant"],
              },
              {
                icon: TrendingUp,
                title: "Performance",
                items: ["99.99% Uptime SLA", "Sub-millisecond Latency", "Global CDN Distribution"],
              },
              {
                icon: Globe,
                title: "Global Compliance",
                items: ["GDPR Compliant", "Multi-jurisdictional Support", "Regulatory Audit Ready"],
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-background border border-border p-8 space-y-6 cursor-default">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.items.map((subitem, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Ready to Transform
            <br />
            <span className="text-accent">Your Operations?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join elite financial institutions powering their growth with Finaz.ai's intelligent platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="cursor-pointer">
              Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  LayoutDashboard,
  Target,
  Globe,
  Camera,
  MessageSquare,
  BarChart3,
  Users,
  Calendar,
} from "lucide-react"

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                Property Marketing Solutions
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                Elevate Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Real Estate Marketing
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Comprehensive property marketing tools for developers, agents, and property managers. Multi-channel
                listings, virtual tours, and intelligent lead management all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 bg-transparent">
                  Watch Demo
                </Button>
              </div>
            </div>
            <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
              <img
                src="/real-estate-property-listing-dashboard-interface.jpg"
                alt="Property Marketing Dashboard"
                className="w-full h-auto"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            centered
            badge="Marketing Tools"
            title="Everything you need to market properties effectively"
            description="From listing creation to lead conversion, manage your entire property marketing workflow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: LayoutDashboard,
                title: "Multi-Channel Listings",
                description:
                  "Publish to MLS, property portals, and social media from a single dashboard. Sync listings automatically.",
                color: "text-blue-500",
                bgColor: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: Camera,
                title: "Virtual Tours & Media",
                description:
                  "Create immersive 3D tours, photo galleries, and video walkthroughs. Showcase properties beautifully.",
                color: "text-emerald-500",
                bgColor: "from-emerald-500/10 to-teal-500/10",
              },
              {
                icon: Target,
                title: "Developer Project Marketing",
                description:
                  "Dedicated modules for off-plan sales, unit availability tracking, and project milestone marketing.",
                color: "text-orange-500",
                bgColor: "from-orange-500/10 to-red-500/10",
              },
              {
                icon: Globe,
                title: "Custom Property Websites",
                description:
                  "Generate SEO-optimized property microsites automatically. No coding required for stunning websites.",
                color: "text-violet-500",
                bgColor: "from-violet-500/10 to-purple-500/10",
              },
              {
                icon: MessageSquare,
                title: "Lead Capture & Nurture",
                description:
                  "Integrated forms, chatbots, and automated follow-ups. Convert inquiries into appointments faster.",
                color: "text-indigo-500",
                bgColor: "from-indigo-500/10 to-blue-500/10",
              },
              {
                icon: BarChart3,
                title: "Marketing Analytics",
                description:
                  "Track listing performance, lead sources, and conversion rates. Optimize your marketing spend with data.",
                color: "text-cyan-500",
                bgColor: "from-cyan-500/10 to-blue-500/10",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 bg-card hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.bgColor} border border-primary/20 flex items-center justify-center mb-5`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            centered
            badge="Perfect For"
            title="Built for every type of real estate professional"
            description="Whether you're a solo agent or a large development firm, we have the tools you need."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Users,
                title: "Real Estate Agents",
                points: [
                  "Personal branding tools",
                  "Lead management CRM",
                  "Automated follow-ups",
                  "Mobile-friendly listings",
                ],
              },
              {
                icon: LayoutDashboard,
                title: "Property Developers",
                points: [
                  "Project marketing suites",
                  "Unit availability matrix",
                  "Investor portals",
                  "Sales velocity tracking",
                ],
              },
              {
                icon: Calendar,
                title: "Property Managers",
                points: ["Vacancy marketing", "Tenant screening", "Maintenance coordination", "Portfolio reporting"],
              },
            ].map((useCase, index) => (
              <Card key={index} className="p-8 border-border/50 bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center mb-6">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Card className="overflow-hidden border-2 border-border/50 shadow-2xl order-2 lg:order-1">
              <img src="/property-virtual-tour-360-interface.jpg" alt="Virtual Tours" className="w-full h-auto" />
            </Card>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Immersive experiences that{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  convert leads
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Create stunning virtual tours and interactive floor plans that let buyers explore properties from
                anywhere. Our platform supports 3D walkthroughs, drone footage integration, and AR visualization.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "360° virtual tours with custom hotspots",
                  "Interactive floor plans with measurements",
                  "Video integration and live streaming",
                  "Mobile-optimized viewing experience",
                ].map((item, i) => (
                  <li key={i} className="text-sm font-medium flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to market properties{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              like never before?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of real estate professionals who trust Finaz.ai for their property marketing needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

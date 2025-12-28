import Link from "next/link"
import { ArrowRight, Zap, Building2, Users, Shield, Workflow, TrendingUp } from "lucide-react"

const features = [
  {
    number: "01",
    icon: Zap,
    title: "INTELLIGENT LENDING",
    description:
      "AI-powered document processing, automated verification, and ML-driven risk assessment for instant decisions.",
    href: "/solutions/lending",
  },
  {
    number: "02",
    icon: Users,
    title: "UNIFIED CRM",
    description:
      "Centralized lead management with intelligent routing, automated follow-ups, and predictive analytics.",
    href: "/solutions/crm",
  },
  {
    number: "03",
    icon: Building2,
    title: "PROPTECH SUITE",
    description:
      "Multi-channel listing distribution, virtual tours, and developer-focused project marketing automation.",
    href: "/solutions/real-estate",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "DYNAMIC CREDIT SCORING",
    description: "Advanced AI models leveraging alternative data sources and real-time behavioral signals.",
    href: "#",
  },
  {
    number: "05",
    icon: Workflow,
    title: "WORKFLOW AUTOMATION",
    description: "No-code workflow builder with intelligent task assignment, approval chains, and SLA monitoring.",
    href: "#",
  },
  {
    number: "06",
    icon: Shield,
    title: "COMPLIANCE & SECURITY",
    description: "Enterprise-grade KYC/AML, audit trails, data encryption, and global regulatory compliance.",
    href: "#",
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <p className="text-xs uppercase tracking-wider text-accent font-medium">Platform Capabilities</p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.90] mb-8">
            Engineered for
            <br />
            <span className="text-accent">Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise-grade infrastructure powering the next generation of financial innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border animate-fade-in">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link
                key={feature.number}
                href={feature.href}
                className="bg-background p-10 hover:bg-accent/5 border-accent-hover group transition-colors relative"
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-accent" />
                      <div className="text-xs font-semibold tracking-wider text-accent">{feature.number}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

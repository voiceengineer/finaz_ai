import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  FileCheck,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  Lock,
  CheckCircle,
  TrendingUp,
} from "lucide-react"

export default function LendingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              Loan Origination Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Lending Operations
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Streamline loan origination with AI-powered document processing, automated verification, and intelligent
              risk assessment. Process loans 10x faster while maintaining compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 bg-transparent">
                View Pricing
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
            <img
              src="/loan-origination-dashboard-screenshot.jpg"
              alt="Loan Origination Dashboard"
              className="w-full h-auto"
            />
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            centered
            badge="Core Capabilities"
            title="Everything you need to originate loans faster"
            description="From application to approval, manage the entire lending lifecycle with intelligent automation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Zap,
                title: "Instant Application Processing",
                description:
                  "Digital applications with smart field validation and real-time data verification. Reduce manual entry by 90%.",
                color: "text-blue-500",
                bgColor: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: FileCheck,
                title: "Document Intelligence",
                description:
                  "AI-powered document extraction and classification. Automatically verify income statements, tax returns, and credit reports.",
                color: "text-emerald-500",
                bgColor: "from-emerald-500/10 to-teal-500/10",
              },
              {
                icon: Shield,
                title: "Risk Assessment Engine",
                description:
                  "Advanced credit scoring models with alternative data sources. Make faster, more accurate lending decisions.",
                color: "text-orange-500",
                bgColor: "from-orange-500/10 to-red-500/10",
              },
              {
                icon: Users,
                title: "Borrower Portals",
                description:
                  "White-label portals for borrowers to track application status, upload documents, and communicate with loan officers.",
                color: "text-violet-500",
                bgColor: "from-violet-500/10 to-purple-500/10",
              },
              {
                icon: Lock,
                title: "Compliance Automation",
                description:
                  "Built-in KYC/AML checks, audit trails, and regulatory reporting. Stay compliant with automatic updates.",
                color: "text-indigo-500",
                bgColor: "from-indigo-500/10 to-blue-500/10",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description:
                  "Real-time insights into pipeline health, conversion rates, and loan officer productivity. Data-driven decisions.",
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

      {/* Workflow Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            centered
            badge="Streamlined Workflow"
            title="From application to funding in days, not weeks"
            description="Intelligent automation at every step of the lending process."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { step: "01", title: "Application", desc: "Digital intake with smart validation", icon: FileCheck },
              { step: "02", title: "Verification", desc: "Automated document processing", icon: CheckCircle },
              { step: "03", title: "Assessment", desc: "AI-powered risk scoring", icon: Shield },
              { step: "04", title: "Approval", desc: "Instant decision and funding", icon: TrendingUp },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-sm font-bold text-primary mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "10x", label: "Faster Processing", icon: Clock },
              { value: "98%", label: "Accuracy Rate", icon: CheckCircle },
              { value: "$2.5B+", label: "Loans Originated", icon: TrendingUp },
            ].map((stat, index) => (
              <Card key={index} className="p-8 text-center border-border/50 bg-card">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-base font-medium text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to modernize your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              lending operations?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join leading financial institutions using Finaz.ai to transform their loan origination process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Workflow,
  MessageSquare,
  Bell,
  TrendingUp,
  Zap,
  Calendar,
  Mail,
  FileText,
} from "lucide-react"

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              Intelligent CRM Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              One CRM for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Every Relationship
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Manage borrowers, lenders, agents, and developers in a unified platform. Intelligent lead routing,
              automated workflows, and real-time collaboration for modern financial services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Try For Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 bg-transparent">
                View Demo
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
            <img
              src="/crm-dashboard-with-contact-management-pipeline.jpg"
              alt="CRM Dashboard"
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
            badge="Unified Platform"
            title="All your relationships in one place"
            description="From first contact to closed deal, manage every interaction with intelligent automation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Users,
                title: "360° Contact Management",
                description:
                  "Complete profiles for borrowers, agents, lenders, and developers. Track every interaction and document.",
                color: "text-blue-500",
                bgColor: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: Workflow,
                title: "Intelligent Lead Routing",
                description:
                  "AI-powered lead assignment based on expertise, availability, and performance. Maximize conversion rates.",
                color: "text-emerald-500",
                bgColor: "from-emerald-500/10 to-teal-500/10",
              },
              {
                icon: MessageSquare,
                title: "Unified Communications",
                description:
                  "Email, SMS, and call tracking in one place. Never miss a conversation with automatic logging.",
                color: "text-orange-500",
                bgColor: "from-orange-500/10 to-red-500/10",
              },
              {
                icon: Bell,
                title: "Smart Notifications",
                description:
                  "Context-aware alerts for follow-ups, milestones, and opportunities. Stay on top of every deal.",
                color: "text-violet-500",
                bgColor: "from-violet-500/10 to-purple-500/10",
              },
              {
                icon: Calendar,
                title: "Pipeline Management",
                description:
                  "Visual deal stages, forecasting, and pipeline analytics. Know exactly where every opportunity stands.",
                color: "text-indigo-500",
                bgColor: "from-indigo-500/10 to-blue-500/10",
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description:
                  "Track team productivity, conversion rates, and revenue. Data-driven insights for better decisions.",
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

      {/* Automation Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Workflow Automation"
                title="Automate the busywork, focus on relationships"
                description="Build custom workflows that trigger actions based on contact behavior, deal stages, and time-based rules."
              />

              <div className="grid grid-cols-1 gap-4 mt-8">
                {[
                  { icon: Mail, title: "Email Sequences", desc: "Automated drip campaigns based on lead behavior" },
                  { icon: Bell, title: "Smart Reminders", desc: "Never miss a follow-up with intelligent alerts" },
                  { icon: FileText, title: "Document Generation", desc: "Auto-create contracts and proposals" },
                  { icon: Zap, title: "Task Automation", desc: "Assign tasks automatically based on triggers" },
                ].map((item, i) => (
                  <Card key={i} className="p-5 border-border/50 bg-card flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
              <img
                src="/workflow-automation-builder-interface.jpg"
                alt="Workflow Automation"
                className="w-full h-auto"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            centered
            badge="Integrations"
            title="Connect with the tools you already use"
            description="Seamlessly integrate with your existing tech stack for a unified workflow."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
            {[
              "Gmail",
              "Outlook",
              "Slack",
              "Zoom",
              "DocuSign",
              "Stripe",
              "QuickBooks",
              "Salesforce",
              "HubSpot",
              "Zapier",
              "Twilio",
              "Calendly",
            ].map((tool, i) => (
              <Card
                key={i}
                className="p-6 border-border/50 bg-card hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                <span className="text-sm font-semibold text-center">{tool}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transform your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              customer relationships
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of teams using Finaz.ai CRM to close more deals and build lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-2 bg-transparent">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Eye, Lock, FileText } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Finaz.ai",
  description: "Privacy policy and data protection information for Finaz.ai",
}

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information Collection",
      content: "We collect information you provide directly and usage data to improve our services.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      content: "Your data is encrypted and protected using industry-standard security measures.",
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: "You can access, modify, or delete your data anytime from your account settings.",
    },
    {
      icon: FileText,
      title: "Contact",
      content: "Questions? Email us at privacy@finaz.ai for any concerns.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-16 space-y-3">
            <h1 className="text-5xl font-black text-foreground">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <div
                  key={section.title}
                  className="p-6 border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <IconComponent className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <h2 className="font-semibold text-foreground text-sm">{section.title}</h2>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-6 pb-20">
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">Cookies</h2>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your experience. Manage your preferences in browser settings.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">Data Retention</h2>
              <p className="text-sm text-muted-foreground">
                We keep your data only as long as needed. Request deletion anytime from your account.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

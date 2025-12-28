"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-24 pb-16 px-6 min-h-[90vh] flex items-center relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-accent" />
              <p className="text-xs uppercase tracking-wider text-accent font-medium">Enterprise Platform</p>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.90]">
              Financial
              <br />
              Intelligence
              <br />
              <span className="text-accent">Reimagined</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Transform loan origination, property marketing, and CRM operations with AI-powered precision and
            enterprise-grade reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Request Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold tracking-tight">$2.5B+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Loans Processed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold tracking-tight">50K+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold tracking-tight">98%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="aspect-[3/4] bg-secondary relative overflow-hidden border-2 border-border">
            <img
              src="/futuristic-financial-technology-dashboard-with-hol.jpg"
              alt="Finaz.ai Platform Interface"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent p-6 border-2 border-accent">
            <div className="text-5xl font-bold tracking-tight text-accent-foreground">10x</div>
            <div className="text-xs uppercase tracking-wider text-accent-foreground/90 mt-2 font-medium">
              Faster Processing
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

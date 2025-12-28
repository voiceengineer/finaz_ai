"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Users, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react"

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    companySize: "",
    interests: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Demo request submitted:", formData)
  }

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-accent" />
                  <p className="text-xs uppercase tracking-wider text-accent font-medium">Request Demo</p>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[0.90] mb-5">
                  See Finaz.ai
                  <br />
                  in <span className="text-accent">Action</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schedule a personalized demo with our team. We'll show you how to transform your financial operations.
                </p>
              </div>

              <div className="p-10 bg-secondary/50 border-2 border-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs uppercase tracking-wider font-semibold">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs uppercase tracking-wider font-semibold">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs uppercase tracking-wider font-semibold">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        placeholder="Acme Financial"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle" className="text-xs uppercase tracking-wider font-semibold">
                        Job Title *
                      </Label>
                      <Input
                        id="jobTitle"
                        placeholder="VP of Operations"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-xs uppercase tracking-wider font-semibold">
                        Company Size *
                      </Label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                      >
                        <SelectTrigger id="companySize">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-wider font-semibold">Interests *</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        { id: "lending", label: "Loan Origination", icon: Zap },
                        { id: "real-estate", label: "Property Marketing", icon: TrendingUp },
                        { id: "crm", label: "CRM Solutions", icon: Users },
                        { id: "analytics", label: "Analytics & Reporting", icon: Shield },
                      ].map((interest) => {
                        const Icon = interest.icon
                        return (
                          <div
                            key={interest.id}
                            className="flex items-center space-x-3 p-3 border-2 border-border hover:border-accent transition-colors"
                          >
                            <Checkbox
                              id={interest.id}
                              checked={formData.interests.includes(interest.id)}
                              onCheckedChange={() => toggleInterest(interest.id)}
                            />
                            <Icon className="h-4 w-4 text-accent" />
                            <label
                              htmlFor={interest.id}
                              className="text-sm font-medium cursor-pointer flex-1 uppercase tracking-wider"
                            >
                              {interest.label}
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-px bg-border">
              <div className="p-10 bg-background">
                <h3 className="text-2xl font-bold tracking-tight mb-6">What to Expect</h3>
                <ul className="space-y-5">
                  {[
                    {
                      icon: Calendar,
                      title: "30-Minute Session",
                      desc: "Personalized walkthrough tailored to your specific needs",
                    },
                    {
                      icon: Users,
                      title: "Expert Guidance",
                      desc: "Meet with a solution specialist who knows your industry",
                    },
                    {
                      icon: Zap,
                      title: "Live Platform Demo",
                      desc: "See real workflows and how Finaz.ai solves your challenges",
                    },
                    {
                      icon: Clock,
                      title: "Q&A Time",
                      desc: "Get all your questions answered in real-time",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-background border-t-2 border-accent">
                <h3 className="text-2xl font-bold tracking-tight mb-6">Why Choose Finaz.ai</h3>
                <div className="space-y-3">
                  {[
                    { icon: TrendingUp, text: "10x faster loan processing" },
                    { icon: Shield, text: "Enterprise-grade security" },
                    { icon: Zap, text: "98% satisfaction rate" },
                    { icon: Users, text: "50,000+ active users" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 border-2 border-border hover:border-accent transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-semibold uppercase tracking-wider">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-accent" />
              <p className="text-xs uppercase tracking-wider text-accent font-medium">Contact</p>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.90] mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions? Our team is ready to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            <div className="lg:col-span-2 p-10 bg-background">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold">
                      Email Address *
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs uppercase tracking-wider font-semibold">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Financial"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs uppercase tracking-wider font-semibold">
                    Subject *
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="sales">Sales Question</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-px bg-border">
              <div className="p-8 bg-background hover:bg-accent/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-0.5">hello@finaz.ai</p>
                    <p className="text-sm text-muted-foreground">support@finaz.ai</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-background hover:bg-accent/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground mb-0.5">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-background hover:bg-accent/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-2">Office</h3>
                    <p className="text-sm text-muted-foreground mb-0.5">123 Financial Plaza</p>
                    <p className="text-sm text-muted-foreground">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-background hover:bg-accent/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-2">Hours</h3>
                    <p className="text-sm text-muted-foreground mb-0.5">Monday - Friday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                  </div>
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

import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Finaz.ai completely transformed our loan origination workflow. Processing time dropped by 75% and our team's productivity has skyrocketed.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Pacific Financial Group",
    image: "/professional-woman-portrait.png",
    rating: 5,
  },
  {
    quote:
      "The property marketing suite is a game-changer. Lead quality increased 3x and our conversion rates have more than doubled in just 6 months.",
    author: "Michael Rodriguez",
    role: "Director of Sales",
    company: "Urban Development Corp",
    image: "/professional-man-portrait.png",
    rating: 5,
  },
  {
    quote:
      "Best-in-class CRM integration. The AI-powered insights help us prioritize high-value leads and close deals 40% faster.",
    author: "Emily Watson",
    role: "Chief Technology Officer",
    company: "NextGen Lending",
    image: "/professional-woman-executive.png",
    rating: 5,
  },
  {
    quote:
      "Compliance and security features are exceptional. Automated KYC/AML checks save us countless hours every single week.",
    author: "David Kim",
    role: "Compliance Manager",
    company: "Global Finance Solutions",
    image: "/professional-asian-man.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <p className="text-xs uppercase tracking-wider text-accent font-medium">Client Success</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background p-10 space-y-5">
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-base md:text-lg leading-relaxed text-foreground">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 object-cover border-2 border-border"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</div>
                  <div className="text-xs text-accent font-medium uppercase tracking-wider mt-0.5">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

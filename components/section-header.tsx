import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ badge, title, description, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl space-y-6", centered && "mx-auto text-center", className)}>
      {badge && (
        <div className={cn(centered && "flex justify-center")}>
          <p className="text-xs uppercase tracking-widest text-accent font-medium">{badge}</p>
        </div>
      )}
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight text-balance">{title}</h2>
      {description && <p className="text-lg text-muted-foreground leading-relaxed text-balance">{description}</p>}
    </div>
  )
}

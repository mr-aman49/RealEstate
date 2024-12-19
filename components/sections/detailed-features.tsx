import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Users, Calendar, ChartBar, Globe, Shield } from "lucide-react"

const detailedFeatures = [
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    description: "Natural language processing for human-like interactions with potential clients",
    benefits: ["24/7 availability", "Instant responses", "Multilingual support"]
  },
  {
    icon: Users,
    title: "Advanced Lead Management",
    description: "Comprehensive system for tracking and nurturing potential clients",
    benefits: ["Automated lead scoring", "Follow-up reminders", "Lead activity tracking"]
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated booking system for property viewings and appointments",
    benefits: ["Real-time availability", "Automated reminders", "Calendar sync"]
  },
  {
    icon: ChartBar,
    title: "Detailed Analytics",
    description: "In-depth insights into your business performance",
    benefits: ["Conversion tracking", "ROI analysis", "Custom reports"]
  },
  {
    icon: Globe,
    title: "Multi-Channel Integration",
    description: "Connect with clients across various platforms",
    benefits: ["WhatsApp integration", "Website widget", "Social media ready"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security for your data and communications",
    benefits: ["End-to-end encryption", "GDPR compliant", "Regular backups"]
  }
]

export function DetailedFeatures() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {detailedFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="relative group hover:border-primary transition-colors">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
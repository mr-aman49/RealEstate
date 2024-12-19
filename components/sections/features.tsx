import { Building2, MessageSquare, Users, Calendar, ChartBar, Globe } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Smart Chatbot",
    description: "AI-powered responses for property inquiries and customer support"
  },
  {
    icon: Users,
    title: "Lead Management",
    description: "Capture and nurture leads automatically through intelligent conversations"
  },
  {
    icon: Building2,
    title: "Property Showcase",
    description: "Showcase properties and schedule site visits effortlessly"
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Let clients book property viewings 24/7 without manual intervention"
  },
  {
    icon: ChartBar,
    title: "Analytics Dashboard",
    description: "Track performance metrics and lead conversion rates in real-time"
  },
  {
    icon: Globe,
    title: "Multi-Channel Support",
    description: "Connect with clients on WhatsApp, web, and social media platforms"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your real estate business and provide exceptional client service
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative group rounded-lg border p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
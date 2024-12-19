import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Globe, Facebook, Instagram } from "lucide-react"

const integrations = [
  {
    icon: MessageSquare,
    name: "WhatsApp",
    description: "Connect with clients on their preferred messaging platform",
    status: "Available"
  },
  {
    icon: Globe,
    name: "Website Widget",
    description: "Embed the chatbot directly on your website",
    status: "Available"
  },
  {
    icon: Facebook,
    name: "Facebook Messenger",
    description: "Engage with clients through Facebook",
    status: "Coming Soon"
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Handle inquiries from Instagram DMs",
    status: "Coming Soon"
  }
]

export function Integrations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Platform Integrations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with your clients wherever they are with our multi-channel integrations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      integration.status === "Available"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    )}>
                      {integration.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
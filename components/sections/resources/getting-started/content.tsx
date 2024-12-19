import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Settings, Users, Video } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: Settings,
    title: "Account Setup",
    description: "Configure your RealChat account and customize your settings",
    link: "/resources/guides/account-setup"
  },
  {
    icon: Bot,
    title: "Chatbot Configuration",
    description: "Set up your chatbot with personalized responses and workflows",
    link: "/resources/guides/chatbot-setup"
  },
  {
    icon: Users,
    title: "Lead Management",
    description: "Learn how to effectively manage and nurture your leads",
    link: "/resources/guides/lead-management"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch step-by-step tutorials on using RealChat features",
    link: "/resources/tutorials"
  }
]

export function GettingStartedContent() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Getting Started with RealChat</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our step-by-step guide to set up and optimize your RealChat experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Link key={index} href={step.link}>
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
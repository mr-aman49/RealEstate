import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Briefcase } from "lucide-react"

const useCases = [
  {
    icon: Building2,
    title: "Individual Agents",
    description: "Perfect for independent agents looking to automate their client interactions and property management",
    features: [
      "24/7 client support via chatbot",
      "Automated lead capture and nurturing",
      "Property listing management",
      "Viewing schedule automation"
    ]
  },
  {
    icon: Users,
    title: "Real Estate Agencies",
    description: "Comprehensive solution for agencies to manage multiple agents and properties efficiently",
    features: [
      "Multi-agent support",
      "Team collaboration tools",
      "Advanced analytics and reporting",
      "Customizable workflows"
    ]
  },
  {
    icon: Briefcase,
    title: "Property Developers",
    description: "Powerful tools for managing and marketing new development projects",
    features: [
      "Project-specific chatbots",
      "Virtual property tours",
      "Bulk property management",
      "Development milestone tracking"
    ]
  }
]

export function UseCases() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card key={index} className="relative group hover:border-primary transition-colors">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
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
import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingUp, Shield, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and focus on closing deals"
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Convert more leads with instant response and follow-up"
  },
  {
    icon: Shield,
    title: "Reduce Costs",
    description: "Lower operational costs with automated client support"
  },
  {
    icon: HeartHandshake,
    title: "Improve Service",
    description: "Provide consistent, high-quality client experience"
  }
]

export function Benefits() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose RealChat</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your real estate business with our innovative solutions
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
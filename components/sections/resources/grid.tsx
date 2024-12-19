import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, FileText, Users } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    icon: BookOpen,
    title: "Getting Started Guide",
    description: "Learn the basics of setting up and using RealChat for your business",
    link: "/resources/getting-started"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides for all RealChat features",
    link: "/resources/tutorials"
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed documentation and API references",
    link: "/resources/docs"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with other real estate professionals using RealChat",
    link: "/resources/community"
  }
]

export function ResourceGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <Link key={index} href={resource.link}>
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
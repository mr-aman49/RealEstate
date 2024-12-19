import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const guides = [
  {
    title: "Maximizing Lead Conversion",
    description: "Learn effective strategies to convert more leads into clients",
    category: "Lead Generation",
    readTime: "5 min read"
  },
  {
    title: "Chatbot Best Practices",
    description: "Tips for optimizing your chatbot interactions",
    category: "Automation",
    readTime: "8 min read"
  },
  {
    title: "Property Showcase Guide",
    description: "How to effectively present properties through chat",
    category: "Sales",
    readTime: "6 min read"
  }
]

export function GuidesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Guides</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert tips and strategies to grow your real estate business
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {guides.map((guide, index) => (
            <Link key={index} href={`/resources/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary">{guide.category}</span>
                    <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{guide.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
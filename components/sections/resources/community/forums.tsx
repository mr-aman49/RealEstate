import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Lightbulb, HelpCircle } from "lucide-react"

const forumCategories = [
  {
    icon: MessageSquare,
    title: "General Discussion",
    description: "Connect with other real estate professionals",
    topics: 234,
    posts: 1543
  },
  {
    icon: Users,
    title: "Best Practices",
    description: "Share and learn effective strategies",
    topics: 156,
    posts: 892
  },
  {
    icon: Lightbulb,
    title: "Tips & Tricks",
    description: "Discover useful RealChat features",
    topics: 98,
    posts: 445
  },
  {
    icon: HelpCircle,
    title: "Help & Support",
    description: "Get assistance from the community",
    topics: 178,
    posts: 934
  }
]

export function CommunityForums() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {forumCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader className="flex flex-row items-center space-y-0">
                  <Icon className="h-6 w-6 text-primary mr-4" />
                  <div className="flex-1">
                    <CardTitle>{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{category.topics} topics</span>
                    <span>{category.posts} posts</span>
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
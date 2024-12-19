import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { tutorials } from "@/lib/constants/tutorials"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { PlayCircle } from "lucide-react"

export function TutorialsList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden hover:border-primary transition-colors">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${tutorial.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-white" />
                  </div>
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary">{tutorial.category}</span>
                  <span className="text-muted-foreground">{tutorial.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
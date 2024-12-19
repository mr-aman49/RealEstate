import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Guide } from "@/lib/types/resources"

interface GuideContentProps {
  guide: Guide
}

export function GuideContent({ guide }: GuideContentProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-primary">{guide.category}</span>
              <span className="text-sm text-muted-foreground">{guide.readTime}</span>
            </div>
            <CardTitle className="text-3xl">{guide.title}</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            {guide.content}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
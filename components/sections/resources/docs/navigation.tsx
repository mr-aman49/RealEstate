import { cn } from "@/lib/utils"
import { TableOfContents } from "@/lib/types/docs"

interface DocsNavigationProps {
  items: TableOfContents[]
}

export function DocsNavigation({ items }: DocsNavigationProps) {
  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <div className="space-y-1">
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.slug}`}
            className={cn(
              "block text-sm text-muted-foreground hover:text-foreground",
              item.level === 2 ? "pl-4" : "pl-8"
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
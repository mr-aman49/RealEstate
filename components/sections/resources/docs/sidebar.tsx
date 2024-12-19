import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsSidebarItem } from "@/lib/types/docs"

interface DocsSidebarProps {
  items: DocsSidebarItem[]
}

export function DocsSidebar({ items }: DocsSidebarProps) {
  return (
    <ScrollArea className="h-[calc(100vh-200px)] py-6 pr-6 lg:py-8">
      <div className="w-full">
        {items.map((item, index) => (
          <div key={index} className="pb-4">
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
              {item.title}
            </h4>
            {item.items?.length && (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {item.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex w-full items-center rounded-md p-2 hover:underline",
                      "text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-60"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
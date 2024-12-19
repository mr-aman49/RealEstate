import { DocsHero } from "./hero"
import { DocsSidebar } from "./sidebar"
import { DocsNavigation } from "./navigation"
import { docsConfig } from "@/lib/constants/docs"

export function DocsContent() {
  return (
    <div className="container py-20">
      <DocsHero />
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_200px] gap-8 mt-12">
        <DocsSidebar items={docsConfig.sidebarNav} />
        <main className="relative py-6">
          <article className="prose dark:prose-invert max-w-none">
            {docsConfig.mainContent}
          </article>
        </main>
        <div className="hidden lg:block">
          <DocsNavigation items={docsConfig.tableOfContents} />
        </div>
      </div>
    </div>
  )
}
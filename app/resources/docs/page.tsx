import { Header } from "@/components/layout/header"
import { DocsContent } from "@/components/sections/resources/docs/content"
import { CTASection } from "@/components/sections/cta"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <DocsContent />
        <CTASection />
      </main>
    </div>
  )
}
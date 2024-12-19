import { Header } from "@/components/layout/header"
import { GettingStartedContent } from "@/components/sections/resources/getting-started/content"
import { CTASection } from "@/components/sections/cta"

export default function GettingStartedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <GettingStartedContent />
        <CTASection />
      </main>
    </div>
  )
}
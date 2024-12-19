import { Header } from "@/components/layout/header"
import { ResourcesHero } from "@/components/sections/resources/hero"
import { ResourceGrid } from "@/components/sections/resources/grid"
import { GuidesSection } from "@/components/sections/resources/guides"
import { CTASection } from "@/components/sections/cta"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ResourcesHero />
        <ResourceGrid />
        <GuidesSection />
        <CTASection />
      </main>
    </div>
  )
}
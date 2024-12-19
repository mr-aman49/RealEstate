import { Header } from "@/components/layout/header"
import { SolutionsHero } from "@/components/sections/solutions/hero"
import { UseCases } from "@/components/sections/solutions/use-cases"
import { Benefits } from "@/components/sections/solutions/benefits"
import { Testimonials } from "@/components/sections/solutions/testimonials"
import { CTASection } from "@/components/sections/cta"

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SolutionsHero />
        <UseCases />
        <Benefits />
        <Testimonials />
        <CTASection />
      </main>
    </div>
  )
}
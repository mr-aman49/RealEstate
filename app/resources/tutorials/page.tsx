import { Header } from "@/components/layout/header"
import { TutorialsContent } from "@/components/sections/resources/tutorials/content"
import { CTASection } from "@/components/sections/cta"

export default function TutorialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TutorialsContent />
        <CTASection />
      </main>
    </div>
  )
}
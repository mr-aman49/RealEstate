import { Header } from "@/components/layout/header"
import { CommunityHero } from "@/components/sections/resources/community/hero"
import { CommunityForums } from "@/components/sections/resources/community/forums"
import { CTASection } from "@/components/sections/cta"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CommunityHero />
        <CommunityForums />
        <CTASection />
      </main>
    </div>
  )
}
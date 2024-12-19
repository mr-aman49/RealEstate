import { Header } from "@/components/layout/header"
import { FeatureHero } from "@/components/sections/feature-hero"
import { DetailedFeatures } from "@/components/sections/detailed-features"
import { ChatDemo } from "@/components/sections/chat-demo"
import { Integrations } from "@/components/sections/integrations"
import { CTASection } from "@/components/sections/cta"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FeatureHero />
        <DetailedFeatures />
        <ChatDemo />
        <Integrations />
        <CTASection />
      </main>
    </div>
  )
}
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 RealChat. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
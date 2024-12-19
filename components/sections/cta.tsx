import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Real Estate Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of real estate professionals who are already using RealChat
          to grow their business
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto px-8">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
import { ChatWidget } from "@/components/chat/chat-widget"

export function ChatDemo() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Experience Our AI Chatbot in Action
            </h2>
            <p className="text-muted-foreground mb-8">
              Try our intelligent chatbot and see how it handles property inquiries,
              schedules viewings, and provides instant support to your clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">1</span>
                <div>
                  <h3 className="font-semibold">Ask About Properties</h3>
                  <p className="text-sm text-muted-foreground">Get instant information about available properties</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">2</span>
                <div>
                  <h3 className="font-semibold">Schedule Viewings</h3>
                  <p className="text-sm text-muted-foreground">Book property visits with automated confirmation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">3</span>
                <div>
                  <h3 className="font-semibold">Get Support</h3>
                  <p className="text-sm text-muted-foreground">Receive immediate answers to common questions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
            <ChatWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "RealChat has transformed how we handle client inquiries. Our response time has improved dramatically.",
    author: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Premium Properties",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "The automated scheduling feature alone has saved us countless hours. It's a game-changer.",
    author: "Michael Chen",
    role: "Agency Director",
    company: "City Real Estate",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    quote: "Our lead conversion rate has increased by 40% since implementing RealChat. The ROI is incredible.",
    author: "Emma Thompson",
    role: "Sales Manager",
    company: "Luxury Homes",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from real estate professionals who have transformed their business with RealChat
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <blockquote className="mb-6 text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
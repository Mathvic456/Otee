import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mr Barikumo Ado",
      role: "Zonal Director, Federal Radio Cooperation of Nigeria",
      content:
        "Otoabasi's strategic approach to brand development has been instrumental in our success. His ability to understand market dynamics and create compelling campaigns is exceptional.",
      rating: 5,
    },
    {
      name: "Ekemini Obop",
      role: "Head of Operations, Next Step Music",
      content:
        "Working with Otoabasi has been a game-changer for our brand partnerships. His expertise in community building and content strategy delivered outstanding results.",
      rating: 5,
    },
    {
      name: "Gilbert Bani (AQ)",
      role: "CEO, Cake Bizness",
      content:
        "Otoabasi's innovative marketing strategies helped us achieve a 4x increase in our pre-sale value. His dedication and strategic thinking are unmatched.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from industry leaders and partners I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

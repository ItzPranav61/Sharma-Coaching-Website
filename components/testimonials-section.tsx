import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Patil",
    role: "Class 12 Student",
    content:
      "Sharma Coaching Classes helped me score 95% in my board exams. The teachers are very supportive and the doubt-clearing sessions made all the difference.",
  },
  {
    name: "Amit Deshmukh",
    role: "Parent",
    content:
      "My son&apos;s performance in Mathematics improved dramatically after joining here. The personalized attention and regular feedback to parents is commendable.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Class 10 Student",
    content:
      "The Science practicals and experiments here are amazing. I finally understand concepts that seemed impossible before. Thank you, Sharma Sir!",
  },
  {
    name: "Rajendra Sharma",
    role: "Parent",
    content:
      "Both my children study here. The faculty is dedicated and the results speak for themselves. Highly recommend to all parents in Badlapur.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            What Our Students & Parents Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our community has to say
            about their experience with Sharma Coaching Classes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-card-foreground leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

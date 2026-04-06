import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to begin your academic journey with us? Contact us today for
            admissions, inquiries, or to schedule a free demo class.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="border-border/50 bg-card text-center">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 98765 43210
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card text-center">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
              <a
                href="mailto:info@sharmacoaching.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                info@sharmacoaching.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card text-center">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Timings</h3>
              <p className="text-muted-foreground text-sm">
                Mon - Sat: 8 AM - 8 PM
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card text-center">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Address</h3>
              <p className="text-muted-foreground text-sm">
                Near Railway Station, Badlapur (W), Maharashtra 421503
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="font-semibold" asChild>
            <a href="tel:+919876543210">
              <Phone className="h-4 w-4 mr-2" />
              Call Now for Admission
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

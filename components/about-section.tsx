import { Target, Award, Heart, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Dedicated to Academic Excellence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded by Mr. Rajesh Sharma, a passionate educator with over 15 years of
            teaching experience, Sharma Coaching Classes has been a beacon of quality
            education in Badlapur. We believe every student has the potential to excel,
            and our mission is to unlock that potential through personalized attention
            and proven teaching methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To provide affordable, high-quality education that prepares students
              for academic success and lifelong learning.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">Excellence</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consistently producing top performers in board examinations with
              our focused curriculum and dedicated faculty.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">Personal Care</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Small batch sizes ensure individual attention for every student,
              addressing their unique learning needs.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-2">Innovation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Modern teaching techniques combined with traditional values for
              comprehensive student development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Calculator, BookText, CheckCircle2 } from "lucide-react";

const courses = [
  {
    title: "Science",
    icon: FlaskConical,
    description:
      "Comprehensive Physics, Chemistry, and Biology courses with practical experiments and conceptual clarity.",
    classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    features: [
      "Lab practicals & demonstrations",
      "Board exam preparation",
      "Competitive exam guidance",
      "Regular tests & assessments",
    ],
  },
  {
    title: "Mathematics",
    icon: Calculator,
    description:
      "Strong foundation in mathematical concepts with problem-solving techniques and shortcut methods.",
    classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    features: [
      "Concept-based learning",
      "Practice worksheets",
      "Doubt clearing sessions",
      "Speed mathematics tricks",
    ],
  },
  {
    title: "English",
    icon: BookText,
    description:
      "Improve grammar, vocabulary, and communication skills with focus on reading comprehension and writing.",
    classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    features: [
      "Grammar fundamentals",
      "Essay & letter writing",
      "Spoken English practice",
      "Literature appreciation",
    ],
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Comprehensive Curriculum for Classes 8-12
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Expert coaching in core subjects designed to build strong academic
            foundations and prepare students for board examinations and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="border-border/50 bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{course.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {course.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.classes.map((cls) => (
                    <Badge
                      key={cls}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {cls}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-3">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

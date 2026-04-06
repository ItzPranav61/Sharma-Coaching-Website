"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-10 w-10 text-primary-foreground" />
            <span className="text-primary-foreground/90 text-lg font-medium">
              Sharma Coaching Classes
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Shaping Future Leaders
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
            Empowering students in Badlapur with quality education in Science,
            Mathematics, and English. Building strong foundations for academic
            excellence since 2010.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-semibold"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Courses
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/70">Students Taught</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">15+</div>
                <div className="text-sm text-primary-foreground/70">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">95%</div>
                <div className="text-sm text-primary-foreground/70">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

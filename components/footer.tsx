import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-background" />
            <span className="font-bold text-background">Sharma Coaching Classes</span>
          </div>
          <p className="text-background/60 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Sharma Coaching Classes, Badlapur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-glow">
          Education
        </h2>

        <div className="space-y-8">
          <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-primary/20 glow-primary flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  M.Sc. Data Science
                </h3>
                <p className="text-lg text-secondary font-semibold mb-2">
                  Manipal Academy of Higher Education
                </p>
                <div className="flex items-center gap-4 text-muted-foreground mb-3">
                  <span>2024 – 2026</span>
                  <span className="text-primary font-bold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    CGPA: 9.0
                  </span>
                </div>
                <p className="text-foreground/80">
                  Pursuing advanced studies in data science with focus on machine learning, 
                  deep learning, and generative AI technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full bg-secondary/20 glow-secondary flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  B.Sc. Statistics
                </h3>
                <p className="text-lg text-accent font-semibold mb-2">
                  Shivaji University, Kolhapur
                </p>
                <div className="flex items-center gap-4 text-muted-foreground mb-3">
                  <span>2021 – 2024</span>
                  <span className="text-secondary font-bold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    CGPA: 9.05
                  </span>
                </div>
                <p className="text-foreground/80">
                  Strong foundation in statistical theory, probability, and data analysis with 
                  hands-on experience in statistical software and programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

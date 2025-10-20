import { Briefcase, Award, Users, TrendingUp } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-glow">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="relative glass-card rounded-2xl p-8 ml-20 mb-8 hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -left-[4.5rem] top-8 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-primary">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Data Analyst Intern
              </h3>
              <p className="text-lg text-secondary font-semibold mb-1">
                Renu Sharma Foundation
              </p>
              <p className="text-muted-foreground">
                March 2025 – June 2025
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  Analyzed donation, CSR, and sales datasets to extract actionable insights that 
                  supported strategic decision-making across the organization.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  Built comprehensive Power BI and Excel dashboards, providing real-time visibility 
                  into key performance metrics and enabling data-driven strategies.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  Led a 6-member team on a Social Media Sentiment Analysis project using TextBlob 
                  and VADER, delivering insights into brand perception and engagement patterns.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/90">
                  <span className="font-semibold text-primary">Awarded "Intern of the Week"</span> for 
                  delivering high-impact visualizations and demonstrating exceptional leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

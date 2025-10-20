import { Award } from "lucide-react";

const certifications = [
  {
    title: "SQL for Data Science",
    issuer: "UC Davis",
    date: "September 2024",
    color: "primary",
  },
  {
    title: "Data Engineering Essentials",
    issuer: "Coursera",
    date: "August 2024",
    color: "secondary",
  },
  {
    title: "Introduction to Data Engineering",
    issuer: "IBM",
    date: "August 2024",
    color: "accent",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-glow">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:scale-[1.05] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-3 rounded-full bg-${cert.color}/20 glow-${cert.color} w-fit mb-4`}>
                <Award className={`w-6 h-6 text-${cert.color}`} />
              </div>
              
              <h3 className={`text-xl font-bold text-${cert.color} mb-2`}>
                {cert.title}
              </h3>
              
              <p className="text-foreground/90 font-semibold mb-1">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

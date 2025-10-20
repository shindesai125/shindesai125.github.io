import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "US Home Price Modeling",
    description: "Designed and deployed a multivariate time-series regression model predicting the Case-Shiller Home Price Index (2000–2024). Deployed via Streamlit and Render for real-time predictions.",
    tech: ["Python", "Time-Series Analysis", "Streamlit", "Render"],
    github: "https://github.com/shindesai125/US-Home-Price-Modeling",
    demo: "https://us-home-price-api.onrender.com/",
    color: "primary",
  },
  {
    title: "Real-Time Object Detection",
    description: "Built and deployed a real-time object detection system using YOLOv8 and OpenCV, wrapped in a responsive Flask + Streamlit web interface. Features live webcam feed processing and confidence scoring.",
    tech: ["OpenCV", "YOLOv8", "Flask", "Streamlit", "Bootstrap"],
    github: "https://github.com/shindesai125/real-time-object-detection",
    color: "secondary",
  },
  {
    title: "Crime Prediction for Kolhapur City",
    description: "Built predictive models using Python, SQL, and R to analyze and forecast crime trends. Utilized regression and clustering to identify patterns and assist local authorities.",
    tech: ["Python", "R", "SQL", "Machine Learning"],
    color: "accent",
  },
  {
    title: "Mental Health Analysis of Youth",
    description: "Conducted statistical study on 1,000 students using R and Python. Built interactive Power BI and Tableau dashboards for comprehensive mental health insights.",
    tech: ["R", "Python", "SQL", "Power BI", "Tableau"],
    color: "primary",
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "Implemented NLP with TextBlob and VADER to analyze Twitter and Facebook data. Created Power BI dashboard visualizing polarity, engagement, and hashtag analytics.",
    tech: ["NLP", "TextBlob", "VADER", "Power BI"],
    color: "secondary",
  },
  {
    title: "DeepFake Detection",
    description: "Developed CNN–LSTM hybrid model using PyTorch and Streamlit to identify DeepFake videos, achieving high precision on FaceForensics++ dataset.",
    tech: ["PyTorch", "CNN-LSTM", "Streamlit", "Computer Vision"],
    color: "accent",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-glow">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
              
              <div className="relative">
                <h3 className={`text-xl font-bold mb-3 text-${project.color} group-hover:text-glow-blue transition-all`}>
                  {project.title}
                </h3>

                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full glass border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary/20 hover:bg-primary/30 border border-primary/50"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

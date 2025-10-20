import { Brain, Code, Rocket, Database, BarChart } from "lucide-react";

const skillCategories = [
  {
    title: "GenAI & Agentic Tools",
    icon: Brain,
    skills: [
      "LangChain",
      "Hugging Face Transformers",
      "Azure OpenAI",
      "Prompt Engineering",
      "TextBlob",
      "VADER",
      "TensorFlow",
      "PyTorch",
      "LLM Fine-tuning",
      "Git",
    ],
    color: "primary",
  },
  {
    title: "ML & NLP Techniques",
    icon: Code,
    skills: [
      "Linear Regression",
      "Ridge Regression",
      "Random Forest",
      "Ensemble Techniques",
      "Clustering",
      "Time Series Analysis",
      "Feature Engineering",
      "Sentiment Analysis",
    ],
    color: "secondary",
  },
  {
    title: "Deployment & Web Frameworks",
    icon: Rocket,
    skills: ["Flask", "Streamlit", "Django (Basics)", "Render"],
    color: "accent",
  },
  {
    title: "Programming & Data Tools",
    icon: Database,
    skills: [
      "Python",
      "R",
      "SQL",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Plotly",
      "Seaborn",
    ],
    color: "primary",
  },
  {
    title: "Visualization & BI",
    icon: BarChart,
    skills: ["Power BI", "Tableau", "Excel"],
    color: "secondary",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-glow">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/20 glow-${category.color}`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 text-sm rounded-full glass border border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-glow">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative glass-card rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <User className="w-48 h-48 text-primary/30" />
              <p className="absolute bottom-4 text-sm text-muted-foreground">Profile photo coming soon</p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm an AI/ML enthusiast with a passion for <span className="text-primary font-semibold">Generative AI</span>, 
              prompt engineering, and agentic systems. My journey in data science combines theoretical knowledge 
              with hands-on experience in building intelligent solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              With expertise in <span className="text-secondary font-semibold">Python, R, and SQL</span>, I specialize 
              in NLP, regression analysis, and time-series modeling. I work extensively with cutting-edge GenAI 
              frameworks including <span className="text-accent font-semibold">LangChain, Hugging Face, and Azure OpenAI</span> to 
              create innovative AI-powered applications.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              My approach combines rigorous statistical analysis with modern machine learning techniques, 
              enabling me to extract actionable insights from complex datasets and build models that drive 
              real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

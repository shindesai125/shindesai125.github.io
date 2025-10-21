import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const titles = [
  "Data Science Enthusiast",
  "Aspiring AI/ML Engineer",
  "Aspiring GenAI Engineer",
];

export const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = titles[currentTitle];
      
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
          setTypingSpeed(75);
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitle, typingSpeed]);

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      {/* Neural network particles with connections */}
      <div className="absolute inset-0">
        {/* Particles */}
        <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-primary rounded-full animate-float glow-primary" />
        <div className="absolute top-[25%] left-[45%] w-4 h-4 bg-secondary rounded-full animate-float glow-secondary animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] left-[25%] w-3 h-3 bg-primary rounded-full animate-float glow-primary" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[75%] left-[60%] w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[20%] left-[70%] w-3 h-3 bg-accent rounded-full animate-float glow-secondary animate-glow-pulse" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[85%] left-[40%] w-4 h-4 bg-primary rounded-full animate-float glow-primary" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[50%] left-[10%] w-2 h-2 bg-secondary rounded-full animate-float glow-primary" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-[15%] right-[10%] w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-[15%] left-[70%] w-2 h-2 bg-accent rounded-full animate-float glow-secondary" style={{ animationDelay: "2.2s" }} />
        
        {/* Connection lines - Neural network style */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="15%" y1="10%" x2="45%" y2="25%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" />
          <line x1="45%" y1="25%" x2="80%" y2="40%" stroke="hsl(var(--secondary))" strokeWidth="1" style={{ animationDelay: "1s" }} className="animate-glow-pulse" />
          <line x1="25%" y1="60%" x2="10%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" style={{ animationDelay: "1.5s" }} className="animate-glow-pulse" />
          <line x1="70%" y1="20%" x2="80%" y2="40%" stroke="hsl(var(--accent))" strokeWidth="1" style={{ animationDelay: "2s" }} className="animate-glow-pulse" />
          <line x1="40%" y1="85%" x2="60%" y2="75%" stroke="hsl(var(--secondary))" strokeWidth="1" style={{ animationDelay: "0.5s" }} className="animate-glow-pulse" />
        </svg>
      </div>
      
      {/* Floating orbs with movement */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Binary rain effect */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-0 left-[10%] text-primary text-xs animate-slide-down" style={{ animationDuration: "15s", animationDelay: "0s" }}>
          01001001<br/>01000001<br/>01001101<br/>01001100
        </div>
        <div className="absolute top-0 left-[30%] text-secondary text-xs animate-slide-down" style={{ animationDuration: "20s", animationDelay: "2s" }}>
          01000100<br/>01000001<br/>01010100<br/>01000001
        </div>
        <div className="absolute top-0 left-[50%] text-accent text-xs animate-slide-down" style={{ animationDuration: "18s", animationDelay: "1s" }}>
          01000111<br/>01000101<br/>01001110<br/>01000001
        </div>
        <div className="absolute top-0 left-[70%] text-primary text-xs animate-slide-down" style={{ animationDuration: "22s", animationDelay: "3s" }}>
          01001110<br/>01000101<br/>01010101<br/>01010010
        </div>
        <div className="absolute top-0 left-[90%] text-secondary text-xs animate-slide-down" style={{ animationDuration: "17s", animationDelay: "1.5s" }}>
          01000001<br/>01001100<br/>01001101<br/>01001100
        </div>
      </div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animationDuration: '4s'
        }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-glow">
          Sai Shinde
        </h1>
        
        <div className="h-20 mb-6">
          <p className="text-2xl md:text-4xl font-semibold text-primary">
            {displayText}
            <span className="animate-blink">|</span>
          </p>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Turning data and intelligence into impactful solutions.
        </p>

        <Button
          onClick={scrollToExperience}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 text-lg glow-primary transition-all duration-300 hover:scale-105"
        >
          Explore My Work
        </Button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
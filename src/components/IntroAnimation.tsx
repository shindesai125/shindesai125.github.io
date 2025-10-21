import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const fullText = "<S_Ai/>";

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // Wait a bit before starting the exit animation
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        // Wait for animation to complete before calling onComplete
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [displayText, fullText, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-background via-background to-background/95 flex items-center justify-center transition-all duration-1000 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Circuit background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {/* Horizontal lines */}
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" />
          <line x1="0" y1="40%" x2="100%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "1s" }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
          
          {/* Vertical lines */}
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "0.3s" }} />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "0.8s" }} />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "1.3s" }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "1.8s" }} />
          
          {/* Diagonal circuit patterns */}
          <line x1="10%" y1="10%" x2="30%" y2="30%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "0.2s" }} />
          <line x1="70%" y1="20%" x2="90%" y2="40%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "0.7s" }} />
          <line x1="20%" y1="70%" x2="40%" y2="90%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "1.2s" }} />
          <line x1="60%" y1="60%" x2="80%" y2="80%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-glow-pulse" style={{ animationDelay: "1.7s" }} />
        </svg>

        {/* Circuit nodes */}
        <div className="absolute top-[20%] left-[20%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" />
        <div className="absolute top-[40%] left-[40%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[60%] left-[60%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[80%] left-[80%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "0.3s" }} />
        <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "1.3s" }} />
        
        {/* Larger circuit nodes with extra glow */}
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "0.4s" }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "0.9s" }} />
        <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "1.4s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary rounded-full glow-primary animate-glow-pulse" style={{ animationDelay: "1.9s" }} />
      </div>

      {/* Logo with typing animation */}
      <div
        className={`relative text-center transition-all duration-1000 ${
          isComplete
            ? "scale-[0.3] -translate-y-[45vh] -translate-x-[45vw]"
            : "scale-100"
        }`}
      >
        {/* Computer chip decorations around logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left chip */}
          <div className="absolute left-[-80px] top-1/2 -translate-y-1/2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-60">
              <rect x="10" y="10" width="20" height="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
              <rect x="14" y="14" width="12" height="12" fill="hsl(var(--primary))" opacity="0.3"/>
              {/* Chip pins */}
              <line x1="0" y1="12" x2="10" y2="12" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="0" y1="20" x2="10" y2="20" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="0" y1="28" x2="10" y2="28" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="30" y1="12" x2="40" y2="12" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="30" y1="20" x2="40" y2="20" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="30" y1="28" x2="40" y2="28" stroke="hsl(var(--primary))" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Right chip */}
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-60">
              <rect x="10" y="10" width="20" height="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5"/>
              <rect x="14" y="14" width="12" height="12" fill="hsl(var(--primary))" opacity="0.3"/>
              <line x1="0" y1="12" x2="10" y2="12" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="0" y1="20" x2="10" y2="20" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="0" y1="28" x2="10" y2="28" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="30" y1="12" x2="40" y2="12" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="30" y1="20" x2="40" y2="20" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <line x1="30" y1="28" x2="40" y2="28" stroke="hsl(var(--primary))" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Top chips */}
          <div className="absolute top-[-60px] left-1/3">
            <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-50">
              <rect x="8" y="8" width="14" height="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <rect x="11" y="11" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="absolute top-[-60px] right-1/3">
            <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-50">
              <rect x="8" y="8" width="14" height="14" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
              <rect x="11" y="11" width="8" height="8" fill="hsl(var(--primary))" opacity="0.3"/>
            </svg>
          </div>
        </div>
        
        <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-mono font-bold text-primary text-glow tracking-wider">
          {/* Scan line effect overlay */}
          <span className="absolute inset-0 overflow-hidden pointer-events-none">
            <span className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent bg-[length:100%_4px] animate-glow-pulse" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)' }} />
          </span>
          
          {displayText}
          {displayText.length < fullText.length && (
            <span className="animate-blink">|</span>
          )}
        </h1>
        
        {/* Extra glow effect around logo */}
        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10" />
        <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10" />
      </div>
    </div>
  );
};

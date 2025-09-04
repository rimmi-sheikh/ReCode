import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    // Add fade-in animation
    setTimeout(() => {
      background.classList.add("visible");
    }, 100);
  }, []);

  return (
    <>
      {/* Animated grid background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 grid-background opacity-20 animate-grid-flow fade-in"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full neon-glow animate-float" />
      <div 
        className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full neon-glow-blue animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary rounded-full neon-glow animate-float"
        style={{ animationDelay: "2s" }}
      />
    </>
  );
}

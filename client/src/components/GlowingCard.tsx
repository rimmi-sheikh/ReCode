import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "purple" | "blue";
  testId?: string;
}

export default function GlowingCard({ 
  children, 
  className = "", 
  glowColor = "purple",
  testId 
}: GlowingCardProps) {
  const glowClass = glowColor === "purple" ? "neon-glow hover-glow" : "neon-glow-blue hover-glow-blue";
  
  return (
    <div 
      className={cn(
        "bg-muted rounded-2xl p-6 transition-all duration-300",
        glowClass,
        className
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
}

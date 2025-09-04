import { useEffect, useRef } from "react";
import { Link } from "wouter";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    section.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto fade-in">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-orbitron font-black mb-8 text-neon animate-glow-pulse">
          ReCode
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-foreground font-light leading-relaxed">
          Empowering women in rural Pakistan through technology education and digital literacy
        </p>
        <p className="text-lg sm:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto">
          Breaking barriers, building futures. Join us in transforming lives through code, one woman at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/program" data-testid="button-get-started">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg neon-glow hover-glow transition-all duration-300 text-lg">
              Get Started
            </button>
          </Link>
          <Link href="/about" data-testid="button-learn-more">
            <button className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-lg neon-glow-blue hover-glow-blue transition-all duration-300 text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Laptop, Code, Megaphone, Briefcase, Check } from "lucide-react";
import GlowingCard from "@/components/GlowingCard";

export default function Program() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    section.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: Laptop,
      title: "Digital Literacy",
      description: "Foundation skills in computer operation, internet navigation, and basic software usage. Building confidence in the digital world.",
      features: ["Basic Computer Skills", "Internet & Email", "Digital Communication"],
      glowColor: "purple" as const
    },
    {
      icon: Code,
      title: "Coding Foundations",
      description: "Introduction to programming languages, web development basics, and problem-solving through code.",
      features: ["HTML & CSS", "JavaScript Basics", "Project Building"],
      glowColor: "blue" as const
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Social media management, content creation, and online business strategies for entrepreneurial success.",
      features: ["Social Media Strategy", "Content Creation", "Analytics & Growth"],
      glowColor: "purple" as const
    },
    {
      icon: Briefcase,
      title: "Freelancing Skills",
      description: "Professional development, client communication, and building sustainable online businesses from home.",
      features: ["Client Relations", "Project Management", "Income Generation"],
      glowColor: "blue" as const
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-neon">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training modules designed to transform beginners into confident digital professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="fade-in">
                <GlowingCard 
                  glowColor={program.glowColor}
                  testId={`card-program-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center mb-6">
                    <div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        program.glowColor === "purple" 
                          ? "bg-primary neon-glow" 
                          : "bg-secondary neon-glow-blue"
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 ${
                        program.glowColor === "purple" 
                          ? "text-primary-foreground" 
                          : "text-secondary-foreground"
                      }`} />
                    </div>
                    <h3 className={`text-2xl font-orbitron font-bold mb-4 ${
                      program.glowColor === "purple" ? "text-neon" : "text-neon-blue"
                    }`}>
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-foreground">
                        <Check className={`w-4 h-4 mr-3 ${
                          program.glowColor === "purple" ? "text-secondary" : "text-primary"
                        }`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </GlowingCard>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 fade-in">
          <Link href="/contact" data-testid="button-apply-now">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg neon-glow hover-glow transition-all duration-300 text-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

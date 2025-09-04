import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { HandHeart, Heart, Handshake, Check, Mail, Bell } from "lucide-react";
import GlowingCard from "@/components/GlowingCard";

export default function GetInvolved() {
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

  const involvementOptions = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Share your skills as a mentor, instructor, or support coordinator. Help us scale our impact through dedicated volunteers.",
      features: ["Remote teaching opportunities", "Flexible time commitment", "Professional development"],
      buttonText: "Join as Volunteer",
      glowColor: "purple" as const
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Support our programs with financial contributions. Every donation directly funds training, equipment, and student support.",
      features: ["$50 sponsors one student", "100% goes to programs", "Tax-deductible receipts"],
      buttonText: "Make a Donation",
      glowColor: "blue" as const
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us as a corporate partner, educational institution, or NGO to expand our reach and impact.",
      features: ["Brand partnership opportunities", "CSR alignment", "Measurable impact reports"],
      buttonText: "Explore Partnership",
      glowColor: "purple" as const
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-neon">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our mission to transform lives through technology. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="fade-in">
                <GlowingCard 
                  glowColor={option.glowColor}
                  className="text-center p-8"
                  testId={`card-${option.title.toLowerCase()}`}
                >
                  <div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      option.glowColor === "purple" 
                        ? "bg-primary neon-glow" 
                        : "bg-secondary neon-glow-blue"
                    }`}
                  >
                    <IconComponent className={`w-10 h-10 ${
                      option.glowColor === "purple" 
                        ? "text-primary-foreground" 
                        : "text-secondary-foreground"
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-orbitron font-bold mb-4 ${
                    option.glowColor === "purple" ? "text-neon" : "text-neon-blue"
                  }`}>
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <ul className="text-left space-y-2 mb-8">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <Check className={`w-4 h-4 mr-3 ${
                          option.glowColor === "purple" ? "text-secondary" : "text-primary"
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 font-semibold rounded-lg transition-colors duration-300 ${
                      option.glowColor === "purple"
                        ? "bg-primary text-primary-foreground hover:bg-primary/80"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    data-testid={`button-${option.title.toLowerCase()}`}
                  >
                    {option.buttonText}
                  </button>
                </GlowingCard>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 fade-in">
          <GlowingCard testId="card-ready-to-help">
            <h3 className="text-2xl font-orbitron font-bold text-neon mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Every action, no matter how small, contributes to transforming lives and building a more inclusive digital future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" data-testid="button-contact-us">
                <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg neon-glow hover-glow transition-all duration-300">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Contact Us
                </button>
              </Link>
              <button 
                className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary font-semibold rounded-lg neon-glow-blue hover-glow-blue transition-all duration-300"
                data-testid="button-subscribe"
              >
                <Bell className="w-4 h-4 inline mr-2" />
                Subscribe to Updates
              </button>
            </div>
          </GlowingCard>
        </div>
      </div>
    </div>
  );
}

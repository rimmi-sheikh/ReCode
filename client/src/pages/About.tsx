import { useEffect, useRef } from "react";
import Timeline from "@/components/Timeline";
import GlowingCard from "@/components/GlowingCard";

export default function About() {
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

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-neon">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from resilience, driven by hope. ReCode emerged from the devastating floods in Pakistan to transform challenges into opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Flood-affected area in Pakistan" 
              className="rounded-xl shadow-2xl w-full h-auto neon-glow"
              data-testid="img-flood-impact"
            />
          </div>
          <div className="fade-in">
            <h3 className="text-3xl font-orbitron font-bold mb-6 text-neon-blue">
              From Crisis to Opportunity
            </h3>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              The 2022 floods in Pakistan displaced millions, disproportionately affecting women in rural communities. In the face of this devastation, ReCode was born with a vision to rebuild lives through technology.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We focus on empowering women in Pahari-speaking regions, providing them with digital skills that transcend geographical boundaries and economic limitations.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in">
          <h3 className="text-3xl font-orbitron font-bold mb-12 text-center text-neon">
            Our Journey
          </h3>
          <Timeline />
        </div>

        {/* Founder Section */}
        <div className="text-center mt-20 fade-in">
          <div className="max-w-4xl mx-auto">
            <GlowingCard glowColor="blue" testId="card-founder-story">
              <h3 className="text-3xl font-orbitron font-bold mb-6 text-neon-blue">
                Founder's Journey
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                "What started as a solo mission to help flood-affected communities has evolved into a movement. 
                Every line of code taught, every skill shared, represents hope for a better future. 
                We're not just teaching technology – we're building bridges to opportunity."
              </p>
              <p className="text-right text-neon mt-6 font-semibold">
                - Rimmi, Founder
              </p>
            </GlowingCard>
          </div>
        </div>
      </div>
    </div>
  );
}

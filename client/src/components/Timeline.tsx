import { useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  glowColor: "purple" | "blue";
}

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems: TimelineItem[] = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Floods devastate Pakistan. Founder begins solo journey to help affected communities.",
      side: "left",
      glowColor: "purple"
    },
    {
      year: "2023",
      title: "First Pilot Program",
      description: "Launch of digital literacy program in rural Pahari communities.",
      side: "right",
      glowColor: "blue"
    },
    {
      year: "2024",
      title: "Expanding Impact",
      description: "100+ women trained. Partnership network growing. Digital transformation in action.",
      side: "left",
      glowColor: "purple"
    }
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

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

    timeline.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line" />
      
      {/* Timeline items */}
      {timelineItems.map((item, index) => (
        <div key={index} className="relative flex items-center justify-center mb-12 fade-in">
          <div className="flex items-center w-full">
            {item.side === "left" ? (
              <>
                <div className="w-1/2 pr-8 text-right">
                  <div 
                    className={`bg-muted rounded-lg p-6 ${
                      item.glowColor === "purple" ? "neon-glow hover-glow" : "neon-glow-blue hover-glow-blue"
                    }`}
                    data-testid={`timeline-item-${item.year}`}
                  >
                    <h4 className={`text-xl font-orbitron font-bold mb-2 ${
                      item.glowColor === "purple" ? "text-neon" : "text-neon-blue"
                    }`}>
                      {item.year}
                    </h4>
                    <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 ${
                    item.glowColor === "purple" ? "bg-primary neon-glow" : "bg-secondary neon-glow-blue"
                  }`}
                />
                <div className="w-1/2 pl-8" />
              </>
            ) : (
              <>
                <div className="w-1/2 pr-8" />
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 ${
                    item.glowColor === "purple" ? "bg-primary neon-glow" : "bg-secondary neon-glow-blue"
                  }`}
                />
                <div className="w-1/2 pl-8">
                  <div 
                    className={`bg-muted rounded-lg p-6 ${
                      item.glowColor === "purple" ? "neon-glow hover-glow" : "neon-glow-blue hover-glow-blue"
                    }`}
                    data-testid={`timeline-item-${item.year}`}
                  >
                    <h4 className={`text-xl font-orbitron font-bold mb-2 ${
                      item.glowColor === "purple" ? "text-neon" : "text-neon-blue"
                    }`}>
                      {item.year}
                    </h4>
                    <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

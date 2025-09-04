import { useEffect, useRef } from "react";
import { FileText, PlayCircle, TrendingUp, Laptop, Users, Award, Download, Play, ExternalLink } from "lucide-react";
import GlowingCard from "@/components/GlowingCard";

export default function Resources() {
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

  const resources = [
    {
      icon: FileText,
      title: "Beginner's Guide to Coding",
      description: "Comprehensive PDF guide covering the basics of programming and web development.",
      type: "PDF • 2.5 MB",
      downloads: "124 downloads",
      action: "Download",
      actionIcon: Download,
      glowColor: "purple" as const
    },
    {
      icon: PlayCircle,
      title: "Digital Literacy Video Series",
      description: "Step-by-step video tutorials in Urdu and English for complete beginners.",
      type: "Video • 12 Episodes",
      downloads: "2.1K views",
      action: "Watch Now",
      actionIcon: Play,
      glowColor: "blue" as const
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Toolkit",
      description: "Infographics, templates, and guides for social media marketing and content creation.",
      type: "ZIP • 15.2 MB",
      downloads: "89 downloads",
      action: "Download",
      actionIcon: Download,
      glowColor: "purple" as const
    },
    {
      icon: Laptop,
      title: "Practice Projects",
      description: "Real-world coding projects with step-by-step instructions and solution guides.",
      type: "GitHub • 8 Projects",
      downloads: "156 forks",
      action: "View Projects",
      actionIcon: ExternalLink,
      glowColor: "blue" as const
    },
    {
      icon: Users,
      title: "Community Guidelines",
      description: "Best practices for online collaboration, networking, and building professional relationships.",
      type: "PDF • 1.8 MB",
      downloads: "67 downloads",
      action: "Download",
      actionIcon: Download,
      glowColor: "purple" as const
    },
    {
      icon: Award,
      title: "Certification Program",
      description: "Information about our certification process and portfolio building requirements.",
      type: "Web Page",
      downloads: "Available",
      action: "Learn More",
      actionIcon: ExternalLink,
      glowColor: "blue" as const
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-neon">
            Learning Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Free resources to support your learning journey. Download guides, watch tutorials, and access our complete curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            const ActionIcon = resource.actionIcon;
            
            return (
              <div key={index} className="fade-in">
                <GlowingCard 
                  glowColor={resource.glowColor}
                  testId={`card-resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-center">
                    <div 
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        resource.glowColor === "purple" 
                          ? "bg-primary neon-glow" 
                          : "bg-secondary neon-glow-blue"
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 ${
                        resource.glowColor === "purple" 
                          ? "text-primary-foreground" 
                          : "text-secondary-foreground"
                      }`} />
                    </div>
                    <h3 className={`text-xl font-orbitron font-bold mb-3 ${
                      resource.glowColor === "purple" ? "text-neon" : "text-neon-blue"
                    }`}>
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{resource.type}</span>
                      <span>{resource.downloads}</span>
                    </div>
                    <button 
                      className={`w-full py-2 rounded-lg transition-colors duration-300 ${
                        resource.glowColor === "purple"
                          ? "bg-primary text-primary-foreground hover:bg-primary/80"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                      data-testid={`button-${resource.action.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                    >
                      <ActionIcon className="w-4 h-4 inline mr-2" />
                      {resource.action}
                    </button>
                  </div>
                </GlowingCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

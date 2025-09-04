import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import GlowingCard from "@/components/GlowingCard";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "purple" },
    { icon: FaTwitter, href: "#", color: "blue" },
    { icon: FaInstagram, href: "#", color: "purple" },
    { icon: FaLinkedin, href: "#", color: "blue" },
    { icon: Github, href: "#", color: "purple" }
  ];

  return (
    <div ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-neon">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs? Want to share your story? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-orbitron font-bold text-neon-blue mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center neon-glow mr-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground" data-testid="text-email">hello@recode.org</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center neon-glow-blue mr-4">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground" data-testid="text-phone">+92 300 1234567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center neon-glow mr-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground" data-testid="text-location">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-xl font-orbitron font-bold text-neon mb-6">
                Follow Our Journey
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        social.color === "purple"
                          ? "bg-primary neon-glow hover-glow"
                          : "bg-secondary neon-glow-blue hover-glow-blue"
                      }`}
                      data-testid={`link-social-${index}`}
                    >
                      <IconComponent className={`w-6 h-6 ${
                        social.color === "purple" 
                          ? "text-primary-foreground" 
                          : "text-secondary-foreground"
                      }`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <h3 className="text-2xl font-orbitron font-bold text-neon mb-8">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select 
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
                  data-testid="select-subject"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="programs">Program Information</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership</option>
                  <option value="donation">Donation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us about your inquiry..."
                  data-testid="textarea-message"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg neon-glow hover-glow transition-all duration-300"
                data-testid="button-send-message"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-12 text-center fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-orbitron font-bold text-neon mb-4">
              ReCode
            </h2>
            <p className="text-lg text-muted-foreground">
              Empowering women through technology, one line of code at a time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 ReCode. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              <span>Built with </span>
              <span className="text-primary mx-1">💻</span>
              <span> by rimmi</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Search, Lightbulb, Palette, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Research & Discovery",
      description: "Deep dive into user needs, market analysis, and competitive research to understand the problem space.",
      step: "01"
    },
    {
      icon: Lightbulb,
      title: "Ideation & Strategy",
      description: "Brainstorming sessions and strategic planning to define the vision and create innovative solutions.",
      step: "02"
    },
    {
      icon: Palette,
      title: "Design & Prototype",
      description: "Creating high-fidelity designs and interactive prototypes that bring ideas to life.",
      step: "03"
    },
    {
      icon: Rocket,
      title: "Test & Launch",
      description: "Rigorous testing, iteration, and successful launch with ongoing optimization and support.",
      step: "04"
    }
  ];

  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            My <span className="gradient-text-secondary">Process</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              <div className="glass-card p-8 text-center group-hover:scale-105 transition-all duration-300 relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-background font-bold text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-background" />
                </div>

                <h3 className="text-xl font-bold mb-4 gradient-text">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-foreground/70 mb-6">
              Let's collaborate to bring your vision to life with a process that ensures success at every step.
            </p>
            <Button variant="neon" size="lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
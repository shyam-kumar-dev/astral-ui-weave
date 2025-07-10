import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-6 inline-flex items-center px-4 py-2 glass-card rounded-full">
          <Sparkles className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm text-foreground/80">Available for new projects</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text glow-text">Premium</span>
          <br />
          <span className="text-foreground">UI/UX Designer</span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting digital experiences that blend cutting-edge design with intuitive functionality. 
          Transforming ideas into pixel-perfect realities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="neon" size="lg" className="text-lg">
            View My Work
          </Button>
          <Button variant="neon-outline" size="lg" className="text-lg">
            Let's Connect
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
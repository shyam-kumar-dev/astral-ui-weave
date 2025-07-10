import { User, Award, Coffee, Heart } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: User, label: "Happy Clients", value: "100+" },
    { icon: Coffee, label: "Projects Completed", value: "200+" },
    { icon: Heart, label: "Design Awards", value: "15+" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="gradient-text-secondary">About</span> Me
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences 
                that users love. My approach combines aesthetics with functionality, ensuring every design 
                serves a purpose while looking absolutely stunning.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I specialize in creating premium, futuristic interfaces that push the boundaries of 
                modern design while maintaining perfect usability. Every pixel has a purpose.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-neon-pink transition-colors" />
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 aspect-square flex items-center justify-center relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-neon-blue/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Center Content */}
              <div className="text-center z-10 relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold gradient-text">Sarah Chen</h3>
                <p className="text-foreground/60 mt-2">Senior UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
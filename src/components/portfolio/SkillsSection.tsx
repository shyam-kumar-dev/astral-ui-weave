import { Palette, Code, Lightbulb, Zap, Users, Target } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Design Tools",
      icon: Palette,
      items: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Framer", level: 80 },
      ]
    },
    {
      category: "Development",
      icon: Code,
      items: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      category: "UX Research",
      icon: Lightbulb,
      items: [
        { name: "User Research", level: 90 },
        { name: "Prototyping", level: 95 },
        { name: "Usability Testing", level: 85 },
        { name: "Information Architecture", level: 90 },
      ]
    }
  ];

  const specialties = [
    { icon: Zap, title: "Fast Prototyping", desc: "Rapid iteration and validation" },
    { icon: Users, title: "User-Centered", desc: "Always putting users first" },
    { icon: Target, title: "Goal-Oriented", desc: "Focused on business objectives" },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, index) => (
            <div key={index} className="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <skillCategory.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold">{skillCategory.category}</h3>
              </div>

              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <specialty.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text-secondary">{specialty.title}</h3>
              <p className="text-foreground/70">{specialty.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
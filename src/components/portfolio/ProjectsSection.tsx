import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "NeuroUI Dashboard",
      category: "Web Application",
      description: "A futuristic admin dashboard with AI-powered analytics and real-time data visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      featured: true
    },
    {
      title: "CryptoWallet Mobile",
      category: "Mobile App",
      description: "Sleek cryptocurrency wallet with biometric security and seamless trading experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Expo", "Redux", "Crypto APIs"]
    },
    {
      title: "Quantum E-commerce",
      category: "E-commerce",
      description: "Next-gen shopping platform with AR product visualization and AI recommendations.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Shopify", "Three.js", "AI/ML"]
    },
    {
      title: "MindSpace VR",
      category: "VR Experience",
      description: "Virtual reality meditation and wellness platform with immersive environments.",
      image: "/api/placeholder/600/400",
      technologies: ["Unity", "WebXR", "Blender", "Spatial Audio"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of premium digital experiences that push creative boundaries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-card group hover:scale-[1.02] transition-all duration-500 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-primary/10 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-foreground/20">{project.title.split(' ')[0]}</div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="neon">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="neon-outline">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-foreground/40" />
                </div>

                <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-muted/50 text-foreground/60 rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button variant="neon-outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "CEO, TechNova",
      company: "TechNova Solutions",
      content: "Sarah's design expertise transformed our entire digital presence. The futuristic UI she created not only looks stunning but also increased our user engagement by 300%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      company: "Quantum Labs",
      content: "Working with Sarah was an absolute pleasure. Her attention to detail and innovative approach to UX design helped us launch a product that users genuinely love.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "NeuroTech",
      content: "The glassmorphism design Sarah created for our platform perfectly captured our brand's futuristic vision. Our investors were blown away by the presentation.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            What industry leaders say about working with me
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-background" />
              </div>

              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-4 text-background font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold gradient-text">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "100+", label: "Happy Clients" },
            { number: "5.0", label: "Average Rating" },
            { number: "200+", label: "Projects Delivered" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@sarahchen.design",
      href: "mailto:hello@sarahchen.design"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  className="flex items-center group hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">{info.label}</div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-muted/50 hover:bg-gradient-primary rounded-lg flex items-center justify-center group transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-background transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Project inquiry"
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button variant="neon" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/30">
          <p className="text-foreground/60">
            © 2024 Sarah Chen. All rights reserved. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
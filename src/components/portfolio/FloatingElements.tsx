const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/6 right-1/4 w-4 h-4 border-2 border-primary/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 border-2 border-neon-purple/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-neon-pink/40 rotate-12 animate-float" style={{ animationDelay: '5s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neon-blue/5 to-transparent"></div>
    </div>
  );
};

export default FloatingElements;
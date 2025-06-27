import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background"
    >
      {/* Starry Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none z-0" />

      {/* Trapezium/Polygon Shapes */}
      <div className="absolute -top-10 -left-16 w-64 h-64 bg-primary rotate-[20deg] skew-y-6 opacity-10 shadow-2xl z-0"></div>
      <div className="absolute top-20 right-[-100px] w-80 h-80 bg-indigo-500 rotate-45 opacity-10 skew-x-12 shadow-2xl z-0"></div>
      <div className="absolute bottom-[-100px] left-[40%] w-72 h-72 bg-purple-400 skew-y-12 rotate-[30deg] opacity-10 shadow-xl z-0"></div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/projects/hero-image.jpg"
            alt="Hero"
            className="rounded-xl w-72 h-72 object-cover shadow-[0_20px_60px_-15px_rgba(80,63,205,0.5)]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Varun
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Kumar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I am a motivated and detail-oriented fresher seeking to build a successful career by leveraging my strong foundation in modern technologies. I am committed to continuous learning and dedicated to contributing meaningfully through innovative and efficient solutions.
          </p>


          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/Varun-Kumar-Resume.pdf"
              download
              className="cosmic-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

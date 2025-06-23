import { Briefcase, Code, User } from "lucide-react";
import { BackgroundShapes } from "@/components/BackgroundShapes";

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-background">
      <BackgroundShapes />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Area */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm Varun Kumar, a B.Tech graduate from GITAM University, passionate about technology and innovation.
              I enjoy exploring modern web development tools and have built multiple projects using React.js and Next.js.
            </p>

            <p className="text-muted-foreground">
              I'm also familiar with DevOps fundamentals and love automating workflows. I'm actively looking for opportunities 
              to grow as a developer, contribute to impactful projects, and continuously upskill myself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Varun-Kumar-Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Built responsive websites using React.js, Next.js, HTML5, CSS3, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps Basics</h4>
                  <p className="text-muted-foreground">
                    Basic understanding of CI/CD, version control, and automation using Git, GitHub, and tools like Jenkins or Docker.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Teamwork & Learning</h4>
                  <p className="text-muted-foreground">
                    Enthusiastic about working in collaborative environments and constantly improving through hands-on experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

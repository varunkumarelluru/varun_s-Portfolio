import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { BackgroundShapes } from "@/components/BackgroundShapes";
import { useTheme } from "@/hooks/useTheme";

const projects = [
  {
    id: 1,
    title: "Online Fuel Delivery",
    description: "A platform for seamless online fuel delivery service, allowing customers to place orders and track deliveries.",
    image: "/projects/fuelDelivery.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/varunkumarelluru/FuelDelivery.git",
  },
  {
    id: 2,
    title: "Doctor Appointment Platform",
    description: "A comprehensive appointment scheduling platform for doctors, enabling patients to book, manage, and track medical appointments.",
    image: "/projects/appointmentPlatform.png",
    tags: ["TypeScript", "React", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/varunkumarelluru/Appointment-Platform.git",
  },
  {
    id: 3,
    title: "Mock Interview Platform",
    description: "A platform for mock interviews, where users can schedule and conduct interview sessions to practice for real-world job opportunities.",
    image: "/projects/mockInterviewPlatform.png",
    tags: ["React", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/varunkumarelluru/Ai_Interview_Agent.git",
  }
  
  
];

export const ProjectsSection = () => {
  const theme = useTheme();
  return (
    <section id="projects" className="relative py-20 bg-background">
      {theme === "light" && <BackgroundShapes />}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/varunkumarelluru"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

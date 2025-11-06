import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Deizel - Herbal Products eCommerce",
      description: "Full-stack e-commerce website for herbal products with shopping cart, payment integration, and admin dashboard.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
      github: "https://github.com/DorathyLesly/Deizel.git",
      live: "https://dorathylesly.github.io/Deizel/",
    },
    {
      title: "Medical Booking App",
      description: "Java desktop application for medical appointment booking with database integration and user management.",
      tech: ["Java", "NetBeans", "MySQL"],
      github: "#",
    },
    {
      title: "Student Record Management System",
      description: "Comprehensive platform for managing student records with real-time updates and data analytics.",
      tech: ["Java", "MongoDB", "AJAX"],
      github: "https://github.com/DorathyLesly/Student-Management-System.git",
    },
    {
      title: "KIDDO - Kids Products eCommerce",
      description: "E-commerce platform specializing in children's products with secure payment processing.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "#",
    },
    {
      title: "Wan Lanka - Tourism Website",
      description: "Full-stack tourism web application showcasing Sri Lankan destinations with booking capabilities.",
      tech: ["PHP", "Laravel", "MySQL", "React"],
      github: "https://github.com/WanLanka",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel p-6 glass-panel-hover group"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-secondary text-xs rounded text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start md:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">WELCOME TO MY WORLD</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="text-gradient">Dorathy Lesly</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90">
                Software Engineer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Innovating with Code | Full-Stack Developer | Passionate about AI and Software Engineering
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-hover" asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="glass-panel glass-panel-hover" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-3 rounded-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-3 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dorilesly02@gmail.com"
                className="glass-panel glass-panel-hover p-3 rounded-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start md:pt-0">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={profileImg}
                alt="Dorathy Lesly Sureshkumar - Software Engineer"
                className="relative rounded-full w-64 h-64 object-cover border-4 border-primary/30 glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
const Hero = () => {
  return (
    <section
  id="home"
  className="min-h-[85vh] flex items-start justify-center px-4 md:px-8 pt-12 md:pt-16 pb-0 relative"
>
  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center mt-8 md:mt-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-primary font-medium pop-in">WELCOME TO MY WORLD</p>
          <h1 className="text-5xl md:text-6xl font-bold pop-in pop-in-delay-1">
            Hi, I'm <span className="text-gradient">Dorathy Lesly</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 pop-in pop-in-delay-2">
            Software Engineer
          </h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-lg pop-in pop-in-delay-3">
          Innovating with Code | Full-Stack Developer | Passionate about AI and Software Engineering
        </p>

        <div className="flex flex-wrap gap-4 pop-in pop-in-delay-3">
          <Button size="lg" className="glow-hover" asChild>
            <a href="#projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Force download CV */}
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-95" asChild>
            <a href="/resume/L.S.Dorathy_Resume_updated1.pdf" download="L.S.Dorathy_Resume_updated1.pdf" aria-label="Download resume">
              Download CV
            </a>
          </Button>

          <Button size="lg" variant="outline" className="glass-panel glass-panel-hover" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex gap-4 pt-4 pop-in pop-in-delay-4">
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

      <div className="flex justify-center">
          <div className="relative w-80 h-80 pop-in pop-in-delay-2">
            {/* Enhanced outer glow */}
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full animate-pulse-slow" />
            {/* White border separation */}
            <div className="absolute inset-2 bg-white rounded-full"></div>
            {/* Profile image with thicker border */}
            <img
              src={profileImg}
              alt="Dorathy Lesly Sureshkumar - Software Engineer"
              className="relative rounded-full w-80 h-80 object-cover border-[6px] border-primary glow hover:border-blue-400 transition-colors duration-300"
            />
          </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;

import { MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="glass-panel p-8 md:p-12 space-y-6">
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Jaffna, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>SLIIT - BSc Computer Science</span>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed text-foreground/90">
            As a Computer Science student at the Sri Lanka Institute of Information Technology (SLIIT), 
            I am driven by curiosity and the desire to create impactful technology solutions. I have a 
            strong interest in AI, Software Engineering, and software development, which I explore through 
            hands-on projects and a creative approach to problem-solving.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90">
            Proficient in multiple languages and frameworks, I build full-stack solutions that are both 
            functional and secure. My journey in technology is fueled by continuous learning and a passion 
            for innovation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="achievement-card group">
              <div className="achievement-content">
                <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">1+</div>
                <div className="text-sm text-blue-100/80">Years Experience</div>
                <div className="achievement-glow"></div>
              </div>
            </div>
            <div className="achievement-card group">
              <div className="achievement-content">
                <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">5+</div>
                <div className="text-sm text-blue-100/80">Projects Completed</div>
                <div className="achievement-glow"></div>
              </div>
            </div>
            <div className="achievement-card group">
              <div className="achievement-content">
                <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">8+</div>
                <div className="text-sm text-blue-100/80">Certifications</div>
                <div className="achievement-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

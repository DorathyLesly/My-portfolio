import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Quality Assurance Engineer",
      company: "Code Vita",
      location: "Jaffna, Sri Lanka",
      period: "July 2025 - Present",
      description: "Leading quality assurance initiatives and ensuring software reliability through comprehensive testing strategies.",
    },
    {
      title: "IT Technician",
      company: "Rural Infrastructure Development Project in Emerging Regions (RIDEP)",
      location: "Jaffna, Sri Lanka",
      period: "June 2021 - December 2021",
      description: "Provided IT support, troubleshooting, and network maintenance. Assisted with data management and technology deployment.",
    },
  ];

  const education = {
    degree: "BSc (Hons) in Computer Science in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "Expected Graduation: 2027",
  };

  return (
    <section id="experience" className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h3>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-panel p-6 glass-panel-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                    <p className="text-foreground/90 font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Education
          </h3>
          
          <div className="glass-panel p-6">
            <h4 className="text-xl font-semibold text-primary mb-2">{education.degree}</h4>
            <p className="text-foreground/90 font-medium">{education.institution}</p>
            <p className="text-sm text-muted-foreground mt-2">{education.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Quality Assurance Engineer",
      company: "Code Vita",
      logo: "/projects/codevita-logo.jpeg", // Add the actual path to the company logo
      location: "Jaffna, Sri Lanka",
      period: "July 2025 - Present",
      description:
        "Leading quality assurance initiatives and ensuring software reliability through comprehensive testing strategies.",
    },
    {
      title: "IT Technician",
      company: "Rural Infrastructure Development Project in Emerging Regions (RIDEP)",
      logo: "/projects/ridep-logo.jpg", // Add the actual path to the company logo
      location: "Jaffna, Sri Lanka",
      period: "June 2021 - December 2021",
      description:
        "Provided IT support, troubleshooting, and network maintenance. Assisted with data management and technology deployment.",
    },
  ];

  const education = [
    {
      degree: "BSc (Hons) in Computer Science in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "Expected Graduation: 2027",
      image: "/education/northern uni.jpg", // 🏫 replace with your actual university image
    },
    {
      degree: "Secondary Education (Grade 6 - Advanced Level)",
      institution: "Chundikuli Girls' College",
      period: "Passed Out: 2020",
      image: "/education/chundikuli.jpeg", // 🎓 replace with your actual school image
    },
  ];

  return (
    <section id="experience" className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h3>

          <div className="relative pl-8 md:pl-12">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] md:left-[15px] top-2 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[23px] md:-left-[27px] top-2 w-6 h-6 rounded-full border-4 border-background bg-primary shadow-md" />

                  <div className="glass-panel p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-20 h-20 object-contain rounded-lg bg-white/5 p-2 shadow-md"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-primary">
                              {exp.title}
                            </h4>
                            <p className="text-foreground/90 font-medium mt-1">
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {exp.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-primary/80 mt-2 md:mt-0 font-medium">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-foreground/80">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>

          <div className="relative pl-8 md:pl-12">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] md:left-[15px] top-2 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[23px] md:-left-[27px] top-2 w-6 h-6 rounded-full border-4 border-background bg-primary shadow-md" />

                  <div className="glass-panel p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      {/* Education Image */}
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-full md:w-40 h-32 object-cover rounded-lg shadow-md"
                      />

                      {/* Education Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="text-xl font-semibold text-primary">
                              {edu.degree}
                            </h4>
                            <p className="text-foreground/90 font-medium mt-1">
                              {edu.institution}
                            </p>
                          </div>
                          <p className="text-sm text-primary/80 mt-2 md:mt-0 font-medium flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

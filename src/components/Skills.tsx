import { Code, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "C#", "Java", "JavaScript", "PHP", "Dart"],
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["Bootstrap", "Flutter", "React", "Laravel", "Livewire", "Apache", "jQuery"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["Firebase", "MongoDB", "MySQL", "Microsoft SQL Server"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Teamwork", "Adaptability", "Problem-solving", "Continuous Learning"],
    },
  ];

  const tools = [
    "Canva", "Figma", "Git", "GitHub", "GitLab", "Jira", "Android Studio"
  ];

  return (
    <section id="skills" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="glass-panel p-6 glass-panel-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-sm rounded-full text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-4">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-primary/10 text-sm rounded-full text-foreground border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

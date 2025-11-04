import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "July 2025",
    },
    {
      title: "Introduction to Java",
      issuer: "Online Course",
      date: "July 2025",
    },
    {
      title: "Introduction to Prompt Engineering",
      issuer: "Online Course",
      date: "July 2025",
    },
    {
      title: "Code Fest Participation",
      issuer: "SLIIT",
      date: "2025",
    },
    {
      title: "Introduction to UI/UX",
      issuer: "Uki Technology School",
      date: "December 2024",
    },
    {
      title: "Codestorm 2.0 - Coding Competition",
      issuer: "SLIIT Northern University",
      date: "August 2024",
    },
    {
      title: "Diploma in ICTT (NVQ-4)",
      issuer: "NAITA",
      date: "December 2022",
    },
  ];

  return (
    <section id="certifications" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Certifications</span> & Achievements
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-panel p-6 glass-panel-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import { Globe, Code2, Cog, TestTube } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and modern web applications using the latest technologies and frameworks.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building complete solutions from database design to user interface implementation.",
    },
    {
      icon: Cog,
      title: "Software Engineering",
      description: "Developing robust and scalable software solutions tailored to your business needs.",
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Ensuring software reliability through comprehensive testing strategies and best practices.",
    },
  ];

  return (
    <section id="services" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Services</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 text-center glass-panel-hover group"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "July 2025",
      link: "https://www.linkedin.com/learning/certificates/6d78d82d464b4eff9722b72e73b6b52dfbd402ba9ce3736bf280fc611fbd560f",
      image: "/certificates/career essential.jpeg", // 🖼️ Replace with your actual image path
    },
    {
      title: "Introduction to Java",
      issuer: "Online Course",
      date: "July 2025",
      link: "https://www.sololearn.com/en/certificates/CC-JY5XMPSO",
      image: "/certificates/java.jpg",
    },
    {
      title: "Introduction to Prompt Engineering",
      issuer: "Online Course",
      date: "July 2025",
      link: "https://www.linkedin.com/in/dorathy-lesly-sureshkumar-b053b6268/details/certifications/",
      image: "/certificates/prompt engineering.jpg",
    },
    {
      title: "Code Fest Participation",
      issuer: "SLIIT",
      date: "2025",
      link: "https://www.linkedin.com/in/dorathy-lesly-sureshkumar-b053b6268/details/certifications/1760625860849/single-media-viewer/?profileId=ACoAAEGODbUBQ_H04uvtOog90NlBRA7JPEZT4L0",
      image: "/certificates/Code_X.jpg",
    },
    {
      title: "Introduction to UI/UX",
      issuer: "Uki Technology School",
      date: "December 2024",
      link: "https://www.linkedin.com/in/dorathy-lesly-sureshkumar-b053b6268/details/certifications/1751943705345/single-media-viewer/?profileId=ACoAAEGODbUBQ_H04uvtOog90NlBRA7JPEZT4L0",
      image: "/certificates/UKI.jpeg",
    },
    {
      title: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn",
      date: "July 2025",
      link: "https://www.linkedin.com/learning/certificates/7066c5c4b35fff43e728c38eb39e8ce464dd7f517904802099f13dae5cb3564c",
      image: "/certificates/Fundamental.jpeg",
    },
    {
      title: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn",
      date: "July 2025",
      link: "https://www.linkedin.com/learning/certificates/54829867b6842c4f0de584024230842b0bded84e10fd0f3387e03ff93fc1a1f2",
      image: "/certificates/Beyond.jpeg",
    },
    {
      title: "Introduction to Career Skills in Software Development",
      issuer: "LinkedIn",
      date: "July 2025",
      link: "https://www.linkedin.com/learning/certificates/d754ab709e93e572d91cff5d86ede98e4d3f7f03835c36c445567ea281aac3d1",
      image: "/certificates/introduction.jpeg",
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
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-panel overflow-hidden rounded-2xl glass-panel-hover group transition-transform hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-40 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

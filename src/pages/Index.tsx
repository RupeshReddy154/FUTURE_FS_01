import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ExternalLink, Briefcase, GraduationCap, Code, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const skills = {
    languages: ["Bash", "Java", "Python", "C/C++", "SQL(MySQL)", "NoSQL(MongoDB)", "JavaScript", "HTML/CSS"],
    frameworks: ["React", "Express.js", "FastAPI"],
    tools: ["Git", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"],
    libraries: ["pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Scikit-learn", "OpenCV", "BeautifulSoup"]
  };

  const projects = [
    {
      title: "Movie Recommendation System",
      tech: ["Python"],
      period: "October 2024",
      description: [
        "Developed a movie recommendation system using Python",
        "Implemented with various datasets",
        "Visualized GitHub data to show collaboration",
        "Used Celery and Redis for asynchronous tasks"
      ]
    },
    {
      title: "Fund Management System",
      tech: ["HTML/CSS", "React", "Node.js", "MongoDB"],
      period: "February 2025 – Present",
      description: [
        "Developed a Fund Management System to track and display the distribution of funds across various government sectors",
        "Designed and implemented a data visualization dashboard to provide real-time insights into sectoral fund allocation",
        "Utilized SQL databases and backend technologies to manage data flow, ensuring accurate and efficient reporting"
      ]
    }
  ];

  const certifications = [
    "Python (Basic), HackerRank",
    "Fundamentals of Cybersecurity, Google",
    "Play It Safe: Manage Security Risks, Google",
    "Assets, Threats and Vulnerabilities, Google",
    "Tools of the Trade: Linux and SQL, Google",
    "Connect and protect: Networks and Network Security, Google"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        <div className="container mx-auto px-4 z-10 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Rupesh Reddy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Information Technology Student & Machine Learning Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building intelligent systems and crafting elegant solutions to complex problems
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/RupeshReddy154" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/rupesh-reddy-undefined-8a3b4b335/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rupeshreddy136@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate Information Technology student at Chaitanya Bharathi Institute of Technology, 
              specializing in Machine Learning and Full-Stack Development. With hands-on experience in building 
              intelligent systems and modern web applications, I strive to create impactful solutions that bridge 
              the gap between technology and real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <GraduationCap className="inline-block mr-3 mb-1" />
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Chaitanya Bharathi Institute of Technology</CardTitle>
                <CardDescription className="text-base">
                  B.E. in Information Technology | August 2023 – Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hyderabad, Telangana</p>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Sri Chaitanya Junior College</CardTitle>
                <CardDescription className="text-base">
                  Intermediate, MPC | 2021 – 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hyderabad, Telangana</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Briefcase className="inline-block mr-3 mb-1" />
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-2xl">Machine Learning Intern</CardTitle>
                    <CardDescription className="text-base mt-2">
                      SkillCraft Technology | Hyderabad, Telangana
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">June 2024 – July 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Developed a Regression model to predict House Pricing, improving prediction accuracy by 80 percent</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implemented K-Means clustering for data segmentation, optimizing cluster performance using the Elbow method</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Built a Support Vector Machine (SVM) classifier for Binary image classification</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Applied Handwritten Digit Recognition using deep learning models, achieving high accuracy in identifying characters from images</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Code className="inline-block mr-3 mb-1" />
            Projects
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary transition-all duration-300 hover:glow-primary">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle>Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle>Developer Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle>Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Award className="inline-block mr-3 mb-1" />
            Certifications
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <p className="text-sm">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, projects, or collaborations. 
              Feel free to reach out through any of the channels below.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:rupeshreddy136@gmail.com" className="hover:text-primary transition-colors">
                    rupeshreddy136@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="gradient-card border-border hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919347542435" className="hover:text-primary transition-colors">
                    +91 9347542435
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Rupesh Reddy. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/RupeshReddy154" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/rupesh-reddy-undefined-8a3b4b335/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:rupeshreddy136@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

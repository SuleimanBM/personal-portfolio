import { Server, Cloud, Container, Terminal as TerminalIcon } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "text-terminal",
    skills: ["Node.js", "Express", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Caching", "Redis", "REST APIs", "Rate Limiting"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "text-accent",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS CloudWatch", "IAM"],
  },
  {
    title: "DevOps",
    icon: Container,
    color: "text-terminal",
    skills: ["Docker", "Terraform", "GitHub Actions", "CI/CD", "Nginx"],
  },
  {
    title: "Systems",
    icon: TerminalIcon,
    color: "text-accent",
    skills: ["Linux", "Bash", "Git", "SSH", "System Design", "Networking"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <p className="font-mono text-terminal text-sm mb-2">// tech stack</p> */}
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle mx-auto">
              Tools and technologies I work with to build reliable backend systems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="terminal-window group"
              >
                <div className="terminal-header">
                  <div className="terminal-dot dot-close" />
                  <div className="terminal-dot dot-minimize" />
                  <div className="terminal-dot dot-maximize" />
                  <div className="ml-3 flex items-center gap-2">
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <span className="text-xs text-muted-foreground font-mono">
                      {category.title.toLowerCase()}.sh
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-terminal font-mono text-sm">$</span>
                    <span className="font-mono text-sm text-muted-foreground">
                      ls -la ./skills/{category.title.toLowerCase()}/
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="skill-badge"
                        style={{ animationDelay: `${catIndex * 0.1 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Note */}
          {/* <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-card border border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-terminal" />
                <span className="text-sm text-muted-foreground font-mono">Primary Focus</span>
              </div>
              <span className="text-muted-foreground/50">|</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground font-mono">Growing Skills</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

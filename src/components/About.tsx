import { Server, Cloud, Terminal, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Designing and building scalable APIs, microservices, and data-intensive systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Growing expertise in AWS services, cloud architecture, and serverless solutions.",
  },
  {
    icon: Terminal,
    title: "DevOps Practices",
    description: "Embracing CI/CD, containerization, and infrastructure as code for reliable deployments.",
  },
  {
    icon: Cpu,
    title: "System Design",
    description: "Thinking in distributed systems, focusing on scalability and fault tolerance.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <p className="font-mono text-terminal text-sm mb-2">// about me</p> */}
            <h2 className="section-title">
              Building Systems That Scale
            </h2>
            <p className="section-subtitle mx-auto">
              A backend-focused engineer with a growing passion for cloud and DevOps.
            </p>
          </div>

          {/* Main Content */}
          <div className="terminal-window mb-12">
            <div className="terminal-header">
              <div className="terminal-dot dot-close" />
              <div className="terminal-dot dot-minimize" />
              <div className="terminal-dot dot-maximize" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">about.md</span>
            </div>
            <div className="terminal-body space-y-4 text-base leading-relaxed">
              <p>
                I'm a <span className="text-terminal font-medium">mid-level Backend Engineer</span> with 
                solid experience building production-grade APIs, designing database schemas, and 
                implementing business logic that powers real applications.
              </p>
              <p>
                My journey into <span className="text-accent font-medium">Cloud & DevOps</span> started 
                from wanting to understand the full lifecycle of the systems I build. While I'm still 
                at a junior level in this domain, I'm actively learning AWS, Docker, Terraform, and 
                the principles of modern infrastructure.
              </p>
              <p className="">
                I believe the best backend engineers understand not just how to write code, but how 
                their code runs, scales, and fails in production. That's the mindset I bring to every 
                project.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-border bg-card hover:border-terminal/50 
                         hover:glow-sm transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-secondary group-hover:bg-terminal/10 transition-colors">
                    <item.icon className="w-6 h-6 text-terminal" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold mb-2 group-hover:text-terminal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

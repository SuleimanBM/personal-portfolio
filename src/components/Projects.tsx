import { ExternalLink, Github, Server, Database, Cloud, Container } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API Platform",
    description: "High-performance REST API handling 10K+ daily requests. Built with focus on caching strategies and database optimization.",
    problem: "Legacy monolith couldn't handle traffic spikes during sales events.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    icons: [Server, Database],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Real-time Notification Service",
    description: "Microservice for push notifications with WebSocket support. Processes 50K+ messages daily with 99.9% delivery rate.",
    problem: "Users weren't receiving timely updates across multiple channels.",
    stack: ["NestJS", "Redis Pub/Sub", "WebSockets", "AWS SQS"],
    icons: [Server, Cloud],
    github: "https://github.com",
  },
  {
    title: "Infrastructure as Code Templates",
    description: "Reusable Terraform modules for AWS infrastructure. Standardized deployments across development, staging, and production.",
    problem: "Manual infrastructure setup was error-prone and inconsistent.",
    stack: ["Terraform", "AWS", "GitHub Actions", "Docker"],
    icons: [Cloud, Container],
    github: "https://github.com",
  },
  {
    title: "Log Aggregation Pipeline",
    description: "Centralized logging solution collecting logs from 20+ microservices. Custom dashboards for monitoring and alerting.",
    problem: "Debugging issues across services was time-consuming without unified logs.",
    stack: ["Node.js", "Elasticsearch", "Docker", "AWS CloudWatch"],
    icons: [Database, Server],
    github: "https://github.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <p className="font-mono text-terminal text-sm mb-2">// featured work</p> */}
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto">
              A selection of backend and infrastructure projects I've built.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card group"
              >
                {/* Project Icons */}
                <div className="flex items-center gap-2 mb-4">
                  {project.icons.map((Icon, i) => (
                    <div key={i} className="p-2 rounded-md bg-secondary">
                      <Icon className="w-5 h-5 text-terminal" />
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-mono font-semibold text-xl mb-3 group-hover:text-terminal transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved */}
                <div className="mb-4 p-3 rounded-md bg-secondary/50 border-l-2 border-terminal">
                  <p className="text-sm">
                    <span className="text-terminal font-mono font-medium">Problem: </span>
                    <span className="text-muted-foreground">{project.problem}</span>
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-code-bg text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground 
                             hover:text-terminal transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground 
                               hover:text-terminal transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/SuleimanBM/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-secondary/50
                       font-mono text-sm rounded-md hover:border-terminal/50 hover:text-terminal 
                       transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

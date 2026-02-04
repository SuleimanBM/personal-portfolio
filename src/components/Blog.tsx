import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "Building Scalable APIs: Lessons from Production",
    excerpt: "Key patterns I've learned for designing APIs that can handle growth without major rewrites.",
    date: "2025-10-15",
    readTime: "8 min",
    tags: ["Backend", "API Design"],
    slug: "#",
  },
  {
    title: "My First Encounter with Terraform",
    excerpt: "From manual deployments to infrastructure as code: a junior DevOps journey.",
    date: "2026-01-08",
    readTime: "6 min",
    tags: ["Terraform", "AWS"],
    slug: "#",
  },
  {
    title: "Docker for Backend Developers: A Practical Guide",
    excerpt: "Containerizing Node.js applications with production-ready best practices.",
    date: "2025-12-20",
    readTime: "10 min",
    tags: ["Docker", "DevOps"],
    slug: "#",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* <p className="font-mono text-terminal text-sm mb-2">// latest posts</p> */}
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle mx-auto">
              Sharing what I learn about backend engineering, cloud, and DevOps.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="terminal-window group"
              >
                <div className="terminal-header">
                  <div className="terminal-dot dot-close" />
                  <div className="terminal-dot dot-minimize" />
                  <div className="terminal-dot dot-maximize" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    {post.date}.md
                  </span>
                </div>
                <a href={post.slug} className="block p-6 hover:bg-secondary/30 transition-colors">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono 
                                 rounded bg-terminal/10 text-terminal"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-mono font-semibold text-xl mb-3 group-hover:text-terminal transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-mono text-terminal 
                                   opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card
                       font-mono text-sm rounded-md hover:border-terminal/50 hover:text-terminal 
                       transition-all duration-300"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

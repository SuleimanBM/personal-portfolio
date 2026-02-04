import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { TerminalCursor } from "./TerminalCursor";

export const Hero = () => {
  return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
		>
			{/* Background decorations */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terminal/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4 pt-20 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* Terminal prompt */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
						<span className="w-2 h-2 rounded-full bg-terminal animate-pulse-glow" />
						<span className="font-mono text-sm text-muted-foreground">
							available for opportunities
						</span>
					</div>

					{/* Name with terminal styling */}
					<div
						className="terminal-window max-w-2xl mx-auto mb-8 animate-fade-in"
						style={{animationDelay: "0.1s"}}
					>
						<div className="terminal-header">
							<div className="terminal-dot dot-close" />
							<div className="terminal-dot dot-minimize" />
							<div className="terminal-dot dot-maximize" />
							<span className="ml-2 text-xs text-muted-foreground font-mono">
								whoami
							</span>
						</div>
						<div className="terminal-body">
							<p className="text-muted-foreground">
								<span className="text-terminal">$</span> whoami
							</p>
							<p className="text-xl md:text-2xl mt-2">
								<span className="text-terminal font-semibold">
									Suleiman Baba Mohammed
								</span>
							</p>
							<p className="text-muted-foreground mt-1">
								<span className="text-terminal">$</span> cat
								roles.txt
							</p>
							<p className="text-lg md:text-xl mt-2 text-accent">
								Backend {" "}
								<span className="text-muted-foreground">|</span>{" "}
								Cloud{" "}
								<span className="text-muted-foreground">|</span>{" "}
								DevOps
								<TerminalCursor />
							</p>
						</div>
					</div>

					{/* Tagline */}
					<p
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
						style={{animationDelay: "0.2s"}}
					>
						Building scalable systems and robust APIs. Passionate
						about infrastructure, automation, and the art of backend
						engineering.
					</p>

					{/* CTA Buttons */}
					<div
						className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in"
						style={{animationDelay: "0.3s"}}
					>
						<a
							href="#projects"
							className="inline-flex items-center gap-2 px-6 py-3 bg-terminal text-primary-foreground 
                       font-mono font-medium rounded-md hover:glow-md transition-all duration-300"
						>
							View Projects
						</a>
						<a
							href="#contact"
							className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-secondary/50
                       font-mono font-medium rounded-md hover:border-terminal/50 hover:text-terminal 
                       transition-all duration-300"
						>
							Get in Touch
						</a>
					</div>

					{/* Social Links */}
					<div
						className="flex items-center justify-center gap-4 animate-fade-in"
						style={{animationDelay: "0.4s"}}
					>
						<a
							href="https://github.com/SuleimanBM/"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-md border border-border bg-secondary/30 hover:border-terminal/50 
                       hover:text-terminal transition-all duration-300"
							aria-label="GitHub"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href="https://www.linkedin.com/in/suleiman-baba-mohammed-0179a824b"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-md border border-border bg-secondary/30 hover:border-terminal/50 
                       hover:text-terminal transition-all duration-300"
							aria-label="LinkedIn"
						>
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							href="mailto:suleimanbamo@gmail.com"
							className="p-3 rounded-md border border-border bg-secondary/30 hover:border-terminal/50 
                       hover:text-terminal transition-all duration-300"
							aria-label="Email"
						>
							<Mail className="w-5 h-5" />
						</a>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<a href="#about" aria-label="Scroll to about section">
						<ChevronDown className="w-6 h-6 text-muted-foreground hover:text-terminal transition-colors" />
					</a>
				</div>
			</div>
		</section>
  );
};

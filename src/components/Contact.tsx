import { useState } from "react";
import { Send, Mail, Github, Linkedin, Terminal } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
		<section id="contact" className="py-24 relative">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-16">
						{/* <p className="font-mono text-terminal text-sm mb-2">// get in touch</p> */}
						<h2 className="section-title">Contact</h2>
						<p className="section-subtitle mx-auto">
							Have a project in mind or want to chat? Send me a
							message.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
						{/* Contact Info */}
						<div className="lg:col-span-2 space-y-6">
							<div className="terminal-window">
								<div className="terminal-header">
									<div className="terminal-dot dot-close" />
									<div className="terminal-dot dot-minimize" />
									<div className="terminal-dot dot-maximize" />
									<span className="ml-2 text-xs text-muted-foreground font-mono">
										contact.sh
									</span>
								</div>
								<div className="terminal-body space-y-3">
									<p className="text-muted-foreground">
										<span className="text-terminal">$</span>{" "}
										cat contact_info.txt
									</p>
									<div className="space-y-2 pl-4">
										<p className="font-mono text-sm">
											<span className="text-muted-foreground">
												email:
											</span>{" "}
											<span className="text-foreground">
												suleimanbamo@gmail.com
											</span>
										</p>
										<p className="font-mono text-sm">
											<span className="text-muted-foreground">
												location:
											</span>{" "}
											<span className="text-foreground">
												Accra, Ghana
											</span>
										</p>
										<p className="font-mono text-sm">
											<span className="text-muted-foreground">
												status:
											</span>{" "}
											<span className="text-terminal">
												Open to opportunities
											</span>
										</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="flex items-center gap-4">
								<a
									href="mailto:suleimanbamo@gmail.com"
									className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-border 
                           bg-secondary/50 hover:border-terminal/50 hover:text-terminal transition-all duration-300"
								>
									<Mail className="w-5 h-5" />
									<span className="font-mono text-sm">
										Email
									</span>
								</a>
								<a
									href="https://github.com/SuleimanBM"
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-border 
                           bg-secondary/50 hover:border-terminal/50 hover:text-terminal transition-all duration-300"
								>
									<Github className="w-5 h-5" />
									<span className="font-mono text-sm">
										GitHub
									</span>
								</a>
								<a
									href="https://www.linkedin.com/in/suleiman-baba-mohammed-0179a824b?"
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center gap-2 p-3 rounded-md border border-border 
                           bg-secondary/50 hover:border-terminal/50 hover:text-terminal transition-all duration-300"
								>
									<Linkedin className="w-5 h-5" />
									<span className="font-mono text-sm">
										LinkedIn
									</span>
								</a>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-3">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="name"
											className="block font-mono text-sm mb-2 text-muted-foreground"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-md border border-border bg-card font-mono text-sm
                               focus:outline-none focus:border-terminal focus:ring-1 focus:ring-terminal/50
                               placeholder:text-muted-foreground/50 transition-all"
											placeholder="John Doe"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block font-mono text-sm mb-2 text-muted-foreground"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 rounded-md border border-border bg-card font-mono text-sm
                               focus:outline-none focus:border-terminal focus:ring-1 focus:ring-terminal/50
                               placeholder:text-muted-foreground/50 transition-all"
											placeholder="john@example.com"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block font-mono text-sm mb-2 text-muted-foreground"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-4 py-3 rounded-md border border-border bg-card font-mono text-sm
                             focus:outline-none focus:border-terminal focus:ring-1 focus:ring-terminal/50
                             placeholder:text-muted-foreground/50 transition-all resize-none"
										placeholder="Your message..."
									/>
								</div>

								{submitted && (
									<div className="flex items-center gap-2 p-3 rounded-md bg-terminal/10 border border-terminal/30">
										<Terminal className="w-5 h-5 text-terminal" />
										<span className="font-mono text-sm text-terminal">
											Message sent successfully!
										</span>
									</div>
								)}

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 
                           bg-terminal text-primary-foreground font-mono font-medium rounded-md 
                           hover:glow-md disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all duration-300"
								>
									{isSubmitting ? (
										<>
											<div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
											Sending...
										</>
									) : (
										<>
											<Send className="w-4 h-4" />
											Send Message
										</>
									)}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

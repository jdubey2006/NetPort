import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-16 px-4 md:px-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-6">
          ABOUT ME
        </h2>

        <p className="text-foreground/70 text-lg leading-relaxed mb-4">
          I'm second-year engineering student exploring the intersection of design, performance, and intelligent systems.
          For me, great software is like great cinema — it solves problems, tells a story, and leaves an impact.
          Currently building AI-driven and full-stack projects while continuously leveling up my skills.
        </p>

        <p className="text-foreground/70 text-lg leading-relaxed mb-8">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to music, or binge-watching the latest series.
        </p>

        <div id="contact" className="flex gap-3 flex-wrap">

          {/* Email Button */}
          <Button asChild variant="default" size="lg" className="gap-2 group">
            <a href="mailto:bobbydubey2104@gmail.com">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
          </Button>

          {/* GitHub Button */}
          <Button asChild variant="secondary" size="lg" className="gap-2 group">
            <a
              href="https://github.com/jdubey2006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
          </Button>

          {/* LinkedIn Button */}
          <Button asChild variant="secondary" size="lg" className="gap-2 group">
            <a
              href="https://www.linkedin.com/in/jeet-dubey-a4770b346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </Button>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import heroBg from "@/assets/hero-bg.png";
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const HeroBanner = () => {
  const { displayed, done } = useTypingEffect("JEET DUBEY", 120, 600);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Developer workspace"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] hover:scale-105"
      />
      <div className="netflix-gradient-overlay absolute inset-0" />
      <div className="netflix-gradient-left absolute inset-0" />

      <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-12 pb-20 max-w-3xl">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2 animate-fade-in">
          N° 1 Developer Portfolio
        </p>
        <h1 className="font-display text-5xl md:text-8xl text-foreground text-shadow-heavy leading-none mb-4">
          {displayed}
          {!done && (
            <span className="inline-block w-1 h-[0.8em] bg-primary ml-1 animate-pulse" />
          )}
        </h1>
        <p
          className="text-foreground/80 text-base md:text-lg max-w-lg mb-6 animate-fade-in-up"
          style={{ animationDelay: "1.5s", opacity: 0 }}
        >
          A CSE-IOT student passionate about crafting innovative solutions and building impactful projects.
          Explore my work and let's connect!
        </p>
        <div
          className="flex gap-3 animate-fade-in-up"
          style={{ animationDelay: "1.8s", opacity: 0 }}
        >
          <Button
            variant="default"
            size="lg"
            className="gap-2 font-semibold group"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 font-semibold group"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Info className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

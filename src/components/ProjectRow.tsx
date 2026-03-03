import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Project {
  title: string;
  image: string;
  tags: string[];
  description: string;
}

interface ProjectRowProps {
  title: string;
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

const ProjectRow = ({ title, projects, onProjectClick }: ProjectRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, isVisible } = useScrollReveal();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={revealRef}
      className={`mb-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-2 px-4 md:px-12 mb-3">
        <h2 className="font-display text-xl md:text-2xl text-foreground tracking-wide">
          {title}
        </h2>
        <ChevronRight className="w-5 h-5 text-primary" />
      </div>

      <div className="relative group/row">
        {/* Scroll arrows */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-4 z-10 w-12 bg-gradient-to-r from-background to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-8 h-8 text-foreground" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-4 z-10 w-12 bg-gradient-to-l from-background to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-8 h-8 text-foreground" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="netflix-row"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="netflix-card group cursor-pointer"
              onClick={() => onProjectClick?.(project)}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="font-display text-lg text-foreground tracking-wide">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-primary/20 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectRow;

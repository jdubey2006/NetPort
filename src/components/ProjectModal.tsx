import { X, ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface Project {
  title: string;
  image: string;
  tags: string[];
  description: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-sm bg-card border border-border shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="netflix-gradient-overlay absolute inset-0" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-wide mb-3">
              {project.title}
            </h2>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="gap-2">
                <Play className="w-4 h-4 fill-current" /> Live Demo
              </Button>
              <Button variant="secondary" size="sm" className="gap-2">
                <Github className="w-4 h-4" /> Source Code
              </Button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-5">
          <p className="text-foreground/80 text-base leading-relaxed">
            {project.description}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            This project showcases modern web development practices including responsive design,
            performance optimization, and clean architecture. Built with attention to detail
            and a focus on user experience.
          </p>

          <div>
            <h4 className="font-display text-lg text-foreground tracking-wide mb-2">TECH STACK</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1.5 rounded-sm bg-primary/15 text-primary font-medium border border-primary/20 hover:bg-primary/25 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { label: "Year", value: "2024" },
              { label: "Role", value: "Full-Stack" },
              { label: "Status", value: "Completed" },
            ].map((item) => (
              <div key={item.label} className="text-center p-3 rounded-sm bg-secondary/50">
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{item.label}</p>
                <p className="text-foreground font-semibold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

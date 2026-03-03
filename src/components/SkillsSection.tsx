import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 20 },
      { name: "TypeScript", level: 20 },
      { name: "Next.js", level: 15 },
      { name: "Tailwind CSS", level: 17 },
      { name: "Framer Motion", level: 12 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 35 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 20 },
      { name: "C++", level: 75 },
      { name: "Java", level: 50 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 75 },
      { name: "Docker", level: 0 },
      { name: "Figma", level: 8 },
      { name: "AWS", level: 6 },
      { name: "CI/CD", level: 2 },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "Machine Learning", level: 40 },
      { name: "DSA", level: 70 },
      { name: "Numpy", level: 20 },
      { name: "Pandas", level: 15 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-16 px-4 md:px-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-8">
        TOP SKILLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((group, gi) => (
          <div
            key={group.category}
            className="bg-card rounded-sm p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            style={{
              transitionDelay: isVisible ? `${gi * 150}ms` : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <h3 className="font-display text-xl text-primary tracking-wide mb-5">
              {group.category}
            </h3>
            <div className="space-y-4">
              {group.items.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-foreground/80">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${gi * 150 + si * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

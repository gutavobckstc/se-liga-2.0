import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, description, category, link, index }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-gradient-card border border-border rounded-lg p-6 md:p-8 shadow-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-primary text-xs uppercase tracking-widest font-medium">
          {category}
        </span>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-primary/80 group-hover:text-primary transition-colors">
        <span className="text-sm font-medium">Ver projeto</span>
        <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

export default ProjectCard;

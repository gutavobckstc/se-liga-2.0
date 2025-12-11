import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/gustavo",
    color: "hover:bg-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/gustavo",
    color: "hover:bg-[#333]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/gustavo",
    color: "hover:bg-[#e4405f]",
  },
  {
    name: "E-mail",
    icon: Mail,
    url: "mailto:gustavo@email.com",
    color: "hover:bg-primary",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
          Conecte-se
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
          Redes Sociais
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Entre em contato ou acompanhe meu trabalho através das minhas redes sociais e canais profissionais.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg transition-all duration-300 hover:border-transparent hover:text-foreground ${social.color} opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <social.icon className="w-5 h-5" />
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Residencial Alto da Colina",
    description: "Projeto estrutural de edifício residencial de 12 pavimentos com fundação em estacas e estrutura em concreto armado.",
    category: "Estrutural",
    link: "#",
  },
  {
    title: "Ponte Rio Verde",
    description: "Análise e dimensionamento de ponte em concreto protendido com vão livre de 45 metros sobre rio navegável.",
    category: "Infraestrutura",
    link: "#",
  },
  {
    title: "Centro Comercial Plaza",
    description: "Laudo técnico e retrofit estrutural de centro comercial com mais de 20 anos, incluindo reforço de pilares e vigas.",
    category: "Consultoria",
    link: "#",
  },
  {
    title: "Galpão Industrial Tech",
    description: "Projeto de galpão metálico de 5.000m² com ponte rolante de 10 toneladas para indústria metalúrgica.",
    category: "Industrial",
    link: "#",
  },
  {
    title: "Condomínio Jardins",
    description: "Gerenciamento de obras de condomínio horizontal com 48 unidades residenciais e área de lazer completa.",
    category: "Gerenciamento",
    link: "#",
  },
  {
    title: "Estação de Tratamento",
    description: "Projeto hidrossanitário de estação de tratamento de efluentes industriais com capacidade de 500m³/dia.",
    category: "Saneamento",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Portfólio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Projetos Desenvolvidos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi ao longo da minha trajetória profissional, 
            abrangendo diferentes áreas da engenharia civil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

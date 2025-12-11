import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-hero px-6">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4 opacity-0 animate-fade-up">
          Engenheiro Civil
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
          <span className="text-foreground">Gustavo</span>
        </h1>

        <div className="w-24 h-1 bg-primary mx-auto mb-8 opacity-0 animate-fade-up animation-delay-400" />

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up animation-delay-400">
          Transformando projetos em realidade através de soluções estruturais inovadoras 
          e sustentáveis. Comprometido com a excelência em cada detalhe construtivo.
        </p>

        <a 
          href="#projetos"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors opacity-0 animate-fade-up animation-delay-600"
        >
          <span className="text-sm uppercase tracking-wider">Ver Projetos</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default Hero;

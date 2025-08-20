const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Sobre Elena
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Com mais de 8 anos de experiência em fotografia, especializo-me em capturar
                a essência e autenticidade de cada momento. Minha paixão está em transformar
                instantes únicos em memórias atemporais.
              </p>
              <p>
                Trabalho principalmente com retratos, casamentos e ensaios lifestyle,
                sempre buscando a beleza natural e espontânea em cada sessão. Acredito
                que as melhores fotografias surgem quando as pessoas se sentem
                confortáveis e autênticas.
              </p>
              <p>
                Meu estilo combina técnica apurada com sensibilidade artística,
                utilizando luz natural sempre que possível para criar imagens
                elegantes e intemporais.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Especialidades
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Casamentos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Retratos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Lifestyle</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-golden rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Fashion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-card p-8 rounded-sm shadow-[var(--shadow-elegant)]">
              <blockquote className="text-2xl font-heading font-medium text-foreground italic mb-6 leading-relaxed">
                "A fotografia é a arte de capturar a alma de um momento e transformá-la em eternidade."
              </blockquote>
              <cite className="text-muted-foreground">— Elena Santos</cite>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-golden mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Sessões Realizadas</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-golden mb-2">8</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-golden mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
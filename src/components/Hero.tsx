import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-portrait.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elena Santos Photography - Professional Portrait"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/80 via-hero/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-hero-foreground mb-6 leading-tight">
            Capturando
            <span className="block text-golden font-light italic">
              Momentos Únicos
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-hero-foreground/90 mb-8 font-light">
            Fotógrafa especializada em retratos e momentos especiais que contam histórias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="#portfolio">Ver Portfólio</a>
            </Button>
            <Button asChild variant="outlineHero" size="lg">
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
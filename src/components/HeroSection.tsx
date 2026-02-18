import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(145_63%_40%/0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-section-dark/80" />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-heading font-semibold tracking-wider uppercase border border-primary-foreground/20">
            Método Comprovado
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight text-primary-foreground mb-6">
            Destrave seu Emagrecimento e Perca Peso de Forma{" "}
            <span className="text-accent">Saudável e Sustentável</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            Um método simples, prático e aplicável ao seu dia a dia para quem
            quer emagrecer com saúde e manter os resultados a longo prazo —{" "}
            <strong className="text-primary-foreground">sem dietas extremas e sem sofrimento.</strong>
          </p>
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-heading font-bold text-lg rounded-full animate-pulse-glow transition-all"
          >
            Quero Destravar Meu Emagrecimento Agora
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <p className="mt-4 text-primary-foreground/50 text-sm">
            🔒 Compra segura · Acesso imediato · Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

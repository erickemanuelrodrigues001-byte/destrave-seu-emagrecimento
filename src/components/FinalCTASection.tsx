import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-24 bg-[image:var(--hero-gradient)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(145_63%_32%/0.3),transparent_70%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground leading-tight mb-6">
            Está pronto para transformar seu{" "}
            <span className="text-accent">corpo</span> e sua{" "}
            <span className="text-accent">saúde</span>?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Comece hoje mesmo sua jornada de emagrecimento saudável e sustentável. 
            Milhares já desbloquearam seus resultados.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-accent text-accent-foreground font-heading font-bold text-xl rounded-full animate-pulse-glow transition-all"
          >
            SIM, EU QUERO DESTRAVAR MEU EMAGRECIMENTO
            <ArrowRight className="w-6 h-6" />
          </motion.a>
          <p className="mt-5 text-primary-foreground/40 text-sm">
            🔒 Compra segura · Acesso imediato · Garantia de 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;

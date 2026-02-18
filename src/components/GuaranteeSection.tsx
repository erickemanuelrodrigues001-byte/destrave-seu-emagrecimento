import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-card border-2 border-primary/20 rounded-2xl p-10"
        >
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base">
            Se você não gostar do curso por <strong className="text-foreground">qualquer motivo</strong>, 
            devolvemos <strong className="text-foreground">100% do seu investimento</strong>. Sem 
            perguntas, sem burocracia. O risco é todo nosso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

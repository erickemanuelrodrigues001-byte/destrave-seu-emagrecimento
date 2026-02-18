import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const targets = [
  "Homens e mulheres que querem emagrecer com saúde",
  "Pessoas que já tentaram dietas restritivas e não tiveram sucesso",
  "Quem quer perder gordura sem abrir mão totalmente do que gosta",
  "Pessoas ocupadas que precisam de algo prático e direto",
];

const TargetSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
              Para quem é
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-2">
              Este curso é para <span className="text-primary">você</span>?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {targets.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-body text-base">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;

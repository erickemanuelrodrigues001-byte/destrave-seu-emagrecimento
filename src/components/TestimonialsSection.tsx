import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana M.",
    text: "Eu já tinha tentado várias dietas, mas foi a primeira vez que consegui emagrecer sem sofrimento. O método é simples e funciona!",
  },
  {
    name: "Carlos R.",
    text: "Conteúdo simples e direto. Consegui aplicar tudo na minha rotina corrida. Já perdi 8kg em 2 meses.",
  },
  {
    name: "Fernanda S.",
    text: "Finalmente entendi como funciona o emagrecimento de verdade. Sem loucura, sem restrição absurda. Recomendo demais!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-section-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-heading font-bold text-sm tracking-widest uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mt-2">
            Quem já <span className="text-accent">transformou</span> sua vida
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="text-primary-foreground font-heading font-semibold text-sm">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

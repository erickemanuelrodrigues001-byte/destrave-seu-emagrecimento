import { motion } from "framer-motion";
import { Flame, Leaf, TrendingUp, Utensils, Calendar } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "Emagrecimento Saudável", desc: "Aprenda a perder peso de forma sustentável, sem prejudicar sua saúde." },
  { icon: Flame, title: "Metabolismo Acelerado", desc: "Entenda como acelerar seu metabolismo naturalmente com hábitos simples." },
  { icon: TrendingUp, title: "Sem Efeito Sanfona", desc: "Descubra como manter os resultados a longo prazo, sem voltar a engordar." },
  { icon: Utensils, title: "Sem Dietas Extremas", desc: "Organize sua alimentação sem cortar tudo que você gosta de comer." },
  { icon: Calendar, title: "Prático no Dia a Dia", desc: "Estratégias que cabem na sua rotina, mesmo com pouco tempo disponível." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-heading font-bold text-sm tracking-widest uppercase">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-2">
            O que você vai <span className="text-primary">conquistar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

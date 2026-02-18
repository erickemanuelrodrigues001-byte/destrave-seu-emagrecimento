import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const modules = [
  { num: 1, title: "Fundamentos do Emagrecimento Saudável", desc: "Entenda como seu corpo funciona e o que realmente faz você emagrecer de verdade." },
  { num: 2, title: "Alimentação Inteligente e Sustentável", desc: "Aprenda a montar refeições equilibradas sem complicação e sem cortar tudo." },
  { num: 3, title: "Estratégias para Acelerar Resultados", desc: "Técnicas comprovadas para potencializar sua perda de peso de forma natural." },
  { num: 4, title: "Controle Emocional e Consistência", desc: "Domine a fome emocional e construa hábitos que duram para sempre." },
  { num: 5, title: "Plano Prático Aplicável ao Dia a Dia", desc: "Um plano de ação completo para você começar a aplicar imediatamente." },
];

const ModulesSection = () => {
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
            Conteúdo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-2">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-5 bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-heading font-bold text-lg">
                {m.num}
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;

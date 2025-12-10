import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Diamond, Hammer, Shield } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const pillars = [
  {
    icon: Palette,
    title: "Design Autoral",
    description:
      "Projetos únicos, criados para refletir sua personalidade e estilo de vida com exclusividade absoluta.",
  },
  {
    icon: Diamond,
    title: "Materiais Nobres",
    description:
      "Seleção rigorosa de madeiras, lâminas e ferragens de padrão internacional para garantir excelência.",
  },
  {
    icon: Hammer,
    title: "Precisão Artesanal",
    description:
      "Acabamento impecável, fruto da união entre a tradição da marcenaria e a tecnologia de ponta.",
  },
  {
    icon: Shield,
    title: "Garantia Premium",
    description:
      "Compromisso total com a qualidade e durabilidade, assegurado por garantia estendida em todos os projetos.",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group text-center md:text-left"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
          <pillar.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-xl font-serif text-cream mb-3 group-hover:text-primary transition-colors duration-300">
            {pillar.title}
          </h3>
          <p className="text-cream-muted text-sm leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function EssenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="essencia" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-24"
        >
          <div className="section-divider mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif text-cream mb-6">
            A Assinatura <span className="text-gradient-gold">Krion</span>
          </h2>
          <p className="text-xl text-cream-muted">
            Excelência em Cada Detalhe
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, PenTool, CheckCircle, Hammer, Sparkles, Truck } from "lucide-react";

const stepVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Briefing",
    description: "Visita técnica para entender suas necessidades, analisar o espaço e definir o estilo ideal para seu projeto.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Projeto 3D",
    description: "Modelagem parametrizada com renderings em alta definição para visualização realista de cada detalhe.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Aprovação",
    description: "Apresentação de amostras físicas de materiais, ajustes finos e aprovação final do projeto.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Execução",
    description: "Fabricação com madeiras certificadas, ferragens premium e acompanhamento rigoroso de qualidade.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Toque Final",
    description: "Acabamento artesanal, tratamentos especiais e inspeção minuciosa de cada componente.",
  },
  {
    number: "06",
    icon: Truck,
    title: "Entrega",
    description: "Instalação profissional por equipe especializada e orientação completa de uso e conservação.",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="section-divider mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif text-cream mb-6">
            Nosso <span className="text-gradient-gold">Processo</span>
          </h2>
          <p className="text-cream-muted max-w-2xl mx-auto">
            Do primeiro contato à entrega final, cada etapa é conduzida com atenção
            aos detalhes e compromisso com a excelência.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-charcoal-light p-8 hover:bg-charcoal transition-colors duration-500"
            >
              {/* Step Number */}
              <span className="absolute top-6 right-6 text-5xl font-serif text-primary/20 group-hover:text-primary/40 transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 mb-6">
                <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-cream mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-cream-muted text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Line (hidden on last column) */}
              {index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-primary/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

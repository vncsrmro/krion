import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Award, Shield } from "lucide-react";
import woodSamples from "@/assets/wood-samples.jpg";

const materials = [
  {
    icon: Leaf,
    title: "Madeiras de Reflorestamento",
    description: "Utilizamos exclusivamente madeiras de origem sustentável, com certificação de manejo florestal responsável.",
  },
  {
    icon: Award,
    title: "Chapas Nobres FSC",
    description: "MDF e laminados de alta densidade com certificação FSC, garantindo qualidade e responsabilidade ambiental.",
  },
  {
    icon: Shield,
    title: "Acabamentos Ecológicos",
    description: "Vernizes e lacas à base d'água, óleos naturais e tintas com baixa emissão de VOC para sua saúde.",
  },
];

export function MaterialsSection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-charcoal-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-divider mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif text-cream mb-6">
              Materiais <span className="text-gradient-gold">Premium</span>
            </h2>
            <p className="text-cream-muted leading-relaxed mb-10">
              A seleção de materiais é fundamental para a longevidade e beleza de cada
              projeto. Trabalhamos apenas com fornecedores certificados e insumos de
              primeira linha.
            </p>

            <div className="space-y-8">
              {materials.map((material, index) => (
                <motion.div
                  key={material.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <material.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-cream mb-1 group-hover:text-primary transition-colors">
                      {material.title}
                    </h3>
                    <p className="text-cream-muted text-sm leading-relaxed">
                      {material.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={woodSamples}
                alt="Amostras de madeiras nobres e acabamentos"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 md:p-8"
            >
              <span className="text-3xl md:text-4xl font-serif block">FSC</span>
              <span className="text-sm">Certificado</span>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import craftsmanWorking from "@/assets/craftsman-working.jpg";
import carpentryTools from "@/assets/carpentry-tools.jpg";
import woodJoinery from "@/assets/wood-joinery.jpg";
import customFurniture from "@/assets/custom-furniture.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-charcoal-light overflow-hidden">
                  <img
                    src={craftsmanWorking}
                    alt="Artesão trabalhando em detalhe de madeira"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square bg-charcoal-light overflow-hidden">
                  <img
                    src={woodJoinery}
                    alt="Encaixe de madeira artesanal"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square bg-charcoal-light overflow-hidden">
                  <img
                    src={carpentryTools}
                    alt="Ferramentas de marcenaria"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] bg-charcoal-light overflow-hidden">
                  <img
                    src={customFurniture}
                    alt="Móvel de madeira artesanal"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-divider mb-8" />
            <h2 className="text-3xl md:text-5xl font-serif text-cream mb-6">
              Sobre a <span className="text-gradient-gold">Krion</span>
            </h2>
            
            <p className="text-cream-muted leading-relaxed mb-6">
              Fundada em Santa Bárbara D'Oeste, a Krion Marcenaria nasceu da paixão pela
              arte da marcenaria e do compromisso inabalável com a excelência. Com mais de
              duas décadas de experiência, unimos a tradição artesanal à tecnologia de ponta
              para criar móveis que transcendem o tempo.
            </p>

            <p className="text-cream-muted leading-relaxed mb-8">
              Nossa equipe é liderada por mestres marceneiros que dedicaram suas vidas ao
              ofício, combinando técnicas ancestrais com processos modernos de fabricação.
              Cada projeto é tratado como uma obra única, desenvolvida para refletir a
              personalidade e o estilo de vida de nossos clientes.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-primary pl-6 py-2">
              <blockquote className="text-lg md:text-xl font-serif text-cream italic">
                "Transformamos madeira em móveis que unem função e sofisticação,
                criando ambientes que contam histórias."
              </blockquote>
              <cite className="text-primary text-sm mt-3 block not-italic">
                — Filosofia Krion
              </cite>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-cream/10">
              <div>
                <span className="text-3xl md:text-4xl font-serif text-primary">20+</span>
                <span className="text-cream-muted text-sm block mt-1">Anos de Experiência</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-serif text-primary">500+</span>
                <span className="text-cream-muted text-sm block mt-1">Projetos Entregues</span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-serif text-primary">100%</span>
                <span className="text-cream-muted text-sm block mt-1">Clientes Satisfeitos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

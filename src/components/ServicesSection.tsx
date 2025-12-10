import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cog, Target, HandMetal, Building2, Home } from "lucide-react";
import workshopCnc from "@/assets/workshop-cnc.jpg";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const techFeatures = [
  {
    icon: Cog,
    title: "Maquinário CNC",
    description: "Centro de usinagem de última geração para cortes milimétricos e encaixes perfeitos.",
  },
  {
    icon: Target,
    title: "Precisão Cirúrgica",
    description: "Tolerância de até 0.1mm em todos os componentes, garantindo encaixes impecáveis.",
  },
  {
    icon: HandMetal,
    title: "Acabamento Artesanal",
    description: "Cada peça passa por mãos experientes para o toque final de excelência.",
  },
];

const residentialServices = [
  "Cozinhas Planejadas",
  "Closets e Guarda-Roupas",
  "Home Theaters",
  "Banheiros",
  "Living e Salas",
  "Home Office",
];

const commercialServices = [
  "Recepções Corporativas",
  "Escritórios Executivos",
  "Lojas e Showrooms",
  "Restaurantes",
  "Consultórios",
  "Espaços Hoteleiros",
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 md:py-32 bg-charcoal-light relative overflow-hidden">
      <div className="container mx-auto px-6">
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
            Tecnologia & <span className="text-gradient-gold">Artesania</span>
          </h2>
          <p className="text-cream-muted max-w-2xl mx-auto">
            Nossa oficina une o melhor de dois mundos: maquinário de alta tecnologia
            e o toque insubstituível das mãos artesanais.
          </p>
        </motion.div>

        {/* Main Image + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Workshop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={workshopCnc}
                alt="Oficina de marcenaria com maquinário CNC"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-background/90 backdrop-blur-sm p-4 md:p-6">
              <span className="text-primary text-sm uppercase tracking-wider">Nossa Oficina</span>
              <h3 className="text-cream font-serif text-lg md:text-xl mt-1">
                Centro de Usinagem CNC de Alta Performance
              </h3>
            </div>
          </motion.div>

          {/* Tech Features */}
          <div className="space-y-8">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-cream mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-cream-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-cream">Residencial</h3>
            </div>
            <ul className="space-y-3">
              {residentialServices.map((service) => (
                <li key={service} className="flex items-center gap-3 text-cream-muted">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-background p-8 md:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-cream">Comercial</h3>
            </div>
            <ul className="space-y-3">
              {commercialServices.map((service) => (
                <li key={service} className="flex items-center gap-3 text-cream-muted">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

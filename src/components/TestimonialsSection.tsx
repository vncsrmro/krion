import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3 }
  })
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const testimonials = [
  {
    id: 1,
    name: "Marina Santoro",
    role: "Arquiteta",
    content:
      "A Krion superou todas as expectativas. A atenção aos detalhes e a qualidade dos materiais fizeram toda a diferença no projeto da minha cliente. Recomendo sem hesitar.",
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Empresário",
    content:
      "Minha cozinha ficou impecável. O time da Krion entendeu exatamente o que eu queria e entregou muito além. O acabamento é de altíssimo nível.",
  },
  {
    id: 3,
    name: "Fernanda Albuquerque",
    role: "Designer de Interiores",
    content:
      "Trabalhar com a Krion é ter a certeza de um resultado excepcional. Profissionalismo, pontualidade e uma qualidade que impressiona até os clientes mais exigentes.",
  },
];

export function TestimonialsSection() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setCurrentIndex([newIndex, newDirection]);
  };

  const goToIndex = (index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, direction]);
  };

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-charcoal-light">
      <div className="container mx-auto px-6">
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
            A Experiência de Quem Vive o <span className="text-gradient-gold">Padrão Krion</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />

              {/* Content */}
              <p className="text-xl md:text-2xl text-cream font-light leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div>
                <p className="text-lg font-serif text-primary">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-cream-muted uppercase tracking-widest mt-1">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-cream-muted/30 hover:bg-cream-muted/50 w-2"
                    }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-charcoal-light">
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
            A Experiência de Quem Vive o <span className="text-gradient-gold">Padrão Krion</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
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

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-cream-muted/30 hover:bg-cream-muted/50"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

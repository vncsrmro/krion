import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import portfolioCloset from "@/assets/portfolio-closet.jpg";
import portfolioHometheater from "@/assets/portfolio-hometheater.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioLiving from "@/assets/portfolio-living.jpg";
import portfolioOffice from "@/assets/portfolio-office.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

const projects = [
  {
    title: "Cozinha Gourmet",
    category: "Cozinhas",
    image: heroKitchen,
    size: "large",
  },
  {
    title: "Closet Master",
    category: "Closets",
    image: portfolioCloset,
    size: "tall",
  },
  {
    title: "Home Theater",
    category: "Entretenimento",
    image: portfolioHometheater,
    size: "medium",
  },
  {
    title: "Banheiro Premium",
    category: "Banheiros",
    image: portfolioBathroom,
    size: "medium",
  },
  {
    title: "Sala de Estar",
    category: "Salas",
    image: portfolioLiving,
    size: "medium",
  },
  {
    title: "Home Office",
    category: "Escritórios",
    image: portfolioOffice,
    size: "tall",
  },
];

function PortfolioCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden cursor-pointer ${
        project.size === "large"
          ? "md:col-span-2 md:row-span-2"
          : project.size === "tall"
          ? "md:row-span-2"
          : ""
      }`}
    >
      <div className="relative h-full min-h-[300px] md:min-h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.2em] text-primary mb-2"
          >
            {project.category}
          </motion.span>
          <h3 className="text-xl md:text-2xl font-serif text-cream group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Hover Line */}
          <div className="mt-4 w-0 h-[1px] bg-primary group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-charcoal-light">
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
            Projetos que Definem o <span className="text-gradient-gold">Luxo</span>
          </h2>
          <p className="text-cream-muted max-w-2xl mx-auto">
            Cada projeto é uma obra única, criada para transformar espaços em 
            experiências de sofisticação e conforto.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

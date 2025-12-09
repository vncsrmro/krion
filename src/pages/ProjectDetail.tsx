import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Ruler, Home, Sparkles, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");
  const { prev, next } = getAdjacentProjects(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-cream mb-4">Projeto não encontrado</h1>
          <Link to="/#portfolio" className="text-primary hover:underline">
            Voltar ao portfólio
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Olá! Vi o projeto "${project.title}" no site e gostaria de um orçamento para algo similar.`;
  const whatsappLink = `https://wa.me/5519994704048?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/#portfolio"
          className="absolute top-24 left-6 md:left-12 flex items-center gap-2 text-cream-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm tracking-wide">Voltar ao Portfólio</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-3 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-cream mb-4">
              {project.title}
            </h1>
            <p className="text-cream-muted text-lg max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-cream mb-6">
                Sobre o Projeto
              </h2>
              <p className="text-cream-muted leading-relaxed text-lg mb-8">
                {project.fullDescription}
              </p>

              {/* CTA Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                Quero um Projeto Assim
              </a>
            </motion.div>

            {/* Specs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal-light p-8 space-y-8"
            >
              <h3 className="text-xl font-serif text-cream border-b border-primary/30 pb-4">
                Especificações Técnicas
              </h3>

              {/* Dimensions */}
              <div className="flex items-start gap-4">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream-muted block mb-1">
                    Dimensões
                  </span>
                  <span className="text-cream">{project.specs.dimensions}</span>
                </div>
              </div>

              {/* Execution Time */}
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream-muted block mb-1">
                    Tempo de Execução
                  </span>
                  <span className="text-cream">{project.specs.executionTime}</span>
                </div>
              </div>

              {/* Environment */}
              <div className="flex items-start gap-4">
                <Home className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-cream-muted block mb-1">
                    Ambiente
                  </span>
                  <span className="text-cream">{project.specs.environment}</span>
                </div>
              </div>

              {/* Materials */}
              <div>
                <span className="text-xs uppercase tracking-wider text-cream-muted block mb-3">
                  Materiais Utilizados
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.specs.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 text-sm border border-primary/30 text-cream-muted"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Finishes */}
              <div>
                <span className="text-xs uppercase tracking-wider text-cream-muted block mb-3">
                  Acabamentos
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.specs.finishes.map((finish) => (
                    <span
                      key={finish}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary"
                    >
                      {finish}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-cream/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2">
            {/* Previous */}
            <div className={`py-8 md:py-12 ${prev ? 'cursor-pointer group' : 'opacity-30'}`}>
              {prev ? (
                <Link to={`/projeto/${prev.slug}`} className="flex items-center gap-4">
                  <ArrowLeft className="w-5 h-5 text-cream-muted group-hover:text-primary transition-colors" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-cream-muted block mb-1">
                      Projeto Anterior
                    </span>
                    <span className="text-cream group-hover:text-primary transition-colors font-serif">
                      {prev.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-5 h-5 text-cream-muted" />
                  <span className="text-cream-muted text-sm">Primeiro projeto</span>
                </div>
              )}
            </div>

            {/* Next */}
            <div className={`py-8 md:py-12 border-l border-cream/10 pl-6 md:pl-12 ${next ? 'cursor-pointer group' : 'opacity-30'}`}>
              {next ? (
                <Link to={`/projeto/${next.slug}`} className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-cream-muted block mb-1">
                      Próximo Projeto
                    </span>
                    <span className="text-cream group-hover:text-primary transition-colors font-serif">
                      {next.title}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cream-muted group-hover:text-primary transition-colors" />
                </Link>
              ) : (
                <div className="flex items-center justify-end gap-4">
                  <span className="text-cream-muted text-sm">Último projeto</span>
                  <ArrowRight className="w-5 h-5 text-cream-muted" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7 }
  }
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -50, filter: "blur(6px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.2 }
  }
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 50, filter: "blur(6px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.3 }
  }
};

const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  }
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4
    }
  }
};

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n\n` +
      `Detalhes do Projeto:\n${formData.message}`
    );
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5519994704048?text=${whatsappMessage}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-24"
        >
          <div className="section-divider mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif text-cream mb-6">
            Realize Seu Projeto dos <span className="text-gradient-gold">Sonhos</span>
          </h2>
          <p className="text-cream-muted max-w-2xl mx-auto">
            Sua jornada para um ambiente exclusivo começa aqui. 
            Agende uma consultoria com nossos especialistas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Info & Map */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <p className="text-cream-muted mb-8 leading-relaxed">
                Estamos prontos para transformar seu espaço em uma obra de arte. 
                Entre em contato e descubra como podemos criar algo único para você.
              </p>
              
              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/5519994704048?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20projetos%20da%20Krion%20Marcenaria."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--gold)/0.3)] mb-10"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com um Especialista via WhatsApp
              </motion.a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-cream-muted text-sm">
                  Rua Antonio Galvão Cezarino Leite, 458<br />
                  Santa Catarina, Americana - São Paulo
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+5519994704048"
                  className="text-cream-muted text-sm hover:text-primary transition-colors"
                >
                  +55 (19) 99470-4048
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contato@krionmarcenaria.com.br"
                  className="text-cream-muted text-sm hover:text-primary transition-colors"
                >
                  contato@krionmarcenaria.com.br
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-64 overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1!2d-47.33!3d-22.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzQ4LjAiUyA0N8KwMTknNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.1) opacity(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Krion Marcenaria"
              />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={formContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={formFieldVariants}>
                <label htmlFor="name" className="block text-sm text-cream-muted mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-light border border-border text-cream placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </motion.div>
              
              <motion.div variants={formFieldVariants}>
                <label htmlFor="email" className="block text-sm text-cream-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-light border border-border text-cream placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </motion.div>
              
              <motion.div variants={formFieldVariants}>
                <label htmlFor="phone" className="block text-sm text-cream-muted mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-light border border-border text-cream placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </motion.div>
              
              <motion.div variants={formFieldVariants}>
                <label htmlFor="message" className="block text-sm text-cream-muted mb-2">
                  Detalhes do Projeto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-charcoal-light border border-border text-cream placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                variants={formFieldVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Enviar Solicitação de Projeto
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

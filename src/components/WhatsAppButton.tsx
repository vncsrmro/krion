import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5519994704048?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20projetos%20da%20Krion%20Marcenaria."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-gradient-gold text-primary-foreground rounded-full shadow-lg hover:shadow-[0_8px_30px_hsl(var(--gold)/0.5)] transition-all duration-500 pulse-gold"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

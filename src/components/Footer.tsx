import krionLogo from "@/assets/krion-logo.svg";
import { Instagram, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Nossa Essência", href: "#essencia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Description */}
          <div>
            <img
              src={krionLogo}
              alt="Krion Marcenaria"
              className="h-10 w-auto mb-6"
              width={100}
              height={40}
              loading="lazy"
            />
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs">
              Transformando espaços em experiências de luxo há mais de uma década.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream-muted text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Contato</h4>
            <div className="space-y-3 text-cream-muted text-sm mb-6">
              <p>Rua Antonio Galvão Cezarino Leite, 458</p>
              <p>Santa Catarina, Americana - SP</p>
              <p>+55 (19) 99470-4048</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/krionmarcenaria"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5519994704048"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col items-center gap-4">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream-muted text-xs">
              © 2025 Krion Marcenaria. Todos os direitos reservados.
            </p>
            <p className="text-cream-muted text-xs">
              Design de luxo para ambientes exclusivos
            </p>
          </div>
          <p className="text-cream-muted text-xs">
            Desenvolvido com 💗 pela{" "}
            <a
              href="https://inovasys.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-cream transition-colors duration-300"
            >
              InovaSys
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

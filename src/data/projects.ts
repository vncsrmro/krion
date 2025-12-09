import heroKitchen from "@/assets/hero-kitchen.jpg";
import portfolioCloset from "@/assets/portfolio-closet.jpg";
import portfolioHometheater from "@/assets/portfolio-hometheater.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioLiving from "@/assets/portfolio-living.jpg";
import portfolioOffice from "@/assets/portfolio-office.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  images: string[];
  specs: {
    materials: string[];
    dimensions: string;
    executionTime: string;
    environment: string;
    finishes: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "cozinha-gourmet",
    title: "Cozinha Gourmet",
    category: "Cozinhas",
    description: "Cozinha planejada com ilha central e acabamentos premium em madeira maciça.",
    fullDescription: "Este projeto transformou um espaço de 45m² em uma cozinha gourmet completa, ideal para quem ama cozinhar e receber. A ilha central foi projetada para otimizar o fluxo de trabalho, integrando cooktop, área de preparo e bancada para refeições rápidas. Os armários superiores com iluminação LED embutida destacam a nobreza da madeira freijó, enquanto as ferragens Blum garantem suavidade e durabilidade em cada movimento.",
    images: [heroKitchen],
    specs: {
      materials: ["Madeira Freijó", "MDF Lacado", "Granito São Gabriel", "Ferragens Blum"],
      dimensions: "45m² de área total",
      executionTime: "45 dias",
      environment: "Residencial - Alto Padrão",
      finishes: ["Verniz Acetinado", "Laca Branca Fosca", "Iluminação LED"]
    },
  },
  {
    slug: "closet-master",
    title: "Closet Master",
    category: "Closets",
    description: "Closet master com organização inteligente e iluminação integrada.",
    fullDescription: "Projetado para um casal exigente, este closet master de 25m² oferece organização impecável para cada peça do guarda-roupa. Módulos específicos para sapatos, bolsas, gravatas e joias foram desenvolvidos sob medida. A iluminação com sensores de presença e espelhos com LED integrado criam uma experiência de boutique pessoal. Gavetas com divisórias aveludadas protegem acessórios delicados.",
    images: [portfolioCloset],
    specs: {
      materials: ["MDF Carvalho Americano", "Espelhos Bronze", "Ferragens Hafele", "Couro Ecológico"],
      dimensions: "25m² de área total",
      executionTime: "30 dias",
      environment: "Residencial - Suíte Master",
      finishes: ["Lâmina Natural", "Pintura Metalizada", "Tecido Suede interno"]
    },
  },
  {
    slug: "home-theater",
    title: "Home Theater",
    category: "Entretenimento",
    description: "Sala de cinema residencial com tratamento acústico e design sofisticado.",
    fullDescription: "Uma experiência cinematográfica exclusiva foi o objetivo deste projeto. O painel principal foi desenvolvido com tratamento acústico integrado, utilizando painéis de madeira perfurada e tecidos especiais que absorvem reverberações. O rack flutuante oculta toda a fiação e equipamentos de áudio, mantendo o visual limpo e elegante. Iluminação cênica programável complementa cada sessão de cinema.",
    images: [portfolioHometheater],
    specs: {
      materials: ["MDF Nogueira", "Tecido Acústico", "Painéis Difusores", "LED RGB"],
      dimensions: "35m² de área total",
      executionTime: "40 dias",
      environment: "Residencial - Entretenimento",
      finishes: ["Laca Fosca Preta", "Ripado de Madeira", "Fibra Acústica"]
    },
  },
  {
    slug: "banheiro-premium",
    title: "Banheiro Premium",
    category: "Banheiros",
    description: "Banheiro spa com bancada flutuante e nichos iluminados.",
    fullDescription: "Inspirado em spas de luxo, este banheiro de 18m² combina funcionalidade e relaxamento. A bancada flutuante em madeira teca, naturalmente resistente à umidade, contrasta com o mármore Carrara das paredes. Nichos iluminados organizam produtos de forma elegante, enquanto o espelho com desembaçador e iluminação perimetral eleva o ritual diário a uma experiência de bem-estar.",
    images: [portfolioBathroom],
    specs: {
      materials: ["Madeira Teca", "Mármore Carrara", "Metais Deca Gold", "Vidro Temperado"],
      dimensions: "18m² de área total",
      executionTime: "25 dias",
      environment: "Residencial - Suíte",
      finishes: ["Verniz Naval", "Polimento Brilhante", "Rejunte Epóxi"]
    },
  },
  {
    slug: "sala-de-estar",
    title: "Sala de Estar",
    category: "Salas",
    description: "Living integrado com painéis de madeira e lareira embutida.",
    fullDescription: "Este living de 60m² foi concebido como o coração da residência, integrando área de convivência, leitura e contemplação. O painel central em ripas de cumaru emoldura a lareira ecológica, criando um ponto focal acolhedor. Estantes laterais com prateleiras em vidro bronze abrigam uma curada coleção de arte. O bar embutido com iluminação âmbar completa o ambiente para recepções sofisticadas.",
    images: [portfolioLiving],
    specs: {
      materials: ["Madeira Cumaru", "Vidro Bronze", "Lareira Ecológica", "Aço Corten"],
      dimensions: "60m² de área total",
      executionTime: "50 dias",
      environment: "Residencial - Área Social",
      finishes: ["Óleo Natural", "Vidro Acidato", "Pintura Eletrostática"]
    },
  },
  {
    slug: "home-office",
    title: "Home Office",
    category: "Escritórios",
    description: "Escritório executivo com mesa em L e estante modular.",
    fullDescription: "Projetado para um executivo que trabalha em casa, este home office de 20m² equilibra profissionalismo e conforto. A mesa em L oferece amplo espaço para monitores e documentos, com passa-cabos integrados que mantêm a organização. A estante modular combina nichos abertos para livros e portas fechadas para arquivos. Painéis acústicos garantem privacidade para videoconferências.",
    images: [portfolioOffice],
    specs: {
      materials: ["MDF Imbuia", "Vidro Fumê", "Couro Natural", "Alumínio Escovado"],
      dimensions: "20m² de área total",
      executionTime: "28 dias",
      environment: "Residencial - Home Office",
      finishes: ["Laca Acetinada", "Puxadores Couro", "Passa-cabos embutidos"]
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): { prev: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

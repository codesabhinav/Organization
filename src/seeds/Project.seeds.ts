export type Project2CardType = {
  image: string;
  tags: string[];
  title: string;
  link: string;
};

export const project2Cards: Project2CardType[] = [
 {
    image: "https://www.fahimai.com/wp-content/uploads/2025/01/Fahim-AI-3-68.png",
     tags: ["Knowledge Management", "Productivity"],
    title: "Notion Automations - Workspace Intelligence",
    link: "/portfolio-details/notion-automations",
  },
  {
     image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=400&h=400&fit=crop", 
  tags: ["AI Tools", "Content Writing"],
   title: "Writesonic - AI Writing Assistant",
    link: "/portfolio-details/writesonic",
  },
  {
     image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop", 
  tags: ["AI Tools", "Copywriting"],
  title: "Copy.ai - Smart Copy Generator",
    link: "/portfolio-details/copy-ai",
  },
  {
    image: "https://images.unsplash.com/photo-1646839083586-cf7747c1e9bb?w=800&h=600&fit=crop", 
  tags: ["AI Tools", "Writing"],
  title: "Grammarly Lite - Quick Grammar Checker",
    link: "/portfolio-details/grammarly-lite",
  },
  {
    image: "https://www.aig123.com/wp-content/uploads/2024/05/voicenotes.png",
  tags: ["AI Tools", "Productivity"],
  title: "VoiceNote AI - Speech to Text Helper",
    link: "/portfolio-details/voicenote-ai",
  },
  {
   image: "https://i.pinimg.com/736x/ee/5e/4e/ee5e4e598c91c0db669598feb5204f84.jpg",
  tags: ["AI Tools", "Design"],
  title: "Sketch2Logo - AI Logo Maker",
    link: "/portfolio-details/sketch2logo",
  }
];

export type Project2SliderType = {
  projectSrc: string;
  category: string[];
  title: string;
};

export const project2SliderData: Project2SliderType[] = [
  {
    projectSrc: "https://www.fahimai.com/wp-content/uploads/2025/01/Fahim-AI-3-68.png",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc:"https://images.unsplash.com/photo-1508780709619-79562169bc64?w=400&h=400&fit=crop",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop", 
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc:"https://images.unsplash.com/photo-1646839083586-cf7747c1e9bb?w=800&h=600&fit=crop", 
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc: "https://www.aig123.com/wp-content/uploads/2024/05/voicenotes.png",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
];

export type ProjectCardType = {
  link: string;
  imageSrc: string;
  year: string;
  title: string;
  categories: string[];
};

export const projectCards: ProjectCardType[] = [
  {
    link: "/portfolio-details/notion-automations",
    imageSrc: "https://www.fahimai.com/wp-content/uploads/2025/01/Fahim-AI-3-68.png",
    year: "2025",
    title: "AppyPie - AI App Builder",
    categories: ["AI Tools", "No-Code"],
  },
  {
      link: "/portfolio-details/writesonic",
    imageSrc: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=400&h=400&fit=crop",
    year: "2025",
    title: "Gupshup - Auto Bot Builder",
    categories: ["Conversational AI", "Chatbots"],
  },
  {
    link: "/portfolio-details/copy-ai",
    imageSrc: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop",
    year: "2025",
    title: "Microsoft Power Automate",
    categories: ["Automation", "Workflow"],
  },
  {
     link: "/portfolio-details/grammarly-lite",
    imageSrc: "https://images.unsplash.com/photo-1646839083586-cf7747c1e9bb?w=800&h=600&fit=crop",
    year: "2025",
    title: "n8n - AI Workflow Automation",
    categories: ["AI Workflow", "Integrations"],
  },
];

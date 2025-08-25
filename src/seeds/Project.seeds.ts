export type Project2CardType = {
  image: string;
  tags: string[];
  title: string;
  link: string;
};

export const project2Cards: Project2CardType[] = [
  {
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img1.jpg",
    tags: ["AI Tools", "No-Code"],
    title: "AppyPie - AI App Builder",
    link: "/portfolio-details/appy-pie",
  },
  {
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img2.jpg",
    tags: ["Conversational AI", "Chatbots"],
    title: "Gupshup - Auto Bot Builder",
    link: "/portfolio-details/gupshup",
  },
  {
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img3.jpg",
    tags: ["Automation", "Workflow"],
    title: "Microsoft Power Automate",
    link: "/portfolio-details/microsoft-power-automate",
  },
  {
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img4.jpg",
    tags: ["AI Workflow", "Integrations"],
    title: "n8n - AI Workflow Automation",
    link: "/portfolio-details/n8n",
  },
  {
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img2.jpg",
    tags: ["SaaS Management", "Governance"],
    title: "Zluri - SaaS & Identity Governance",
    link: "/portfolio-details/zluri",
  },
  {
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img3.jpg",
    tags: ["No-Code", "Resources"],
    title: "Shnoco - No-Code Learning Hub",
    link: "/portfolio-details/shnoco",
  }
];

export type Project2SliderType = {
  projectSrc: string;
  category: string[];
  title: string;
};

export const project2SliderData: Project2SliderType[] = [
  {
    projectSrc: "https://digiflow-html.netlify.app/assets/images/project/project2-img1.jpg",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc: "https://digiflow-html.netlify.app/assets/images/project/project2-img2.jpg",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc: "https://digiflow-html.netlify.app/assets/images/project/project2-img3.jpg",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc: "https://digiflow-html.netlify.app/assets/images/project/project2-img4.jpg",
    category: ["Branding", "Graphic Design"],
    title: "PixelForge Studio",
  },
  {
    projectSrc: "https://digiflow-html.netlify.app/assets/images/project/project2-img2.jpg",
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
    link: "/portfolio-details/appy-pie",
    imageSrc: "https://digiflow-html.netlify.app/assets/images/project/project1-img1.jpg",
    year: "2025",
    title: "AppyPie - AI App Builder",
    categories: ["AI Tools", "No-Code"],
  },
  {
    link: "/portfolio-details/gupshup",
    imageSrc: "https://digiflow-html.netlify.app/assets/images/project/project1-img2.jpg",
    year: "2025",
    title: "Gupshup - Auto Bot Builder",
    categories: ["Conversational AI", "Chatbots"],
  },
  {
    link: "/portfolio-details/microsoft-power-automate",
    imageSrc: "https://digiflow-html.netlify.app/assets/images/project/project1-img3.jpg",
    year: "2025",
    title: "Microsoft Power Automate",
    categories: ["Automation", "Workflow"],
  },
  {
    link: "/portfolio-details/n8n",
    imageSrc: "https://digiflow-html.netlify.app/assets/images/project/project1-img4.jpg",
    year: "2025",
    title: "n8n - AI Workflow Automation",
    categories: ["AI Workflow", "Integrations"],
  },
];

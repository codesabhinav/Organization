export interface ServiceDetailsType {
  slug: string;
  title: string;
  mainTitle: string;
  description: string;
  overview: string;
  keyFeatures: string;
  features: string[];
  images: {
    main: string;
    overview: string;
    feature1: string;
    feature2: string;
    keyFeature: string;
  };
  stats: {
    projects: number;
    experience: number;
    clients: number;
    satisfaction: number;
  };
}

export const serviceDetailsData: ServiceDetailsType[] = [
  {
    slug: "web-development",
    title: "Web Development",
    mainTitle: "Web Design & UI/UX Development",
    description: "We build responsive, secure, and scalable websites tailored to elevate brands, engage users, and grow effectively. Our team specializes in creating modern web applications that deliver exceptional user experiences across all devices and platforms.",
    overview: "We also offer comprehensive web development services for marketing materials such as business websites, e-commerce platforms, web applications, and more. Our goal is to create a memorable digital presence that resonates with your target audience and drives business growth.",
    keyFeatures: "A strong web presence is essential for standing out in today's competitive market. We provide comprehensive web development services, including responsive design, custom functionality, performance optimization, and ongoing maintenance to ensure your website remains cutting-edge.",
    features: [
      "Frontend development with React, Vue.js, Angular",
      "Backend development with Node.js, Python, PHP",
      "E-commerce solutions (Shopify, WooCommerce)",
      "CMS integration (WordPress, Drupal)",
      "Progressive Web Apps (PWA)",
      "API development and integration"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 150,
      experience: 8,
      clients: 80,
      satisfaction: 98
    }
  },
  {
    slug: "software-development",
    title: "Software Development",
    mainTitle: "Custom Software Development Solutions",
    description: "We craft innovative, scalable, and secure software solutions tailored to streamline operations and drive growth. Our development team creates custom applications that solve complex business challenges and improve operational efficiency.",
    overview: "We also offer comprehensive software development services for enterprise applications, mobile apps, desktop software, and cloud solutions. Our goal is to create robust software that scales with your business and provides long-term value.",
    keyFeatures: "A strong software foundation is essential for modern business operations. We provide comprehensive software development services, including custom applications, system integration, database design, and ongoing support to ensure your software remains competitive.",
    features: [
      "Custom application development",
      "Mobile app development (iOS/Android)",
      "Desktop software solutions",
      "Cloud-based applications",
      "Database design and optimization",
      "System integration and APIs"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 200,
      experience: 10,
      clients: 120,
      satisfaction: 97
    }
  },
  {
    slug: "ai-development",
    title: "AI Development",
    mainTitle: "Artificial Intelligence & Machine Learning",
    description: "We build intelligent AI solutions that automate workflows, enhance decision-making, and deliver smarter user experiences. Our AI development team creates cutting-edge solutions that leverage the power of machine learning and artificial intelligence.",
    overview: "We also offer comprehensive AI development services for predictive analytics, natural language processing, computer vision, and automation solutions. Our goal is to create intelligent systems that transform your business operations and provide competitive advantages.",
    keyFeatures: "AI integration is essential for staying ahead in today's technology-driven market. We provide comprehensive AI development services, including machine learning models, predictive analytics, automation solutions, and ongoing optimization to ensure your AI systems deliver maximum value.",
    features: [
      "Machine Learning model development",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics and forecasting",
      "Chatbot and virtual assistant development",
      "Process automation and optimization"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 75,
      experience: 6,
      clients: 45,
      satisfaction: 99
    }
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    mainTitle: "Digital Marketing & Growth Strategies",
    description: "We craft data-driven digital marketing strategies that boost visibility, engage audiences, and accelerate measurable growth. Our marketing team creates comprehensive campaigns that drive results and maximize your return on investment.",
    overview: "We also offer comprehensive digital marketing services for SEO, PPC, social media marketing, content marketing, and email campaigns. Our goal is to create a memorable brand presence that resonates with your target audience and drives sustainable business growth.",
    keyFeatures: "Effective digital marketing is essential for growth in today's competitive landscape. We provide comprehensive digital marketing services, including SEO optimization, PPC management, social media marketing, and analytics to ensure your campaigns deliver measurable results.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) advertising",
      "Social media marketing and management",
      "Content marketing and strategy",
      "Email marketing campaigns",
      "Analytics and performance tracking"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 300,
      experience: 12,
      clients: 200,
      satisfaction: 96
    }
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    mainTitle: "Enterprise Resource Planning Solutions",
    description: "We develop customized ERP solutions that streamline operations, integrate processes, and optimize business efficiency seamlessly. Our ERP development team creates comprehensive systems that manage all aspects of your business operations.",
    overview: "We also offer comprehensive ERP development services for inventory management, financial systems, human resources, customer relationship management, and supply chain optimization. Our goal is to create integrated systems that provide complete business visibility and control.",
    keyFeatures: "A robust ERP system is essential for modern enterprise operations. We provide comprehensive ERP development services, including custom modules, system integration, data migration, and ongoing support to ensure your ERP system drives operational excellence.",
    features: [
      "Custom ERP module development",
      "Inventory and supply chain management",
      "Financial and accounting systems",
      "Human resource management",
      "Customer relationship management",
      "Business intelligence and reporting"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 50,
      experience: 15,
      clients: 35,
      satisfaction: 98
    }
  },
  {
    slug: "cybersecurity-service",
    title: "Cybersecurity Service",
    mainTitle: "Cybersecurity & Information Security",
    description: "We provide advanced cybersecurity solutions that protect systems, prevent threats, and ensure data integrity across organizations. Our security team creates comprehensive protection strategies that safeguard your digital assets and maintain compliance.",
    overview: "We also offer comprehensive cybersecurity services for threat assessment, vulnerability management, incident response, and security training. Our goal is to create a secure environment that protects your business from evolving cyber threats and ensures regulatory compliance.",
    keyFeatures: "Robust cybersecurity is essential for protecting business assets in today's digital landscape. We provide comprehensive cybersecurity services, including threat detection, vulnerability assessment, security audits, and incident response to ensure your systems remain protected.",
    features: [
      "Security assessment and auditing",
      "Threat detection and prevention",
      "Vulnerability management",
      "Incident response and recovery",
      "Security training and awareness",
      "Compliance and regulatory support"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 100,
      experience: 8,
      clients: 60,
      satisfaction: 99
    }
  },
  {
    slug: "internet-of-things-iot",
    title: "Internet of Things (IoT)",
    mainTitle: "IoT Development & Smart Solutions",
    description: "We build smart IoT solutions that connect devices, optimize operations, and deliver real-time actionable insights. Our IoT development team creates innovative solutions that leverage connected technology to transform business processes.",
    overview: "We also offer comprehensive IoT development services for sensor networks, smart devices, data analytics, and automation systems. Our goal is to create connected solutions that provide real-time monitoring, predictive maintenance, and operational efficiency improvements.",
    keyFeatures: "IoT integration is essential for modern business automation and monitoring. We provide comprehensive IoT development services, including sensor integration, data analytics, cloud connectivity, and mobile applications to ensure your IoT solutions deliver maximum value.",
    features: [
      "IoT sensor integration and deployment",
      "Smart device development",
      "Real-time data analytics",
      "Cloud connectivity and management",
      "Mobile IoT applications",
      "Predictive maintenance systems"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 40,
      experience: 5,
      clients: 25,
      satisfaction: 97
    }
  },
  {
    slug: "dedicated-resource",
    title: "Dedicated Resource",
    mainTitle: "Dedicated Development Teams & Resources",
    description: "We provide skilled dedicated resources ensuring focused project delivery, flexible engagement, and long-term business value. Our dedicated teams work exclusively on your projects, providing deep expertise and consistent delivery.",
    overview: "We also offer comprehensive dedicated resource services for development teams, project managers, designers, and technical specialists. Our goal is to provide flexible, scalable resources that adapt to your project needs and deliver exceptional results.",
    keyFeatures: "Dedicated resources are essential for complex project delivery and long-term success. We provide comprehensive dedicated resource services, including team management, skill matching, performance monitoring, and flexible engagement models to ensure your projects succeed.",
    features: [
      "Dedicated development teams",
      "Project managers and coordinators",
      "UI/UX designers and specialists",
      "Quality assurance engineers",
      "DevOps and infrastructure specialists",
      "Technical consultants and architects"
    ],
    images: {
      main: "/images/service/service-details-img1.jpg",
      overview: "/images/service/service-details-img2.jpg",
      feature1: "/images/service/service-details-img3.jpg",
      feature2: "/images/service/service-details-img4.jpg",
      keyFeature: "/images/service/service-details-img5.jpg"
    },
    stats: {
      projects: 180,
      experience: 10,
      clients: 90,
      satisfaction: 98
    }
  }
];

export const getServiceBySlug = (slug: string): ServiceDetailsType | undefined => {
  return serviceDetailsData.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return serviceDetailsData.map(service => service.slug);
};

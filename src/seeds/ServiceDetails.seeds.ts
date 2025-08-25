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
    description: "We build responsive, secure, and scalable websites tailored to elevate brands, engage users, and grow effectively. Our team specializes in creating modern web applications that deliver exceptional user experiences across all devices and platforms. </br> </br> We specialize in delivering cutting-edge digital solutions tailored to your business needs. Our team of experts is dedicated to helping you achieve your goals through innovative strategies, creative design, and advanced technology. Here’s a breakdown of the services we offer: Your website is the cornerstone of your online presence. We create visually stunning, user-friendly, and responsive websites that not only look great but also perform seamlessly across all devices.</br> </br> A strong brand identity sets you apart from the competition. Our branding services include logo design, color palette creation, typography selection, and brand guideline development. We also offer graphic design services for marketing materials such as business cards. ",
    overview: "We deliver comprehensive web development solutions designed to help businesses establish a strong online presence. Our services include custom website development, e-commerce platforms, and web applications built for performance, security, and scalability. With expertise in modern frameworks and UI/UX best practices, we create responsive, user-friendly designs that engage audiences across all devices. In addition, we provide ongoing maintenance, optimization, and digital support to ensure long-term success for every project.",
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
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    mainTitle: "Software development",
    description: "We craft innovative, scalable, and secure software solutions tailored to streamline operations and drive growth. </br> </br> We provide end-to-end software development services focused on building innovative, scalable, and secure solutions. From custom applications and enterprise systems to mobile and cloud-based platforms, our team designs software that simplifies processes, enhances productivity, and drives business growth. With expertise in modern technologies and agile practices, we ensure faster delivery, seamless integration, and long-term reliability, helping businesses stay competitive in a rapidly evolving digital world.",
    overview: "We offer end-to-end web and software development services, creating responsive websites, scalable applications, and custom digital solutions tailored to business needs. Our expertise spans e-commerce platforms, enterprise systems, mobile apps, and cloud-based solutions built with modern frameworks. </br> </br> With a focus on performance, security, and user experience, we deliver reliable products that engage users and streamline operations. We also provide ongoing support and optimization to ensure long-term success in the digital landscape.",
    keyFeatures: "We deliver end-to-end software development services, creating custom applications and enterprise solutions that streamline processes and support business growth. Our team specializes in building secure, scalable, and user-centric software tailored to unique industry needs. </br> </br> Key features include custom application design, cloud-ready architecture, seamless integrations, strong data security, and agile delivery practices. We also provide maintenance and optimization to ensure software remains reliable, future-proof, and aligned with evolving business goals.",
    features: [
      "Python",
      "React",
      "AWS",
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    description: "We build intelligent AI solutions that automate workflows, enhance decision-making, and deliver smarter user experiences.</br> </br> We build intelligent AI solutions that automate workflows, enhance decision-making, and deliver smarter user experiences. </br> </br> Key strengths of our AI services are automation, personalization, scalability, and integration with existing workflows. With a focus on accuracy, performance, and innovation, we deliver AI solutions that drive efficiency, enhance decision-making, and unlock new growth opportunities.",
    overview: "We provide end-to-end AI development services, designing intelligent solutions that leverage machine learning, natural language processing, and computer vision to solve complex business challenges. Our focus is on building scalable, data-driven systems that enhance efficiency and decision-making. </br> </br> Our services include custom AI model development, process automation, predictive analytics, and seamless integration into existing applications. With a commitment to accuracy, innovation, and performance, we deliver AI solutions that empower businesses to innovate and grow in the digital era.",
    keyFeatures: "Our AI services include Custom AI Models tailored to your specific business needs and goals, Automation to streamline workflows with intelligent process automation, and Predictive Analytics that provide data-driven insights for smarter decision-making. We also specialize in Natural Language Processing (NLP) to power chatbots, sentiment analysis, and text understanding. All our solutions are built with Scalability in mind, ensuring they can grow with your business and efficiently handle large datasets.",
    features: [
      "Programming Languages – Python, R, JavaScript",
      "Frameworks/Libraries – TensorFlow, PyTorch, Scikit-learn",
      "NLP Tools – spaCy, Hugging Face Transformers, NLTK",
      "Computer Vision – OpenCV, YOLO, Keras",
      "Data Handling – Pandas, NumPy, SQL, Apache Spark",
      "Cloud & Deployment – AWS, Google Cloud AI, Azure ML",
      "MLOps – Docker, Kubernetes, MLflow",
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    description: "We craft data-driven digital marketing strategies that boost visibility, engage audiences, and accelerate measurable growth. </br> </br> We provide end-to-end digital marketing services that help businesses build a strong online presence and connect with their target audience effectively. Our strategies are data-driven and designed to maximize visibility, engagement, and conversions across multiple digital channels. Our expertise includes SEO, social media marketing, paid advertising, content marketing, and email campaigns, ensuring a complete approach to growth. With continuous optimization and performance tracking, we deliver measurable results that enhance brand value and accelerate business success.",
    overview: "Our digital marketing services are focused on creating impactful strategies that connect brands with customers in meaningful ways. We blend creativity, analytics, and the latest tools to deliver campaigns that inspire trust and build long-term relationships. </br> </br> From search engine optimization and paid advertising to social media growth and content strategies, we help businesses capture attention, increase engagement, and turn audiences into loyal customers while maintaining a clear focus on measurable ROI.",
    keyFeatures: "Our digital marketing services are designed with targeted campaigns to reach the right audience, supported by SEO optimization that boosts search rankings and organic visibility. We drive social media growth through consistent engagement, backed by a strong content strategy that converts visitors into customers. </br> </br>  Every campaign is measured with performance tracking and ROI-focused insights, ensuring your business gets maximum value from every marketing effort.",
    features: [
      "SEO Tools – Google Analytics, Google Search Console, SEMrush, Ahrefs",
      "Advertising Platforms – Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads",
      "Social Media Management – Hootsuite, Buffer, Sprout Social",
      "Email Marketing – Mailchimp, HubSpot, ActiveCampaign",
      "Content & Design – Canva, Adobe Creative Cloud, WordPress",
      "Automation & Analytics – Zapier, Google Tag Manager, Data Studio"
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    description: "We develop customized ERP solutions that streamline operations, integrate processes, and optimize business efficiency seamlessly. </br> </br> We provide tailored ERP development services that unify business operations into a single, efficient platform. Our solutions are designed to integrate departments such as finance, HR, sales, inventory, and supply chain, ensuring smooth workflows and improved productivity. </br> </br>  With expertise in building scalable, secure, and user-friendly ERP systems, we help businesses automate processes, reduce errors, and make data-driven decisions. Our ERP solutions are customizable to fit unique organizational needs, enabling long-term efficiency and sustainable growth.",
    overview: "Our ERP development services focus on creating intelligent systems that centralize operations and eliminate redundancy across departments. By integrating finance, supply chain, HR, and customer management into one platform, we help businesses achieve greater visibility and control. </br> </br>  We design ERP solutions that are user-friendly, adaptable, and performance-driven, ensuring smooth collaboration, accurate data flow, and faster decision-making. Each system is tailored to unique business requirements, enabling organizations to boost efficiency and scale with confidence.",
    keyFeatures: "Our ERP solutions come with end-to-end process automation, reducing manual work and improving accuracy across departments. They offer real-time reporting and analytics, enabling smarter and faster decision-making. With seamless integration across finance, HR, sales, and supply chain, data flows effortlessly between teams.  </br> </br>   Designed for scalability and customization, the system adapts as your business grows, while robust security ensures sensitive information is always protected.",
    features: [
      "Backend Development – Python, Java, .NET, PHP",
      "Frontend Development – React, Angular, Vue.js",
      "Databases – MySQL, PostgreSQL, MongoDB, MS SQL Server",
      "ERP Frameworks/Platforms – Odoo, ERPNext, SAP (custom integration), Oracle NetSuite",
      "Cloud & Hosting – AWS, Microsoft Azure, Google Cloud",
      "APIs & Integration – REST, GraphQL, SOAP",
      "DevOps & Tools – Docker, Kubernetes, Git, Jenkins",
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    description: "We provide advanced cybersecurity solutions that protect systems, prevent threats, and ensure data integrity across organizations. </br> </br> We offer end-to-end cybersecurity services designed to safeguard businesses from evolving digital threats. Our solutions focus on protecting networks, applications, and sensitive data with proactive monitoring, threat detection, and incident response. </br> </br> With expertise in risk assessment, vulnerability management, penetration testing, and compliance, we ensure organizations remain secure and resilient. Our goal is to provide scalable, reliable, and tailored cybersecurity strategies that minimize risks and protect business continuity.",
    overview: "Our cybersecurity services are built to protect businesses against modern cyber risks by combining advanced technology with expert strategies. We help organizations strengthen their defenses, secure critical assets, and maintain trust in a rapidly evolving digital landscape. </br> </br> From endpoint security and cloud protection to security audits and compliance management, we deliver customized solutions that fit unique business needs. With continuous monitoring and rapid incident response, we ensure your systems stay resilient and ready against potential threats.",
    keyFeatures: "Our cybersecurity solutions provide real-time threat monitoring, ensuring early detection and quick response to attacks. We deliver data protection and encryption to safeguard sensitive information, along with network and endpoint security to prevent unauthorized access. </br> </br> With compliance management for standards like GDPR, ISO, and HIPAA, plus scalable security frameworks, our services adapt to growing business needs while maintaining robust protection.",
    features: [
      "Network Security – Cisco ASA, Fortinet, Palo Alto, pfSense",
      "Endpoint Protection – CrowdStrike, Symantec, Bitdefender, Microsoft Defender",
      "SIEM & Monitoring – Splunk, IBM QRadar, ELK Stack, Wazuh",
      "Vulnerability Assessment – Nessus, OpenVAS, Qualys",
      "Penetration Testing – Metasploit, Burp Suite, Kali Linux",
      "Encryption & IAM – OpenSSL, HashiCorp Vault, Okta, Azure AD",
      "Cloud Security – AWS Security Hub, Azure Security Center, Google Cloud Security",
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    description: "We build smart IoT solutions that connect devices, optimize operations, and deliver real-time actionable insights </br> </br> We provide end-to-end IoT development services, enabling businesses to connect devices, collect data, and automate processes seamlessly. Our solutions integrate sensors, hardware, and cloud platforms to deliver real-time insights and smarter operations. </br> </br> From smart devices and industrial IoT to connected applications and analytics, we design scalable and secure IoT ecosystems. With a focus on efficiency, monitoring, and data-driven decision-making, our IoT services help organizations improve productivity and unlock new growth opportunities.",
    overview: "Our IoT services focus on transforming physical devices into intelligent, connected systems that enhance business efficiency. We help organizations harness the power of data by linking sensors, machines, and applications into a unified ecosystem. </br> </br> With expertise in device integration, cloud connectivity, predictive analytics, and remote monitoring, we deliver secure and scalable IoT solutions. These services empower businesses to reduce costs, improve decision-making, and create innovative experiences for customers and industries alike.",
    keyFeatures: "Our IoT solutions provide seamless device connectivity for real-time communication, backed by remote monitoring and control to improve efficiency. We enable data collection and predictive analytics for smarter decision-making, along with automation to reduce manual effort. </br> </br> Designed with scalability and strong security, our IoT systems grow with your business while keeping data and devices protected.",
    features: [
      "Connectivity Protocols – MQTT, CoAP, HTTP/HTTPS, LoRaWAN, Zigbee, Bluetooth Low Energy (BLE)",
      "Programming Languages – Python, C/C++, JavaScript, Java",
      "Cloud & IoT Platforms – AWS IoT Core, Azure IoT Hub, Google Cloud IoT",
      "Data & Analytics – InfluxDB, TimescaleDB, Apache Kafka, TensorFlow, Power BI",
      "Mobile & Web Apps – React Native, Flutter, Angular, React",
      "Security – TLS/SSL, OAuth 2.0, Device Authentication, Secure Firmware Updates"
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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
    description: "We provide skilled dedicated resources ensuring focused project delivery, flexible engagement, and long-term business value. </br> </br> We offer dedicated resource services, providing businesses with skilled developers, designers, and IT experts who work exclusively on their projects. This model ensures focused attention, faster delivery, and alignment with client goals.</br> </br>  Our dedicated resources bring flexibility, scalability, and cost-effectiveness, allowing businesses to scale teams as needed without long-term overhead. With continuous communication and transparent workflows, we ensure reliable collaboration and measurable results.",
    overview: "Our offerings cover every major tech stack from frontend (React, Angular, Vue) and backend (Node.js, Python, Java, .NET, PHP) to databases (MySQL, PostgreSQL, MongoDB, Oracle), cloud platforms (AWS, Azure, Google Cloud), mobile development (Flutter, React Native, Kotlin, Swift), AI/ML frameworks (TensorFlow, PyTorch, Hugging Face), IoT technologies (Arduino, Raspberry Pi, MQTT, LoRaWAN), ERP & CRM (SAP, Odoo, ERPNext, Salesforce), and cybersecurity tools (Splunk, Nessus, CrowdStrike, Palo Alto).",
    keyFeatures: "Skilled Expertise – Access certified professionals across all major tech stacks and emerging technologies. </br> </br> Focused Attention – Dedicated resources work exclusively on your project, ensuring faster delivery and higher quality. </br> </br> Flexible Engagement – Scale teams up or down based on project needs with no long-term commitments. </br> </br> Cost-Effective – Reduce hiring, training, and infrastructure costs while getting top-tier talent. </br> </br> Transparent Workflow – Direct communication, regular updates, and complete project visibility at every stage.</br> </br> Global Availability – Resources aligned to your time zone for seamless collaboration. </br> </br> Long-Term Value – Reliable partnerships that adapt with your business growth.",
    features: [
      "Full Stack",
      "Ruby on Rails",
      "Devops",
      "MERN/Laravel",
      "AI/Ml Dev",
      "Blockchain Dev",
      "PHP/Wordpress",
    ],
    images: {
      main: "https://digiflow-html.netlify.app/assets/images/service/service-details-img1.jpg",
      overview: "https://digiflow-html.netlify.app/assets/images/service/service-details-img2.jpg",
      feature1: "https://digiflow-html.netlify.app/assets/images/service/service-details-img3.jpg",
      feature2: "https://digiflow-html.netlify.app/assets/images/service/service-details-img4.jpg",
      keyFeature: "https://digiflow-html.netlify.app/assets/images/service/service-details-img5.jpg"
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

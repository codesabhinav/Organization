export type ProjectType = {
  slug: string;
  image: string;
  tags: string[];
  title: string;
  client: string;
  startDate: string;
  handover: string;
  overview: string;
  whyChooseUs: string;
  challenges: string;
  solutions: string[];
  finalResult: string;
};

export const projectData: ProjectType[] = [
  {
    slug: "appy-pie",
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img1.jpg",
    tags: ["AI Tools", "No-Code"],
    title: "AppyPie - AI App Builder",
    client: "Abdus Salam",
    startDate: "23 January 2025",
    handover: "05 March 2025",
    overview:
      "AppyPie is a no-code AI app builder that empowers businesses and individuals to create mobile apps without writing code. It bridges the gap between simplicity and advanced functionality, making app development accessible for all.",
    whyChooseUs:
      "We provide a drag-and-drop AI app builder that is scalable, affordable, and user-friendly. Our tool helps startups and enterprises bring their ideas to life without heavy investment in engineering.",
    challenges:
      "Non-technical users often face barriers in app creation. AppyPie removes these challenges by providing ready-made templates, AI-assisted workflows, and quick integrations.",
    solutions: ["Custom Software", "Web Application", "Mobile Application", "API Integrations"],
    finalResult:
      "With AppyPie, users launched professional-grade apps quickly, reducing time-to-market and saving costs, while maintaining flexibility for growth."
  },
  {
    slug: "gupshup",
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img2.jpg",
    tags: ["Conversational AI", "Chatbots"],
    title: "Gupshup - Auto Bot Builder",
    client: "Tech Innovators",
    startDate: "10 February 2025",
    handover: "15 April 2025",
    overview:
      "Gupshup is a conversational AI platform enabling businesses to build intelligent chatbots across multiple channels like WhatsApp, SMS, and web chat.",
    whyChooseUs:
      "Our conversational AI enables smooth customer engagement, integrates with CRMs, and automates workflows without deep engineering.",
    challenges:
      "Companies needed a way to handle customer service at scale across multiple platforms. Manual engagement was inefficient.",
    solutions: ["Multi-channel Bots", "Customer Support Automation", "API Integrations", "CRM Connectivity"],
    finalResult:
      "Businesses achieved faster responses, higher engagement, and automated customer service while scaling across millions of users."
  },
  {
    slug: "microsoft-power-automate",
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img3.jpg",
    tags: ["Automation", "Workflow"],
    title: "Microsoft Power Automate",
    client: "Enterprise Corp",
    startDate: "05 March 2025",
    handover: "20 May 2025",
    overview:
      "Power Automate allows organizations to automate repetitive business processes, integrate data across systems, and boost productivity.",
    whyChooseUs:
      "We deliver low-code automation that integrates seamlessly with Microsoft 365, Dynamics, and third-party apps.",
    challenges:
      "Organizations struggled with manual workflows that wasted time and created errors.",
    solutions: ["Data Syncing", "Process Automation", "Custom Workflows", "AI Insights"],
    finalResult:
      "Workflows were streamlined, saving employees hours weekly and reducing operational costs."
  },
  {
    slug: "n8n",
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img4.jpg",
    tags: ["AI Workflow", "Integrations"],
    title: "n8n - AI Workflow Automation",
    client: "AI Startup",
    startDate: "12 April 2025",
    handover: "10 June 2025",
    overview:
      "n8n is a powerful workflow automation tool that connects APIs, apps, and AI models, enabling businesses to create custom automations.",
    whyChooseUs:
      "We provide open-source flexibility with AI integration, making it ideal for startups and enterprises looking to automate complex workflows.",
    challenges:
      "Manual integrations slowed innovation and made scaling difficult.",
    solutions: ["AI-Powered Workflows", "API Automations", "Data Pipelines", "Third-Party Integrations"],
    finalResult:
      "Clients automated complex tasks, integrated AI seamlessly, and scaled operations efficiently."
  },
  {
    slug: "zluri",
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img2.jpg",
    tags: ["SaaS Management", "Governance"],
    title: "Zluri - SaaS & Identity Governance",
    client: "Finance Solutions",
    startDate: "18 May 2025",
    handover: "25 July 2025",
    overview:
      "Zluri helps enterprises manage SaaS applications, control costs, and ensure identity governance with advanced monitoring tools.",
    whyChooseUs:
      "We help organizations save costs, secure their SaaS stack, and maintain compliance with minimal effort.",
    challenges:
      "Enterprises struggled with shadow IT, rising SaaS costs, and compliance risks.",
    solutions: ["SaaS Discovery", "Access Control", "License Optimization", "Compliance Monitoring"],
    finalResult:
      "Enterprises reduced SaaS spending by 35% while strengthening compliance and governance."
  },
  {
    slug: "shnoco",
    image: "https://digiflow-html.netlify.app/assets/images/project/project2-img3.jpg",
    tags: ["No-Code", "Resources"],
    title: "Shnoco - No-Code Learning Hub",
    client: "Startup Learners",
    startDate: "01 June 2025",
    handover: "10 August 2025",
    overview:
      "Shnoco is a learning hub for no-code enthusiasts, offering resources, tutorials, and tool integrations to accelerate learning.",
    whyChooseUs:
      "We simplify the learning process, making no-code accessible to beginners while offering depth for professionals.",
    challenges:
      "Learners lacked a structured platform to learn no-code efficiently.",
    solutions: ["Learning Modules", "Community Support", "Tool Integrations", "Hands-on Projects"],
    finalResult:
      "Shnoco empowered learners to build apps, websites, and workflows without writing code."
  },
  {
    slug: "automate-io",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Workflow Automation", "Integration"],
    title: "Automate.io - Smart Workflow Builder",
    client: "Digital Agencies",
    startDate: "15 July 2025",
    handover: "30 September 2025",
    overview:
      "Automate.io is a powerful workflow automation platform that connects 200+ apps and services, enabling businesses to create intelligent automation workflows without coding.",
    whyChooseUs:
      "We provide enterprise-grade automation with an intuitive interface, making complex integrations simple and accessible for teams of all technical levels.",
    challenges:
      "Businesses struggled with disconnected tools and manual data transfer between applications, leading to inefficiencies and errors.",
    solutions: ["Multi-App Integrations", "Conditional Logic", "Data Transformation", "Real-time Sync"],
    finalResult:
      "Clients achieved 80% reduction in manual tasks and 60% faster data processing across their entire tech stack."
  },
  {
    slug: "zapier",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["App Integration", "Automation"],
    title: "Zapier - Connect Your Apps",
    client: "SaaS Companies",
    startDate: "22 August 2025",
    handover: "15 October 2025",
    overview:
      "Zapier is the leading automation platform that connects 5000+ apps and services, allowing users to automate workflows and eliminate repetitive tasks.",
    whyChooseUs:
      "We offer the most extensive app ecosystem with reliable automation, helping businesses scale operations without increasing headcount.",
    challenges:
      "Organizations faced productivity bottlenecks due to manual data entry and repetitive tasks across multiple platforms.",
    solutions: ["Trigger-Based Automation", "Multi-Step Workflows", "Error Handling", "Webhook Support"],
    finalResult:
      "Teams saved an average of 20 hours per week through automated workflows and improved data accuracy by 95%."
  },
  {
    slug: "integromat",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
    tags: ["Visual Automation", "Data Processing"],
    title: "Integromat - Visual Workflow Designer",
    client: "Data Analytics Firms",
    startDate: "05 September 2025",
    handover: "20 November 2025",
    overview:
      "Integromat (now Make) is a visual workflow automation platform that enables users to design complex automation scenarios through an intuitive drag-and-drop interface.",
    whyChooseUs:
      "We provide advanced automation capabilities with visual workflow design, making complex integrations accessible to non-technical users.",
    challenges:
      "Complex data processing workflows required technical expertise and were difficult to maintain and modify.",
    solutions: ["Visual Workflow Designer", "Advanced Data Mapping", "Conditional Routing", "Error Recovery"],
    finalResult:
      "Clients reduced workflow development time by 70% and achieved 99.9% automation reliability for critical business processes."
  },
  {
    slug: "ifttt",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    tags: ["Smart Home", "IoT Integration"],
    title: "IFTTT - If This Then That",
    client: "Smart Home Companies",
    startDate: "12 October 2025",
    handover: "25 December 2025",
    overview:
      "IFTTT is a platform that connects apps, devices, and services through simple conditional statements, enabling users to create powerful automation for smart homes and productivity.",
    whyChooseUs:
      "We make automation accessible to everyone with our simple 'if this, then that' approach, connecting over 700 services seamlessly.",
    challenges:
      "Smart home devices and productivity tools operated in silos, requiring manual intervention for cross-platform automation.",
    solutions: ["Conditional Logic", "Multi-Platform Integration", "Smart Home Automation", "Productivity Workflows"],
    finalResult:
      "Users created over 100 million applets, automating daily tasks and creating seamless smart home experiences."
  },
  {
    slug: "pipedream",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    tags: ["API Integration", "Developer Tools"],
    title: "Pipedream - API Integration Platform",
    client: "Developer Teams",
    startDate: "18 November 2025",
    handover: "10 January 2026",
    overview:
      "Pipedream is a developer-first platform for building API integrations and workflows, offering real-time event processing and custom code execution capabilities.",
    whyChooseUs:
      "We provide developers with the tools to build, test, and deploy integrations quickly with real-time debugging and monitoring capabilities.",
    challenges:
      "Developers needed a platform that combined ease of use with powerful customization options for complex API integrations.",
    solutions: ["Real-time Event Processing", "Custom Code Execution", "API Testing Tools", "Workflow Monitoring"],
    finalResult:
      "Development teams reduced integration time by 60% and achieved 99.5% uptime for critical API workflows."
  },
  {
    slug: "tray-io",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Enterprise Automation", "Data Sync"],
    title: "Tray.io - Enterprise Workflow Platform",
    client: "Enterprise Organizations",
    startDate: "25 December 2025",
    handover: "15 February 2026",
    overview:
      "Tray.io is an enterprise-grade automation platform that enables organizations to build complex, multi-step workflows across their entire tech stack with advanced security and governance.",
    whyChooseUs:
      "We provide enterprise-level automation with advanced security, governance, and scalability features for large organizations.",
    challenges:
      "Enterprise organizations required secure, scalable automation solutions that could handle complex business processes and compliance requirements.",
    solutions: ["Enterprise Security", "Advanced Governance", "Scalable Architecture", "Compliance Tools"],
    finalResult:
      "Enterprises achieved 90% process automation while maintaining security compliance and reducing operational costs by 40%."
  },
  {
    slug: "workato",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Recipe-Based Automation", "Enterprise Integration"],
    title: "Workato - Recipe-Based Automation",
    client: "Financial Services",
    startDate: "05 January 2026",
    handover: "20 March 2026",
    overview:
      "Workato is an enterprise automation platform that uses 'recipes' to connect apps and automate workflows, offering both no-code and pro-code capabilities for maximum flexibility.",
    whyChooseUs:
      "We combine the simplicity of no-code with the power of pro-code, enabling both business users and developers to create sophisticated automations.",
    challenges:
      "Financial services organizations needed secure, compliant automation solutions that could handle sensitive data and complex regulatory requirements.",
    solutions: ["Recipe-Based Automation", "Enterprise Security", "Compliance Framework", "Hybrid Development"],
    finalResult:
      "Financial institutions achieved 85% automation of compliance processes while maintaining 100% audit trail and security standards."
  },
  {
    slug: "airtable-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Database Automation", "No-Code"],
    title: "Airtable Automations - Database Workflows",
    client: "Project Management Teams",
    startDate: "12 February 2026",
    handover: "25 April 2026",
    overview:
      "Airtable Automations enables users to create powerful workflows directly within their Airtable databases, automating data entry, notifications, and cross-table operations.",
    whyChooseUs:
      "We provide seamless automation within the Airtable ecosystem, making database management and workflow automation accessible to non-technical users.",
    challenges:
      "Teams struggled with manual data entry, repetitive notifications, and maintaining data consistency across multiple tables and bases.",
    solutions: ["Database Triggers", "Automated Notifications", "Cross-Table Operations", "Conditional Logic"],
    finalResult:
      "Teams reduced manual data entry by 75% and improved data accuracy while streamlining project management workflows."
  },
  {
    slug: "notion-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Knowledge Management", "Productivity"],
    title: "Notion Automations - Workspace Intelligence",
    client: "Remote Teams",
    startDate: "20 March 2026",
    handover: "05 June 2026",
    overview:
      "Notion Automations transforms the popular workspace platform into an intelligent hub, automating task management, knowledge sharing, and team collaboration workflows.",
    whyChooseUs:
      "We enhance Notion's capabilities with intelligent automation, making it the central hub for all team workflows and knowledge management.",
    challenges:
      "Remote teams needed better ways to automate routine tasks, manage knowledge, and maintain consistent workflows across distributed teams.",
    solutions: ["Task Automation", "Knowledge Management", "Team Collaboration", "Workflow Templates"],
    finalResult:
      "Remote teams improved productivity by 40% and reduced meeting time by 30% through automated workflows and intelligent knowledge management."
  },
  {
    slug: "clickup-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Project Management", "Team Collaboration"],
    title: "ClickUp Automations - Project Intelligence",
    client: "Agency Teams",
    startDate: "28 April 2026",
    handover: "10 July 2026",
    overview:
      "ClickUp Automations brings intelligent workflow automation to project management, enabling teams to automate task assignments, status updates, and project tracking.",
    whyChooseUs:
      "We integrate automation directly into project management workflows, helping teams focus on high-value work while automating routine tasks.",
    challenges:
      "Agency teams faced challenges with manual task management, status updates, and maintaining project visibility across multiple clients and projects.",
    solutions: ["Task Automation", "Status Tracking", "Client Communication", "Project Analytics"],
    finalResult:
      "Agency teams increased project delivery speed by 35% and improved client satisfaction through automated updates and transparent project tracking."
  },
  {
    slug: "monday-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Work Management", "Team Productivity"],
    title: "Monday.com Automations - Workflow Intelligence",
    client: "Marketing Teams",
    startDate: "15 May 2026",
    handover: "25 August 2026",
    overview:
      "Monday.com Automations transforms work management with intelligent workflows, automating task assignments, deadline tracking, and team communication.",
    whyChooseUs:
      "We make work management intelligent and automated, helping teams stay organized and productive while reducing manual overhead.",
    challenges:
      "Marketing teams struggled with campaign tracking, deadline management, and coordinating tasks across multiple team members and projects.",
    solutions: ["Campaign Automation", "Deadline Management", "Team Coordination", "Performance Tracking"],
    finalResult:
      "Marketing teams improved campaign delivery by 45% and reduced missed deadlines by 80% through intelligent automation and workflow management."
  },
  {
    slug: "asana-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Task Management", "Team Workflows"],
    title: "Asana Automations - Task Intelligence",
    client: "Product Teams",
    startDate: "22 June 2026",
    handover: "05 October 2026",
    overview:
      "Asana Automations brings intelligent automation to task and project management, streamlining workflows and improving team productivity through smart task routing and status updates.",
    whyChooseUs:
      "We enhance Asana's project management capabilities with intelligent automation, helping teams work more efficiently and deliver projects on time.",
    challenges:
      "Product teams needed better ways to manage task dependencies, automate status updates, and maintain project visibility across complex product development cycles.",
    solutions: ["Task Dependencies", "Status Automation", "Project Visibility", "Team Coordination"],
    finalResult:
      "Product teams reduced project delays by 50% and improved team productivity by 30% through intelligent task management and automated workflows."
  },
  {
    slug: "trello-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Kanban Automation", "Visual Workflows"],
    title: "Trello Automations - Visual Workflow Intelligence",
    client: "Design Teams",
    startDate: "30 July 2026",
    handover: "15 November 2026",
    overview:
      "Trello Automations enhances the popular Kanban platform with intelligent automation, automating card movements, notifications, and workflow processes for visual project management.",
    whyChooseUs:
      "We bring intelligence to visual project management, making Trello boards more dynamic and automated while maintaining the simplicity teams love.",
    challenges:
      "Design teams needed automated workflows for design reviews, feedback collection, and project handoffs while maintaining visual project tracking.",
    solutions: ["Design Workflows", "Review Automation", "Feedback Collection", "Project Handoffs"],
    finalResult:
      "Design teams streamlined their creative process by 40% and improved client feedback cycles through automated design review workflows."
  },
  {
    slug: "slack-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Communication", "Team Collaboration"],
    title: "Slack Automations - Communication Intelligence",
    client: "Customer Support Teams",
    startDate: "08 August 2026",
    handover: "20 December 2026",
    overview:
      "Slack Automations transforms team communication with intelligent workflows, automating notifications, message routing, and team coordination for improved productivity.",
    whyChooseUs:
      "We make Slack more intelligent and automated, helping teams communicate more effectively while reducing notification fatigue and improving response times.",
    challenges:
      "Customer support teams struggled with manual message routing, delayed responses, and maintaining consistent communication across multiple channels and team members.",
    solutions: ["Message Routing", "Response Automation", "Channel Management", "Team Coordination"],
    finalResult:
      "Support teams improved response times by 60% and reduced notification fatigue by 40% through intelligent communication automation."
  },
  {
    slug: "discord-automations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Community Management", "Gaming"],
    title: "Discord Automations - Community Intelligence",
    client: "Gaming Communities",
    startDate: "15 September 2026",
    handover: "25 January 2027",
    overview:
      "Discord Automations brings intelligent community management to gaming and online communities, automating moderation, event management, and member engagement.",
    whyChooseUs:
      "We help community managers create engaging, well-moderated spaces through intelligent automation while maintaining the fun and interactive nature of Discord.",
    challenges:
      "Gaming communities needed better moderation tools, automated event management, and ways to engage members without overwhelming manual effort.",
    solutions: ["Moderation Automation", "Event Management", "Member Engagement", "Community Analytics"],
    finalResult:
      "Gaming communities improved member engagement by 50% and reduced moderation workload by 70% through intelligent community automation."
  }
];

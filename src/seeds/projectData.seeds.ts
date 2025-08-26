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
    slug: "notion-automations",
    image: "https://www.fahimai.com/wp-content/uploads/2025/01/Fahim-AI-3-68.png",
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
  slug: "writesonic",
  image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=400&h=400&fit=crop", 
  tags: ["AI Tools", "Content Writing"],
  title: "Writesonic - AI Writing Assistant",
  client: "Freelancer Team",
  startDate: "10 February 2025",
  handover: "28 March 2025",
  overview:
    "Writesonic is a lightweight AI content generator designed for marketers, freelancers, and small businesses. It helps create blogs, ads, and social posts in minutes.",
  whyChooseUs:
    "We provide a simple writing tool that is affordable, fast, and perfect for everyday content needs without the complexity of enterprise AI platforms.",
  challenges:
    "Small businesses often lack the time and budget for professional content creation. Writesonic fills this gap with AI-powered writing templates.",
  solutions: ["Content Automation", "Blog Writing", "Social Media Posts"],
  finalResult:
    "Users quickly produced quality content that increased engagement and saved time, making content creation accessible to everyone."
},
{
  slug: "copy-ai",
  image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop", 
  tags: ["AI Tools", "Copywriting"],
  title: "Copy.ai - Smart Copy Generator",
  client: "Startup Founder",
  startDate: "15 January 2025",
  handover: "20 February 2025",
  overview:
    "Copy.ai is a lightweight AI tool focused on generating short-form copy like taglines, ads, and social captions. It is designed for startups and creators who need fast, catchy text.",
  whyChooseUs:
    "We deliver a focused AI solution for copywriting that saves time, sparks creativity, and avoids the complexity of bigger AI suites.",
  challenges:
    "Many creators struggle with writer's block and repetitive ad copy. Copy.ai simplifies idea generation with ready-to-use suggestions.",
  solutions: ["Ad Copy", "Captions", "Marketing Texts"],
  finalResult:
    "Copy.ai empowered creators to craft engaging copy instantly, boosting marketing campaigns and reducing creative fatigue."
},
{
  slug: "grammarly-lite",
 image: "https://images.unsplash.com/photo-1646839083586-cf7747c1e9bb?w=800&h=600&fit=crop", 
  tags: ["AI Tools", "Writing"],
  title: "Grammarly Lite - Quick Grammar Checker",
  client: "Content Blogger",
  startDate: "02 January 2025",
  handover: "18 January 2025",
  overview:
    "Grammarly Lite is a minimal grammar correction tool that helps writers fix mistakes quickly without installing heavy software.",
  whyChooseUs:
    "We provide a simple and fast grammar assistant designed for students and bloggers who need quick checks.",
  challenges:
    "Writers often face delays when using bulky tools. Grammarly Lite keeps it lightweight and efficient.",
  solutions: ["Proofreading", "Error Fixing"],
  finalResult:
    "Users improved their content instantly, with fewer mistakes and better readability."
},
{
  slug: "voicenote-ai",
  image: "https://www.aig123.com/wp-content/uploads/2024/05/voicenotes.png",
  tags: ["AI Tools", "Productivity"],
  title: "VoiceNote AI - Speech to Text Helper",
  client: "Freelancer",
  startDate: "12 February 2025",
  handover: "20 February 2025",
  overview:
    "VoiceNote AI is a small speech-to-text tool that converts short voice notes into clean text for quick documentation.",
  whyChooseUs:
    "We focused on a fast, accurate, and distraction-free voice assistant for everyday note-taking.",
  challenges:
    "Busy professionals needed a hands-free way to capture thoughts on the go.",
  solutions: ["Speech Recognition", "Note Conversion"],
  finalResult:
    "VoiceNote AI made note-taking faster, reducing missed ideas and boosting productivity."
},
{
  slug: "sketch2logo",
  image: "https://i.pinimg.com/736x/ee/5e/4e/ee5e4e598c91c0db669598feb5204f84.jpg",
  tags: ["AI Tools", "Design"],
  title: "Sketch2Logo - AI Logo Maker",
  client: "Startup Designer",
  startDate: "05 March 2025",
  handover: "15 March 2025",
  overview:
    "Sketch2Logo is a fun AI design tool that turns a rough hand-drawn sketch into a clean digital logo.",
  whyChooseUs:
    "We built an easy tool for startups and students to convert ideas into logos without hiring designers.",
  challenges:
    "Non-designers often struggle to make polished visuals from their concepts.",
  solutions: ["Logo Generation", "Design Automation"],
  finalResult:
    "Users created simple, professional logos from sketches, reducing design costs and saving time."
}
];

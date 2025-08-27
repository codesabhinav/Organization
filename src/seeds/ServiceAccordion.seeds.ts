export type ServiceAccordionType = {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
};

export const serviceAccordionData: ServiceAccordionType[] = [
  {
    id: "One",
    question: "What services does your IT company provide?",
    answer:
      "We offer end-to-end IT solutions including software development, cloud services, AI integration, IT consulting, web & mobile app development, cybersecurity, and managed IT support.",
    isOpen: false,
  },
  {
    id: "Two",
    question: "Do you work with small businesses or only large enterprises?",
    answer:
      "We support startups, SMEs, and enterprises alike. Our solutions are scalable and tailored to your business size and budget.",
    isOpen: false,
  },
  {
    id: "Three",
    question: "How do you ensure data security?",
    answer:
      "We follow industry-standard security practices such as data encryption, firewalls, access control, and regular audits. Compliance with GDPR, HIPAA, or other regulations can also be maintained as per client needs.",
    isOpen: true,
  },
  {
    id: "Four",
    question: "What technologies do you specialize in?",
    answer:
      "Our team works with a wide stack including Java, Python, Node.js, React, Angular, PHP, .NET, AWS, Azure, Google Cloud, AI/ML frameworks, and more.",
    isOpen: false,
  },
];
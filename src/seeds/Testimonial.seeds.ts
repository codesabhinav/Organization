export interface TestimonialSlide {
  imageSrc: string;
  text: string;
  title: string;
  designation: string;
}

export const testimonialSlides: TestimonialSlide[] = [
  {
    imageSrc: "https://digiflow-html.netlify.app/assets/images/testimonial/testimonial1-img1.jpg",
    text: "From strategy execution, DigiFlow exceeded our expectations. They helped us build a strong brand identity and launch our story successful digital marketing campaign. Their support has been invaluable. Thank you!",
    title: "Skyline Digital Hub",
    designation: "We're a team",
  },
  {
    imageSrc: "https://digiflow-html.netlify.app/assets/images/testimonial/testimonial1-img2.jpg",
    text: "From strategy execution, DigiFlow exceeded our expectations. They helped us build a strong brand identity and launch our story successful digital marketing campaign. Their support has been invaluable. Thank you!",
    title: "Skyline Digital Hub",
    designation: "We're a team",
  },
  {
    imageSrc: "https://digiflow-html.netlify.app/assets/images/testimonial/testimonial1-img3.jpg",
    text: "From strategy execution, DigiFlow exceeded our expectations. They helped us build a strong brand identity and launch our story successful digital marketing campaign. Their support has been invaluable. Thank you!",
    title: "Skyline Digital Hub",
    designation: "We're a team",
  },
];

export type Testimonial2Type = {
  reviewImageSrc: string;
  description: string;
  name: string;
  date: string;
};


export const testimonial2Items: Testimonial2Type[] = [
  {
    reviewImageSrc: "https://digiflow-html.netlify.app/assets/images/testimonial/testimonial2-img1.jpg",
    description:
      "Incredible AI integration! They transformed our business processes with cutting-edge automation solutions. The team's expertise in both IT infrastructure and AI implementation is unmatched. Our efficiency increased by 300%!",
    name: "Vicky Chen",
    date: "TechCorp Inc. - March 15, 2024",
  },
  {
    reviewImageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description:
      "Outstanding IT solutions with brilliant AI capabilities! They modernized our entire system architecture and implemented intelligent chatbots that handle 80% of customer inquiries. ROI exceeded our expectations within 6 months.",
    name: "Michael Rodriguez",
    date: "InnovateTech Solutions - February 28, 2024",
  },
  {
    reviewImageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    description:
      "Revolutionary approach to business technology! Their AI-powered analytics platform gave us insights we never knew existed. The combination of robust IT infrastructure and intelligent automation is game-changing for our industry.",
    name: "Dr. Emily Watson",
    date: "DataFlow Analytics - January 20, 2024",
  },
];

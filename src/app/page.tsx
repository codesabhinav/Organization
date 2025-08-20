// import Image from "next/image";
// import styles from "./page.module.css";
// import Banner1 from "@/components/banner/Banner1";
// import HeaderSlider from "@/components/heading-slider/HeaderSlider";
// import HeaderSlider2 from "@/components/heading-slider/HeaderSlider2";
// import About1 from "@/components/about/About1";
// import Service1 from "@/components/service/Service1";
// import WhoWeAre from "@/components/who-we-are/WhoWeAre";
// import WorkFlow1 from "@/components/wordflows/WorkFlow1";
// import Project1 from "@/components/project/Project1";
// import Team1 from "@/components/team/Team1";
// import Testimonial1 from "@/components/testimonials/Testimonial1";
// import Blog1 from "@/components/blog/Blog1";
// import Subscribe1 from "@/components/subscribe/Subscribe1";
// import BrandSlider1 from "@/components/brand-slider/BrandSlider1";
// import { serviceCards } from "@/seeds/Service.seeds";
// import { teamMembers } from "@/seeds/Teams.seeds";
// import { blogPosts } from "@/seeds/Blog1.seeds";

// export default function Home() {
//   return (
//     <>
//       <Banner1 />
//       <HeaderSlider />
//       <HeaderSlider2 />
//       <About1 />
//       <Service1
//         serviceData={[...serviceCards].slice(0, 4)}
//         backgroundColor="#171717"
//       />
//       <WhoWeAre backgroundColor="#121212" />
//       <WorkFlow1 />
//       <Project1 />
//       <Team1 teamData={[...teamMembers.slice(0, 4)]} />
//       <Testimonial1 bgClass="tz-bg-neutral3" />
//       <Blog1 blogData={[...blogPosts.slice(0, 3)]} />
//       <Subscribe1 spacingClass="tz-mt-lg-120" />
//     </>
//   );
// }
import About2 from "@/components/about/About2";
import Banner2 from "@/components/banner/Banner2";
import Blog2 from "@/components/blog/Blog2";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlide1 from "@/components/heading-slider/HeaderSlide1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import HeaderSlider2 from "@/components/heading-slider/HeaderSlider2";
import Pricing1 from "@/components/pricing/Pricing1";
import Project2 from "@/components/project/Project2";
import Service2 from "@/components/service/Service2";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial2 from "@/components/testimonials/Testimonial2";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";
import WorkFlow1 from "@/components/wordflows/WorkFlow1";
import { service2Cards } from "@/seeds/Service.seeds";
import React from "react";

function page() {
  return (
    <>
      <Banner2 />
      <HeaderSlider />
      <HeaderSlider2 />
      <About2 />
      <Service2 service2Data={[...service2Cards.slice(0, 4)]} />
      <WhoWeAre backgroundColor="#171717" />
      <Project2 />
      <WorkFlow1 />
      <Pricing1 bgColor="#121212" />
      <Faq1 backgroundColor="#171717" />
      <Testimonial2 />
      <Blog2 />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

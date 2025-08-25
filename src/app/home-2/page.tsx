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
      {/* <Pricing1 bgColor="#121212" /> */}
      <Faq1 backgroundColor="#171717" />
      <Testimonial2 />
      <Blog2 />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

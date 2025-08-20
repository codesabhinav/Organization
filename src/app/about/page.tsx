import About2 from "@/components/about/About2";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import HeaderSlider2 from "@/components/heading-slider/HeaderSlider2";
import Service1 from "@/components/service/Service1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Team1 from "@/components/team/Team1";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import Video from "@/components/video/Video";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";
import { serviceCards } from "@/seeds/Service.seeds";
import { teamMembers } from "@/seeds/Teams.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <HeaderSlider />
      <About2 />
      <Video bgColor="##121212" />
      <Service1 serviceData={[...serviceCards].slice(0, 4)} />
      <WhoWeAre backgroundColor="#121212" />
      <Team1 teamData={[...teamMembers.slice(0, 4)]} />
      <Testimonial1 />
      <Faq1 backgroundColor="#171717" />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

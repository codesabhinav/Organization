import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Pricing1 from "@/components/pricing/Pricing1";
import Service2 from "@/components/service/Service2";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial2 from "@/components/testimonials/Testimonial2";
import WorkFlow1 from "@/components/wordflows/WorkFlow1";
import { service2Cards } from "@/seeds/Service.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Service Two" />
      <HeaderSlider />
      <Service2 service2Data={[...service2Cards.slice(0, 8)]} isInnerPage />
      <WorkFlow1 />
      <Pricing1 />
      <Testimonial2 backgroundColor="#171717" />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

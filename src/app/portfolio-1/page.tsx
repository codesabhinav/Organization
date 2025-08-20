import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Project1 from "@/components/project/Project1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Service One" />
      <HeaderSlider />
      <Project1 />
      <Faq1 backgroundColor="#171717" />
      <Testimonial1 />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

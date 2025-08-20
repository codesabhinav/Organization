import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Project2 from "@/components/project/Project2";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial2 from "@/components/testimonials/Testimonial2";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Service One" />
      <HeaderSlider />
      <Project2 />
      <Faq1 backgroundColor="#171717" />
      <Testimonial2 />
      <Subscribe1 />
    </>
  );
}

export default page;

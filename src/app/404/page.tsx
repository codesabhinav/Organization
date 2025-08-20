import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Error from "@/components/error/Error";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Project1 from "@/components/project/Project1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb
        title="
404"
      />
      <HeaderSlider />
      <Error />
      <Subscribe1 />
    </>
  );
}

export default page;

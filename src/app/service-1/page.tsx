import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Pricing1 from "@/components/pricing/Pricing1";
import Service1 from "@/components/service/Service1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import Video from "@/components/video/Video";
import { serviceCards } from "@/seeds/Service.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Service One" />
      <HeaderSlider />
      <Service1
        serviceData={serviceCards}
        backgroundColor="#121212"
        isInnerPage
      />
      <Video bgColor="#171717" />
      {/* <Pricing1 /> */}
      <Testimonial1 bgClass="tz-bg-neutral2" />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

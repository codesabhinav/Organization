import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import ServiceDetails from "@/components/service-details/ServiceDetails";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Service Details" />
      <HeaderSlider />
      <ServiceDetails />
      <Subscribe1 />
    </>
  );
}

export default page;

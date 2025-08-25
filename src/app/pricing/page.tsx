import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Pricing1 from "@/components/pricing/Pricing1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb
        title="
Pricing Plan"
      />
      <HeaderSlider />
      {/* <Pricing1 /> */}
      <Subscribe1 />
    </>
  );
}

export default page;

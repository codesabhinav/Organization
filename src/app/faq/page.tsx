import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="FAQ'S" />
      <HeaderSlider />
      <Faq1 backgroundColor="#121212" />
      <Subscribe1 />
    </>
  );
}

export default page;

import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import PortfolioDetails from "@/components/portfolio-details/PortfolioDetails";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Service One" />
      <HeaderSlider />
      <PortfolioDetails />
      <Subscribe1 />
    </>
  );
}

export default page;

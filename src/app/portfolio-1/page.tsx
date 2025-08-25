import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import SectionSubtitle from "@/components/section-subtitle/SectionSubtitle";
import SectionTitle from "@/components/section-title/SectionTitle";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import React from "react";

function PortfolioPage() {
  return (
    <>
      <BreadCrumb title="Our Portfolio" />
      <HeaderSlider />
      
      <div className="tz-portfolio tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
        <div className="container">
          <div className="tz-section-top tz-section-top--centered">
            <SectionSubtitle subtitle="OUR PORTFOLIO" />
            <SectionTitle title="EXPLORE OUR LATEST PROJECTS" />
          </div>
          
          <PortfolioGrid />
        </div>
      </div>
      
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default PortfolioPage;

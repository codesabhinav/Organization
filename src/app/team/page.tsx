import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Pricing1 from "@/components/pricing/Pricing1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Team1 from "@/components/team/Team1";
import { teamMembers } from "@/seeds/Teams.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Team" />
      <HeaderSlider />
      <Team1 teamData={[...teamMembers.slice(0, 8)]} isInnerPage />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Pricing1 from "@/components/pricing/Pricing1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import TeamDetails from "@/components/team-details/TeamDetails";
import Team1 from "@/components/team/Team1";
import { teamMembers } from "@/seeds/Teams.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Team" />
      <HeaderSlider />
      <TeamDetails />
      <Subscribe1 />
    </>
  );
}

export default page;

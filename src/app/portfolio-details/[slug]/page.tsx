import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import PortfolioDetails from "@/components/portfolio-details/[slug]/PortfolioDetails";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import { projectData } from "@/seeds/projectData.seeds";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

function PortfolioDetailsPage({ params }: Props) {
  const project = projectData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <BreadCrumb title={project.title} />
      <HeaderSlider />
      <PortfolioDetails project={project} />
      <Subscribe1 />
    </>
  );
}

export default PortfolioDetailsPage;

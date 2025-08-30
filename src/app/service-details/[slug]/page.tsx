import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import ServiceDetails from "@/components/service-details/ServiceDetails";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import { getServiceBySlug, getAllServiceSlugs } from "@/seeds/ServiceDetails.seeds";
import { notFound } from "next/navigation";
import React from "react";

interface ServiceDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailsPageProps) {
  const serviceData = getServiceBySlug(params.slug);
  
  if (!serviceData) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${serviceData.title} - AgnicoreAI`,
    description: serviceData.description,
    keywords: `${serviceData.title}, ${serviceData.features.join(", ")}`,
    openGraph: {
      title: serviceData.title,
      description: serviceData.description,
      type: "website",
    },
  };
}

function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const serviceData = getServiceBySlug(params.slug);

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <BreadCrumb title={serviceData.title} />
      <HeaderSlider />
      <ServiceDetails serviceData={serviceData} />
      <Subscribe1 />
    </>
  );
}

export default ServiceDetailsPage;


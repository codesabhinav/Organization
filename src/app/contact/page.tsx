import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import ContactForm from "@/components/contact/ContactForm";
import Error from "@/components/error/Error";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Map from "@/components/map/Map";
import Project1 from "@/components/project/Project1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb
        title="
Contact Us"
      />
      <HeaderSlider />
      <ContactForm />
      <Map />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

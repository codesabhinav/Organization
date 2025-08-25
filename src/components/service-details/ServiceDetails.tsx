import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import ServiceDetailsCounter from "./ServiceDetailsCounter";
import ServiceDetailsAccordion from "./ServiceDetailsAccordion";
import { ServiceDetailsType } from "../../seeds/ServiceDetails.seeds";

interface ServiceDetailsProps {
  serviceData?: ServiceDetailsType;
}

function ServiceDetails({ serviceData }: ServiceDetailsProps) {
  return (
    <div className="tz-service-details">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-9">
            <div className="tz-service-details__image">
              <img src={serviceData?.images.main || "/images/service/service-details-img1.jpg"} alt={serviceData?.title || "Service"} />
            </div>
            <h5 className="tz-service-details__title tz-display-4 tz-text-neutral5 text-uppercase tz-pt-30 tz-pt-lg-60">
              {serviceData?.mainTitle || "Web Design & UI/UX Development"}
            </h5>
            <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
              {serviceData?.description || "we specialize in delivering cutting-edge digital solutions tailored to your business needs. Our team of experts is dedicated to helping you achieve your goals through innovative strategies, creative design, and advanced technology."}
            </p>
            <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
              {serviceData?.overview || "A strong brand identity sets you apart from the competition. Our branding services include logo design, color palette creation, typography selection, and brand guideline development."}
            </p>
            <div className="row g-4 d-flex justify-content-between tz-pt-30 tz-pt-lg-60">
              <div className="col-md-8">
                <h2 className="tz-service-details__subtitle tz-text-neutral5">
                  Service Overview
                </h2>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  {serviceData?.overview || "We also offer graphic design services for marketing materials such as business cards, brochures, social media graphics, and more. Our goal is to create a memorable brand that resonates with your target audience."}
                </p>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  In today's competitive landscape, effective digital marketing
                  is essential for growth. Improve your website's
                  visibility&nbsp; Our digital marketing services include:
                </p>
                <div className="tz-service-details__image tz-pt-10 tz-pt-lg-32">
                  <img
                    src={serviceData?.images.overview || "/images/service/service-details-img2.jpg"}
                    alt={serviceData?.title || "Service Overview"}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <ServiceDetailsCounter stats={serviceData?.stats} />
              </div>
            </div>
            <div className="row g-4 tz-pt-30 tz-pt-lg-60">
              <div className="col-md-8">
                <div className="tz-service-details__image">
                  <img
                    src={serviceData?.images.feature1 || "/images/service/service-details-img3.jpg"}
                    alt={serviceData?.title || "Service Feature"}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="tz-service-details__image">
                  <img
                    src={serviceData?.images.feature2 || "/images/service/service-details-img4.jpg"}
                    alt={serviceData?.title || "Service Feature"}
                  />
                </div>
              </div>
            </div>
            <div className="row g-4 d-flex justify-content-between tz-pt-30 tz-pt-lg-60">
              <div className="col-md-6">
                <h3 className="tz-service-details__subtitle tz-text-neutral5">
                  Key Features
                </h3>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  {serviceData?.keyFeatures || "A strong brand identity is essential for standing out in today's competitive market. comprehensive brand design services, including logo creation, color palettes, typography selection."}
                </p>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  and visual guidelines that align with your brand's values and
                  message. I help you create a cohesive look across all
                  platforms to image.
                </p>
              </div>
              <div className="col-md-5">
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  Engage with your target audience, build brand awareness, and
                  foster loyalty through expertly managed social media accounts.
                </p>
                <ul className="tz-service-details__list tz-text-neutral6 tz-text-l fw-light">
                  {serviceData?.features?.map((feature, index) => (
                    <li key={index} className="tz-service-details__item">
                      <span className="tz-service-details__list-icon">
                        <i className="ph ph-check" />
                      </span>
                      {feature}
                    </li>
                  )) || (
                    <>
                      <li className="tz-service-details__item">
                        <span className="tz-service-details__list-icon">
                          <i className="ph ph-check" />
                        </span>
                        Frontend development with HTML, JavaScript
                      </li>
                      <li className="tz-service-details__item">
                        <span className="tz-service-details__list-icon">
                          <i className="ph ph-check" />
                        </span>
                        CMS integration (WordPress, Webflow)
                      </li>
                      <li className="tz-service-details__item">
                        <span className="tz-service-details__list-icon">
                          <i className="ph ph-check" />
                        </span>
                        Custom coding solutions
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="row g-4 d-flex justify-content-between tz-pt-30 tz-pt-lg-60">
              <div className="col-md-5">
                <div className="tz-service-details__image">
                  <img
                    src={serviceData?.images.keyFeature || "/images/service/service-details-img5.jpg"}
                    alt={serviceData?.title || "Key Feature"}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <ServiceDetailsAccordion />
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <ServiceSidebar currentServiceSlug={serviceData?.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;

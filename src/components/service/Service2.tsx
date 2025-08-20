"use client";

import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import {
  service2Cards,
  serviceCards,
  ServiceCardType,
} from "../../seeds/Service.seeds";
import Service2Card from "./Service2Card";
import Link from "next/link";
import SectionTop from "../section-top/SectionTop";

function Service2({
  service2Data,
  bgColor = "#121212",
  isInnerPage = false,
}: {
  service2Data: ServiceCardType[];
  bgColor?: string;
  isInnerPage?: boolean;
}) {
  const [activeCard, setActiveCard] = React.useState<number>(2);
  return (
    <>
      <section className="tz-service2" style={{ backgroundColor: bgColor }}>
        <div className="container">
          {isInnerPage ? (
            <SectionTop
              title="Our Services"
              description="Our exclusive Services"
            />
          ) : (
            <div className="tz-section-top">
              <div className="row g-4">
                <div className="col-md-8">
                  <SectionSubtitle subtitle="Our Services" />
                  <SectionTitle title="Our exclusive Services" />
                </div>
                <div className="col-md-4">
                  <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                    <Link
                      href="#"
                      className="tz-button text-uppercase fw-medium tz-text-m"
                    >
                      View More
                    </Link>
                    <Link className="tz-button-circle" href="#">
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row g-4">
            {service2Data &&
              service2Data.map((card, index) => (
                <div className="col-md-6 col-xl-3" key={index}>
                  <Service2Card
                    card={card}
                    index={index + 1}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service2;

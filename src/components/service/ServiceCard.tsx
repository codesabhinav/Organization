import Link from "next/link";
import React from "react";

const getServiceSlug = (title: string): string => {
  const slugMap: { [key: string]: string } = {
    "Web Development": "web-development",
    "Software Development": "software-development",
    "AI Development": "ai-development",
    "Digital Marketing": "digital-marketing",
    "ERP Development": "erp-development",
    "Cybersecurity service": "cybersecurity-service",
    "Internet on things (IOT)": "internet-of-things-iot",
    "Dedicated resource": "dedicated-resource",
  };
  
  return slugMap[title] || "web-development";
};

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  activeCard: number | null;
  index: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  number,
  index,
  activeCard,
  setActiveCard,
}) => {
  return (
    <div className="col-md-6 col-xl-3">
      <div
        className={`tz-service1-card ${activeCard === index ? "active" : ""}`}
        onMouseEnter={() => {
          if (setActiveCard) {
            setActiveCard(index);
          }
        }}
        // onMouseLeave={() => {
        //   if (setActiveCard) {
        //     setActiveCard(null);
        //   }
        // }}
      >
        <Link href={`/service-details/${getServiceSlug(title)}`} className="tz-text-neutral4 d-block">
          <span className="tz-service1-card__number">{number}</span>
          <div className="tz-service1-card__content">
            <div className="tz-service1-card__shape d-flex justify-content-center tz-mb-20 tz-mb-lg-40">
              <img
                src="https://digiflow-html.netlify.app/assets/images/service/service1-card-shape1.svg"
                alt="Web Design Icon"
              />
            </div>
            <h3 className="tz-service1-card__title text-uppercase text-center">
              {title}
            </h3>
            <p className="tz-service1-card__desc fw-medium tz-text-l text-center mb-0">
              {description}
            </p>
            <div className="tz-service1-card__footer">
              <div className="row">
                <div className="col-6">
                  <h5 className="mb-0 text-uppercase tz-text-neutral4">
                    Read More
                  </h5>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-end">
                    <img
                      src="https://digiflow-html.netlify.app/assets/images/service/service1-card-icon.png"
                      alt="Arrow Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tz-service1-card__circle" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

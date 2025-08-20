import React from "react";
import { ServiceCardType } from "../../seeds/Service.seeds";
import Link from "next/link";

interface Service2CardProps {
  card: ServiceCardType;
  index: number;
  activeCard?: number;
  setActiveCard?: React.Dispatch<React.SetStateAction<number>>;
}

function Service2Card({
  card,
  index,
  activeCard,
  setActiveCard,
}: Service2CardProps) {
  return (
    <div
      className={`tz-service2-card ${activeCard === index ? "active" : ""}`}
      onMouseEnter={() => setActiveCard && setActiveCard(index)}
    >
      <div className="tz-service2-card__content">
        <img
          src="/images/service/service2-card-shape.svg"
          alt="shape"
          className="tz-service2-card__shape"
        />
        <h4 className="tz-service2-card__number tz-text-neutral6">
          {card.number}
        </h4>
        <div className="tz-service2-card__icon">
          <img src={card.iconSrc} alt="icon" className="svg" />
        </div>
        <h4 className="tz-service2-card__title tz-text-neutral5 text-uppercase">
          {card.title}
        </h4>
        <p className="tz-service2-card__desc tz-text-l tz-text-neutral6">
          {card.description}
        </p>
      </div>
      <div className="tz-service2-card__footer">
        <Link href={card.link}>
          <div className="row">
            <div className="col-9">
              <h5 className="tz-service2-card__btn mb-0 text-uppercase">
                View Details
              </h5>
            </div>
            <div className="col-3">
              <div className="tz-service2-card__btn-icon d-flex justify-content-end">
                <img
                  src="/images/service/service2-card-arrow.svg"
                  alt="Arrow Icon"
                  className="svg"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Service2Card;

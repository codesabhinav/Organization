"use client";
import React from "react";
import CountUp from "react-countup";

interface ServiceDetailsCounterProps {
  stats?: {
    projects: number;
    experience: number;
    clients: number;
    satisfaction: number;
  };
}

function ServiceDetailsCounter({ stats }: ServiceDetailsCounterProps) {
  return (
    <div className="tz-service-details-counter">
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            <CountUp end={stats?.experience || 17} enableScrollSpy={true} />
          </span>
          +
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Years of experience this field</span>
        </p>
      </div>
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            {" "}
            <CountUp end={stats?.projects || 40} enableScrollSpy={true} />
          </span>
          +
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Number of projects completed</span>
        </p>
      </div>
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            {" "}
            <CountUp end={stats?.clients || 7} enableScrollSpy={true} />
          </span>
          +
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Number of clients served</span>
        </p>
      </div>
      <div className="tz-service-details-counter__item">
        <h1 className="tz-service-details-counter__number tz-display-3 tz-text-neutral5">
          <span className="tz-cn">
            {" "}
            <CountUp end={stats?.satisfaction || 98} enableScrollSpy={true} />
          </span>
          %
        </h1>
        <p className="tz-service-details-counter__desc tz-text-neutral6 tz-text-l fw-light">
          <span>Client satisfaction rate</span>
        </p>
      </div>
    </div>
  );
}

export default ServiceDetailsCounter;

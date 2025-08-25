import Link from "next/link";
import React from "react";
import { ProjectType } from "../../../seeds/projectData.seeds";

type Props = { project: ProjectType };

function PortfolioDetails({ project }: Props) {
  return (
    <div className="tz-portfolio-details">
      <div className="container">
        {/* Back to Portfolio Button */}
        <div className="tz-portfolio-details__back-btn mb-4">
          <Link 
            href="/portfolio-1" 
            className="tz-button tz-button--outline tz-text-m"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#c9f31d',
              border: '1px solid #c9f31d',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <i className="ph ph-arrow-left" />
            Back to Portfolio
          </Link>
        </div>

        <div className="tz-portfolio-details__image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="row g-4 d-flex justify-content-between tz-pt-lg-30 tz-pt-20 tz-pb-lg-60 tz-pb-30">
          <div className="col-md-4">
            <div className="tz-portfolio-details__name tz-display-3 tz-text-neutral5 text-uppercase">
              {project.title}
            </div>
          </div>

          <div className="col-md-4">
            <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
              {project.overview}
            </p>
          </div>

          <div className="col-md-3">
            <ul className="tz-portfolio-details-list tz-text-l">
              <li className="tz-portfolio-details-list__item">
                <span className="tz-portfolio-details-list__label">Client:</span>
                <span className="tz-portfolio-details-list__value">{project.client}</span>
              </li>
              <li className="tz-portfolio-details-list__item">
                <span className="tz-portfolio-details-list__label">Start Date:</span>
                <span className="tz-portfolio-details-list__value">{project.startDate}</span>
              </li>
              <li className="tz-portfolio-details-list__item">
                <span className="tz-portfolio-details-list__label">Handover:</span>
                <span className="tz-portfolio-details-list__value">{project.handover}</span>
              </li>
            </ul>
          </div>
        </div>

        <h1 className="tz-portfolio-details__subtitle tz-text-neutral5">Projects Overview</h1>
        <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
          {project.whyChooseUs}
        </p>

        <div className="row g-4 d-flex justify-content-between tz-pt-lg-30 tz-pt-20">
          <div className="col-md-5">
            <h2 className="tz-portfolio-details__subtitle tz-text-neutral5 tz-pt-20 tz-pt-lg-40">
              Why Choose Us for Your Next Project?
            </h2>
            <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
              {project.whyChooseUs}
            </p>
            <div className="tz-portfolio-details__image tz-pt-20 tz-pt-lg-40">
              {/* keep a second image if you have one; otherwise reuse */}
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          <div className="col-md-6">
            <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
              {project.whyChooseUs}
            </p>
            <h2 className="tz-portfolio-details__subtitle tz-text-neutral5 tz-pt-20 tz-pt-lg-40">
              Challenges &amp; Constraints
            </h2>
            <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
              {project.challenges}
            </p>

            <div className="row g-2 tz-pt-10 tz-pt-lg-30">
              <div className="col-md-6">
                {project.solutions.slice(0, 3).map((s) => (
                  <p key={s} className="tz-portfolio-details__desc tz-text-neutral5 tz-text-l fw-light">
                    + {s}
                  </p>
                ))}
              </div>
              <div className="col-md-6">
                {project.solutions.slice(3).map((s) => (
                  <p key={s} className="tz-portfolio-details__desc tz-text-neutral5 tz-text-l fw-light">
                    + {s}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h3 className="tz-portfolio-details__subtitle tz-text-neutral5 tz-pt-20 tz-pt-lg-40">
          Projects Solution
        </h3>
        <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
          {project.finalResult}
        </p>

        <div className="row g-2 tz-pt-10 tz-pt-lg-30">
          <div className="col-md-2">
            {project.solutions.slice(0, 3).map((s) => (
              <p key={s} className="tz-portfolio-details__desc tz-text-neutral5 tz-text-l fw-light">
                + {s}
              </p>
            ))}
          </div>
          <div className="col-md-3">
            {project.solutions.slice(3).map((s) => (
              <p key={s} className="tz-portfolio-details__desc tz-text-neutral5 tz-text-l fw-light">
                + {s}
              </p>
            ))}
          </div>
        </div>

        <h4 className="tz-portfolio-details__subtitle tz-text-neutral5 tz-pt-30 tz-pt-lg-60">
          Final Result
        </h4>
        <p className="tz-portfolio-details__desc tz-text-neutral6 tz-text-l fw-light">
          {project.finalResult}
        </p>

        <div className="tz-portfolio-details__footer d-flex justify-content-between align-items-center tz-pt-60 tz-pt-lg-120">
          <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
            <Link href="/portfolio-1" className="tz-button-yellow text-uppercase fw-medium tz-text-m">
              View All Projects
            </Link>
            <Link className="tz-button-yellow-circle" href="/portfolio-1">
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
          <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
            <Link href="/contact" className="tz-button-white text-uppercase fw-medium tz-text-m">
              Start Your Project
            </Link>
            <Link className="tz-button-white-circle" href="/contact">
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetails;

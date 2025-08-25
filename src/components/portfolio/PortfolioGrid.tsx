import Link from "next/link";
import React from "react";
import { projectData } from "@/seeds/projectData.seeds";

function PortfolioGrid() {
  return (
    <div className="tz-portfolio-grid">
      <div className="container">
        <div className="row g-4">
          {projectData.map((project) => (
            <div key={project.slug} className="col-lg-4 col-md-6">
              <div className="tz-portfolio-card">
                <div className="tz-portfolio-card__image">
                  <img src={project.image} alt={project.title} />
                  <div className="tz-portfolio-card__overlay">
                    <Link 
                      href={`/portfolio-details/${project.slug}`}
                      className="tz-portfolio-card__link"
                    >
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>
                </div>
                <div className="tz-portfolio-card__content">
                  <div className="tz-portfolio-card__tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tz-portfolio-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="tz-portfolio-card__title">
                    <Link href={`/portfolio-details/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="tz-portfolio-card__description">
                    {project.overview.substring(0, 120)}...
                  </p>
                  <div className="tz-portfolio-card__meta">
                    <span className="tz-portfolio-card__client">
                      Client: {project.client}
                    </span>
                    <span className="tz-portfolio-card__date">
                      {project.startDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioGrid;

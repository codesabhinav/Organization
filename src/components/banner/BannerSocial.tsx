import React from "react";

function BannerSocial() {
  return (
    <>
      <div className="tz-wwa1-card__social-links d-flex flex-column align-items-center gap-2">
        <h5 className="tz-wwa1-card__social-follow">
          <a href="#">Follow US</a>
        </h5>
        <div className="tz-wwa1-card__social-line" />
        {/* <div className="tz-wwa1-card__social-logo">
          <a href="#">
            <i className="ph ph-meta-logo" />
          </a>
        </div>
        <div className="tz-wwa1-card__social-logo">
          <a href="#">
            <i className="ph ph-x-logo" />
          </a>
        </div> */}
        <div className="tz-wwa1-card__social-logo">
          <a href="https://www.instagram.com/agnicoreai?igsh=cm05aGxuZzlhZGRh" target="blank">
            <i className="ph ph-instagram-logo" />
          </a>
        </div>
        <div className="tz-wwa1-card__social-logo">
          <a href="https://www.linkedin.com/company/agnicoreai/" target="blank">
            <i className="ph ph-linkedin-logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default BannerSocial;

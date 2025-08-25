import React from "react";
import Link from "next/link";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <>
      <footer className="tz-footer d-flex align-items-center justify-content-end">
        <div className="tz-footer__shape" />
        <img
          src="https://digiflow-html.netlify.app/assets/images/footer/footer-texture.png"
          alt="texture"
          className="tz-footer__texture"
        />
        <div className="container">
          <div className="tz-footer__wrapper">
            <div className="row g-4 d-flex justify-content-between">
              {/* Logo and tagline column */}
              <div className="col-xl-3">
                <div className="tz-footer__brand">
                  <Link
                    href="/"
                    className="tz-footer__logo tz-mb-lg-80 tz-mb-40"
                  >
                    <img src="/site-logo.svg" alt="DigiFlow" />
                  </Link>
                  <p className="tz-footer__tagline tz-text-l tz-text-neutral6 fw-light">
                    We're your trusted partner in maintaining and enhancing the
                    performance
                  </p>
                </div>
                {/* <FooterSocial /> */}
              </div>
              <div className="col-xl-8">
                <div className="tz-footer-right">
                  <img
                    src="https://digiflow-html.netlify.app/assets/images/footer/shadow-brand-title.png"
                    alt="shadow-img"
                    className="tz-footer__shadow"
                  />
                  <div className="tz-footer-right__content">
                    <div className="tz-footer__nav">
                      <div className="tz-footer__menu tz-text-l">
                        <Link href="/" className="tz-footer__menu-link">
                          HOME
                        </Link>
                        <Link href="/about" className="tz-footer__menu-link">
                          ABOUT US
                        </Link>
                      </div>
                      <div className="tz-buttons">
                        <Link
                          href="/contact"
                          className="tz-button-yellow text-uppercase fw-medium tz-text-m"
                        >
                          Contact Us
                        </Link>
                        <Link
                          href="/contact"
                          className="tz-button-yellow-circle"
                        >
                          <i className="ph ph-arrow-up-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="row g-4 tz-pt-30 tz-pt-lg-60 tz-pb-30 tz-pb-lg-60">
                      {/* Company column */}
                      <div className="col-md-4">
                        <div className="tz-footer__section">
                          <h3 className="tz-footer__heading">Company</h3>
                          <ul className="tz-footer__links">
                            <li>
                              <Link
                                href="/about"
                                className="tz-footer__link tz-text-l"
                              >
                                About Us
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/service-1"
                                className="tz-footer__link tz-text-l"
                              >
                                Our Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/portfolio-1"
                                className="tz-footer__link tz-text-l"
                              >
                                Our portfolio
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                href="/team"
                                className="tz-footer__link tz-text-l"
                              >
                                Our Team
                              </Link>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                      {/* Solutions column */}
                      <div className="col-md-4">
                        <div className="tz-footer__section">
                          <h3 className="tz-footer__heading">Our Solutions</h3>
                          <ul className="tz-footer__links">
                            <li>
                              <Link
                                href="/service-details/web-development"
                                className="tz-footer__link tz-text-l"
                              >
                                Web Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/service-details/software-development"
                                className="tz-footer__link tz-text-l"
                              >
                               software-development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/service-details/digital-marketing"
                                className="tz-footer__link tz-text-l"
                              >
                                digital-marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/service-details/erp-development"
                                className="tz-footer__link tz-text-l"
                              >
                                erp-development
                              </Link>
                            </li>
                             <li>
                              <Link
                                href="/service-details/cybersecurity-service"
                                className="tz-footer__link tz-text-l"
                              >
                                Cybersecurity Service
                              </Link>
                            </li>
                             <li>
                              <Link
                                href="/service-details/internet-of-things-iot"
                                className="tz-footer__link tz-text-l"
                              >
                                Internet of Things (IoT)
                              </Link>
                            </li>
                             <li>
                              <Link
                                href="/service-details/dedicated-resource"
                                className="tz-footer__link tz-text-l"
                              > 
                                Dedicated Resource
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Resources column */}
                      <div className="col-md-4">
                        <div className="tz-footer__section">
                          <h3 className="tz-footer__heading">Resources</h3>
                          <ul className="tz-footer__links">
                            <li>
                              <Link
                                href="/faq"
                                className="tz-footer__link tz-text-l"
                              >
                                Faq
                              </Link>
                            </li>
                            {/* <li>
                              <Link
                                href="/blog"
                                className="tz-footer__link tz-text-l"
                              >
                                Our Blog
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/contact"
                                className="tz-footer__link tz-text-l"
                              >
                                Support Area
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                href="/faq"
                                className="tz-footer__link tz-text-l"
                              >
                                Privacy Policy
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Copyright row */}
                    <div className="tz-footer__bottom">
                      <div className="tz-footer__copyright tz-text-l">
                        Copyright © 2025 AgnicoreAI
                      </div>
                      {/* <div className="tz-footer__credits tz-text-l">
                        Designed By 
                        <Link href="/" className="tz-footer__credit-link">
                           Om Chevli
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

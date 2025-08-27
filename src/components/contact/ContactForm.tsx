import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import ContactInfoBox from "./ContactInfoBox";
import ContactFormBox from "./ContactFormBox";

function ContactForm() {
  return (
    <div className="tz-contact tz-bg-neutral3 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 relative   ">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <SectionSubtitle subtitle="CONTACT US" />
          <SectionTitle title=" LET’S START A CONVERSATION" />
        </div>
       <div className="row gy-5 gx-60 items-stretch  display: flex;
  align-items: stretch;">
  {/* LEFT COLUMN */}
  <div className="col-lg-4">
    <div className="h-full">
      <ContactInfoBox
        icon="ph-phone-call"
        title="Call US 24/7"
        link="+91 9898649660"
        href="tel:+919898649660"
      />
      <ContactInfoBox
        icon="ph-envelope-simple-open"
        title="Email Us Anytime"
        link="info@agnicoreai.tech"
        href="mailto:info@agnicoreai.tech"
      />
      <ContactInfoBox
        icon="ph-map-pin"
        title="Head Office"
        link={`1/436 Canterbury Road, Vermont South, Victoria, Australia`}
        href="#"
      />
      <ContactInfoBox
        icon="ph-map-pin"
        title="Branch Office"
        link={`Mondeal Height, Ahmedabad, India`}
        href="#"
      />
      <ContactInfoBox
        icon="ph-map-pin"
        title="Branch Office 2"
        link={`Bethi Colony, Surat`}
        href="#"
      />
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="col-lg-8">
    <div className="tz-contact-form h-full">
      <div className="tz-section-top text-center">
        <h5 className="tz-section-top__subtitle tz-text-primary">Get In Touch</h5>
        <h3 className="tz-section-top__title tz-text-neutral5 mb-0">
          Have Any&nbsp;Question?
        </h3>
      </div>
      <ContactFormBox />
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default ContactForm;

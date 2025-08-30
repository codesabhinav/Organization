import About2 from "@/components/about/About2";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Faq1 from "@/components/faq/Faq1";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import HeaderSlider2 from "@/components/heading-slider/HeaderSlider2";
import Service1 from "@/components/service/Service1";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import Team1 from "@/components/team/Team1";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import Video from "@/components/video/Video";
import WhoWeAre from "@/components/who-we-are/WhoWeAre";
import { serviceCards } from "@/seeds/Service.seeds";
import { teamMembers } from "@/seeds/Teams.seeds";
import React from "react";

function Page() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <HeaderSlider />
      <div className="bg-black text-white min-vh-100 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-11 col-lg-9 col-xl-8">
              <h1 style={{color:'#c9f31d'}} className="display-5 display-md-4 fw-bold  mb-4 text-center">
                AgnicoreAI
              </h1>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                At <span className="" style={{color:'#c9f31d'}} >Agni coreAI</span>, we believe
                the future belongs to intelligent systems that seamlessly integrate
                into businesses, transforming the way humans and technology
                interact. Headquartered in the <b>United States and India</b>, we
                are an innovation-driven AI company dedicated to building products
                and services that unlock the full potential of Artificial
                Intelligence for enterprises and developers worldwide.
              </p>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                Our mission is simple yet powerful:{" "}
                <b>
                  to democratize advanced AI technologies and make them accessible,
                  scalable, and impactful across industries.
                </b>
              </p>
              <h2 className="h4 h3-md fw-bold mt-5">What We Do</h2>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                AgnicoreAI focuses on creating next-generation AI products designed
                around three core pillars:
              </p>
              <h3 className="h2 h5-md fw-semibold  mt-4" style={{color:'#c9f31d'}}>
                MCP (Multi-Core Processing for AI Workloads)
              </h3>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                We design optimized AI solutions that harness the power of
                multi core processing. Our MCP based frameworks ensure that
                enterprises can handle heavy AI workloads such as real-time
                analytics, predictive modeling, and autonomous decision
                systems without bottlenecks. This enables organizations to achieve
                faster insights, lower latency, and more cost-effective deployment
                of their AI strategies.
              </p>
              <h3 className="h2 h5-md fw-semibold  mt-4" style={{color:'#c9f31d'}}>
                MVC (Model-View-Controller for AI Applications)
              </h3>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                AI applications often fail without robust design principles. At
                AgnicoreAI, we extend the traditional MVC architecture into the AI
                ecosystem, ensuring that models, data pipelines, and user interfaces
                are seamlessly connected. This approach simplifies development,
                accelerates deployment, and makes AI products more user-friendly and
                enterprise ready. Our MVC-driven frameworks empower developers to
                build modular, scalable, and maintainable AI applications at speed.
              </p>
              <h3 className="h2 h5-md fw-semibold  mt-4" style={{color:'#c9f31d'}}>
                LLM (Large Language Models)
              </h3>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                Language is the foundation of intelligence, and AgnicoreAI
                specializes in building and fine tuning Large Language Models (LLMs)
                tailored to industry specific needs. From conversational AI to
                knowledge assistants and automated content generation, our LLM
                solutions enable businesses to leverage the power of natural
                language in meaningful ways. By combining domain-specific training
                with ethical AI practices, we deliver models that are accurate,
                efficient, and aligned with business goals.
              </p>

              {/* Why AgnicoreAI */}
              <h2 className="h4 h3-md fw-bold mt-5">
                Why AgnicoreAI?
              </h2>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-black text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                  <b>Dual Presence in US & India →</b> Combining global innovation
                  with scalable execution.
                </li>
                <li className="list-group-item bg-black text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                  <b>Cutting-Edge R&D →</b> Continuous investment in AI research,
                  ensuring our clients always stay ahead.
                </li>
                <li className="list-group-item bg-black text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                  <b>Enterprise-Grade Solutions →</b> Products built with
                  scalability, compliance, and security at their core.
                </li>
                <li className="list-group-item bg-black text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                  <b>Cross-Industry Impact →</b> Serving industries such as
                  healthcare, finance, retail, logistics, and more.
                </li>
              </ul>

              {/* Vision */}
              <h2 className="h4 h3-md fw-bold mt-5">Our Vision</h2>
              <p className="text-secondary fs-6 fs-md-5 lh-base lh-md-lg">
                We envision a future where AI is not just a tool but a trusted
                partner that empowers businesses and individuals alike. AgnicoreAI
                is committed to shaping that future by building technologies that
                are intelligent, adaptive, and ethical.
              </p>

              <p style={{color:'#c9f31d'}} className=" fw-semibold fs-6 fs-md-5 lh-base lh-md-lg">
                Together, let’s ignite the core of intelligence and drive innovation
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Video bgColor="#121212" />
    </>
  );
}

export default Page;
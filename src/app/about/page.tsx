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

function page() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <HeaderSlider />
      {/* <About2 />*/}
      <div className="bg-black text-white min-h-screen py-16" >
        <div className="max-w-4xl mx-auto px-6 space-y-10 py-5" style={{ maxWidth:"1300px", margin:"0 auto" }}>
          
          {/* Company Name */}
          <h1 className="text-4xl font-bold text-green-400">AgnicoreAI</h1>

          {/* Intro */}
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-green-400">AgnicoreAI</span>, we believe the future 
            belongs to intelligent systems that seamlessly integrate into businesses, 
            transforming the way humans and technology interact. Headquartered in the 
            <b> United States and India</b>, we are an innovation-driven AI company 
            dedicated to building products and services that unlock the full potential 
            of Artificial Intelligence for enterprises and developers worldwide.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our mission is simple yet powerful: 
            <b> to democratize advanced AI technologies and make them accessible, scalable, 
            and impactful across industries.</b>
          </p>

          {/* What We Do */}
          <h2 className="text-2xl font-bold mt-10">What We Do</h2>
          <p className="text-gray-300 leading-relaxed">
            AgnicoreAI focuses on creating next-generation AI products designed 
            around three core pillars:
          </p>

          {/* MCP */}
          <h3 className="text-xl font-semibold text-green-400 mt-6">
            MCP (Multi-Core Processing for AI Workloads)
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We design optimized AI solutions that harness the power of multi-core 
            processing. Our MCP-based frameworks ensure that enterprises can handle 
            heavy AI workloads—such as real-time analytics, predictive modeling, and 
            autonomous decision systems—without bottlenecks. This enables organizations 
            to achieve faster insights, lower latency, and more cost-effective 
            deployment of their AI strategies.
          </p>

          {/* MVC */}
          <h3 className="text-xl font-semibold text-green-400 mt-6">
            MVC (Model-View-Controller for AI Applications)
          </h3>
          <p className="text-gray-300 leading-relaxed">
            AI applications often fail without robust design principles. At AgnicoreAI, 
            we extend the traditional MVC architecture into the AI ecosystem, ensuring 
            that models, data pipelines, and user interfaces are seamlessly connected. 
            This approach simplifies development, accelerates deployment, and makes AI 
            products more user-friendly and enterprise-ready. Our MVC-driven frameworks 
            empower developers to build modular, scalable, and maintainable AI 
            applications at speed.
          </p>

          {/* LLM */}
          <h3 className="text-xl font-semibold text-green-400 mt-6">
            LLM (Large Language Models)
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Language is the foundation of intelligence, and AgnicoreAI specializes 
            in building and fine-tuning Large Language Models (LLMs) tailored to 
            industry-specific needs. From conversational AI to knowledge assistants 
            and automated content generation, our LLM solutions enable businesses 
            to leverage the power of natural language in meaningful ways. By combining 
            domain-specific training with ethical AI practices, we deliver models that 
            are accurate, efficient, and aligned with business goals.
          </p>

          {/* Why AgnicoreAI */}
          <h2 className="text-2xl font-bold mt-10">Why AgnicoreAI?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><b>Dual Presence in US & India →</b> Combining global innovation with scalable execution.</li>
            <li><b>Cutting-Edge R&D →</b> Continuous investment in AI research, ensuring our clients always stay ahead.</li>
            <li><b>Enterprise-Grade Solutions →</b> Products built with scalability, compliance, and security at their core.</li>
            <li><b>Cross-Industry Impact →</b> Serving industries such as healthcare, finance, retail, logistics, and more.</li>
          </ul>

          {/* Vision */}
          <h2 className="text-2xl font-bold mt-10">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a future where AI is not just a tool but a trusted partner 
            that empowers businesses and individuals alike. AgnicoreAI is committed 
            to shaping that future by building technologies that are intelligent, 
            adaptive, and ethical.
          </p>

          <p className="text-green-400 font-semibold">
            Together, let’s ignite the core of intelligence and drive innovation forward.
          </p>

        </div>
       </div>
      <Video bgColor="##121212" /> 
      {/* <Service1 serviceData={[...serviceCards].slice(0, 4)} />
      <WhoWeAre backgroundColor="#121212" />
      <Team1 teamData={[...teamMembers.slice(0, 4)]} />
      <Testimonial1 />
      <Faq1 backgroundColor="#171717" />
      <Subscribe1 spacingClass="tz-mt-lg-120" /> */}
    </>
  );
}

export default page;

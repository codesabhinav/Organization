import BlogDetails from "@/components/blog-details/BlogDetails";
import BlogPage from "@/components/blog/BlogPage";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import RelatedArticles from "@/components/related-articles/RelatedArticles";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import { blogPosts } from "@/seeds/Blog1.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <HeaderSlider />
      <BlogDetails />
      <RelatedArticles />
      <Subscribe1 spacingClass="tz-mt-lg-120" />
    </>
  );
}

export default page;

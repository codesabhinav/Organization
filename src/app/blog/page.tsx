import BlogPage from "@/components/blog/BlogPage";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import HeaderSlider from "@/components/heading-slider/HeaderSlider";
import Pagination from "@/components/pagination/Pagination";
import Subscribe1 from "@/components/subscribe/Subscribe1";
import { blogPosts } from "@/seeds/Blog1.seeds";
import React from "react";

function page() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <HeaderSlider />
      <BlogPage
        pagination
        blogData={[...blogPosts.slice(0, 8)]}
        backgroundColor="#121212"
      />

      <Subscribe1 />
    </>
  );
}

export default page;

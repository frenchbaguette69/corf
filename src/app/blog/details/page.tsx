import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import BlogDetailsContent from "../../../components/Blog/BlogDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImg="/img/page-banner-bg3.jpg"
      />

      <BlogDetailsContent />

      <Subscribe />

      <Footer />
    </>
  );
}

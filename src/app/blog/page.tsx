import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import BlogPost from "../../components/Blog/BlogPost";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Meest recente blogs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        bgImg="/img/page-banner-bg2.jpg"
      />

      <BlogPost />

      <Subscribe />

      <Footer />
    </>
  );
}

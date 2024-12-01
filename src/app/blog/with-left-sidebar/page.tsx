import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import BlogWithLeftSidebar from "../../../components/Blog/BlogWithLeftSidebar";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
        bgImg="/img/page-banner-bg3.jpg"
      />

      <BlogWithLeftSidebar />

      <Subscribe />

      <Footer />
    </>
  );
}

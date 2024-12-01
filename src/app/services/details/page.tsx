import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import ServiceDetailsContent from "../../../components/Services/ServiceDetailsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Details"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <ServiceDetailsContent />

      <Subscribe />

      <Footer />
    </>
  );
}

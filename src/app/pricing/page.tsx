import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import PricingTable from "../../components/Pricing/PricingTable";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        bgImg="/img/page-banner-bg2.jpg"
      />

      <PricingTable />

      <Subscribe />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import OurServices from "../../../components/Services/OurServices";
import SecondFacility from "../../../components/Services/SecondFacility";
import FirstFacility from "@/components/Services/FirstFacility";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Behandelingen door RTMS kliniek"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Onze diensten"
        bgImg="/img/page-banner-bg3.jpg"
      />

      <OurServices />

      <FirstFacility />

      <SecondFacility />


      <Subscribe />

      <Footer />
    </>
  );
}

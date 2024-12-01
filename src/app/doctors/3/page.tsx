import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import DoctorsStyle3 from "../../../components/Doctors/DoctorsStyle3";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Doctors Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors Style Three"
        bgImg="/img/page-banner-bg2.jpg"
      />

      <DoctorsStyle3 />

      <Subscribe />

      <Footer />
    </>
  );
}

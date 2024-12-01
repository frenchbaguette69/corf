import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import DoctorsStyle2 from "../../../components/Doctors/DoctorsStyle2";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Doctors Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors Style Two"
        bgImg="/img/page-banner-bg3.jpg"
      />

      <DoctorsStyle2 />

      <Subscribe />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import DoctorsStyle1 from "../../components/Doctors/DoctorsStyle1";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Doctors Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors Style One"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <DoctorsStyle1 />

      <Subscribe />

      <Footer />
    </>
  );
}

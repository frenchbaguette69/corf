import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Subscribe from "../../../components/Common/Subscribe";
import Footer from "../../../components/Layouts/Footer";
import DoctorDetailsContant from "../../../components/Doctors/DoctorDetailsContant";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Doctors Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors Details"
        bgImg="/img/page-banner-bg3.jpg"
      />

      <DoctorDetailsContant />

      <Subscribe />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import FunFactStyleOne from "../../components/Common/FunFactStyleOne";
import Features from "../../components/Appointment/Features";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Appointment"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Appointment"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <Features />

      <AppointmentForm />

      <FunFactStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}

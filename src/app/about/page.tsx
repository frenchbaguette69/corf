import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../../components/Common/FunFactStyleOne";
import AboutUsContent from "../../components/AboutUs/AboutUsContent";
import AboutCorona from "../../components/AboutUs/AboutCorona";
import FreeMedicalCamp from "../../components/AboutUs/FreeMedicalCamp";
import AppointmentForm from "@/components/EmergencyMedicalClinic/AppointmentForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Over RTMS kliniek"
        homePageUrl="/"
        homePageText="Home"
        activePageText="over ons"
        bgImg="/img/page-banner-bg1.jpg"
      />


      <AboutCorona />



      <FreeMedicalCamp />

      <FunFactStyleOne />

      <AppointmentForm />

      <DoctorsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}

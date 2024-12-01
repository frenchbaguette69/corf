import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/Covid19TreatmentClinic/MainBanner";
import Facilities from "../../components/Covid19TreatmentClinic/Facilities";
import AboutUs from "../../components/Covid19TreatmentClinic/AboutUs";
import VirusSymptoms from "../../components/Covid19TreatmentClinic/VirusSymptoms";
import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import ProtectYourself from "../../components/Covid19TreatmentClinic/ProtectYourself";
import DoctorsStyleTwo from "../../components/Common/DoctorsStyleTwo";
import Faqs from "../../components/Common/Faqs";
import CTO from "../../components/Covid19TreatmentClinic/CTO";
import ContactUs from "../../components/Covid19TreatmentClinic/ContactUs";
import TestimonialStyleOne from "../../components/Common/TestimonialStyleOne";
import NewsStyleOne from "../../components/Common/NewsStyleOne";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Facilities />

      <AboutUs />

      <VirusSymptoms />

      <FunFactStyleTwo />

      <ProtectYourself />

      <DoctorsStyleTwo />

      <Faqs />

      <CTO />

      <ContactUs />

      <TestimonialStyleOne />

      <NewsStyleOne />

      <Subscribe />
      
      <Footer />
    </>
  );
}

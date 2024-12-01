import React from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import MainBanner from "../../components/MedicalResearch/MainBanner";
import FeaturedService from "../../components/MedicalResearch/FeaturedService";
import AboutUs from "../../components/MedicalResearch/AboutUs";
import FunFact from "../../components/MedicalResearch/FunFact";
import OurServices from "../../components/MedicalResearch/OurServices";
import DoctorsStyleFour from "../../components/Common/DoctorsStyleFour";
import Faqs from "../../components/Common/Faqs";
import AppointmentForm from "../../components/MedicalResearch/AppointmentForm";
import TestimonialStyleOne from "../../components/Common/TestimonialStyleOne";
import NewsStyleTwo from "../../components/Common/NewsStyleTwo";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <FeaturedService />

      <AboutUs />

      <FunFact />

      <OurServices />

      <DoctorsStyleFour />

      <Faqs />

      <AppointmentForm />

      <TestimonialStyleOne />

      <NewsStyleTwo />

      <Subscribe />

      <Footer />
    </>
  );
}

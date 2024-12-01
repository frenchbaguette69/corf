import React from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import MainBanner from "../../components/DentalClinic/MainBanner";
import Facility from "../../components/DentalClinic/Facility";
import AboutUs from "../../components/DentalClinic/AboutUs";
import Department from "../../components/DentalClinic/Department";
import FunFactStyleThree from "../../components/Common/FunFactStyleThree";
import OurServices from "../../components/DentalClinic/OurServices";
import DoctorsStyleFour from "../../components/Common/DoctorsStyleFour";
import Pricing from "../../components/DentalClinic/Pricing";
import Faqs from "../../components/Common/Faqs";
import AppointmentForm from "../../components/DentalClinic/AppointmentForm";
import TestimonialStyleOne from "../../components/Common/TestimonialStyleOne";
import NewsStyleTwo from "../../components/Common/NewsStyleTwo";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarFour />

      <MainBanner />

      <Facility />

      <AboutUs />

      <Department />

      <FunFactStyleThree />

      <OurServices />

      <div className="bg-color">
        <DoctorsStyleFour />
      </div>

      <Pricing />

      <Faqs />

      <AppointmentForm />

      <TestimonialStyleOne />

      <NewsStyleTwo />

      <Subscribe />

      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import MainBanner from "../../components/Covid19TestCenter/MainBanner";
import FunFactStyleTwo from "../../components/Common/FunFactStyleTwo";
import Faqs from "../../components/Common/Faqs";
import Facilities from "../../components/Covid19TestCenter/Facilities";
import AboutUs from "../../components/Covid19TestCenter/AboutUs";
import HowItWorks from "../../components/Covid19TestCenter/HowItWorks";
import OurServices from "../../components/Covid19TestCenter/OurServices";
import DoctorsStyleTwo from "../../components/Common/DoctorsStyleTwo";
import AssessmentCenter from "../../components/Covid19TestCenter/AssessmentCenter";
import EmergencyDepartment from "../../components/Covid19TestCenter/EmergencyDepartment";
import Prevention from "../../components/Covid19TestCenter/Prevention";
import Cto from "../../components/Covid19TestCenter/cto";
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

      <HowItWorks />

      <OurServices />

      <DoctorsStyleTwo />

      <FunFactStyleTwo />

      <AssessmentCenter />

      <EmergencyDepartment />

      <Faqs />

      <Prevention />

      <Cto />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}

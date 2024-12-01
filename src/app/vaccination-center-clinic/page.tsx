import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import MainBanner from "../../components/VaccinationCenterClinic/MainBanner";
import AboutUs from "../../components/VaccinationCenterClinic/AboutUs";
import OurMission from "../../components/VaccinationCenterClinic/OurMission";
import VaccinationSchedule from "../../components/VaccinationCenterClinic/VaccinationSchedule";
import OurDoctors from "../../components/VaccinationCenterClinic/OurDoctors";
import NewsStyleOne from "../../components/Common/NewsStyleOne";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <AboutUs />

      <OurMission />

      <VaccinationSchedule />

      <OurDoctors />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}

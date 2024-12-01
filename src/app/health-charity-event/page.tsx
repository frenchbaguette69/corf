import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import MainBanner from "../../components/HealthCharityEvent/MainBanner";
import FeaturedService from "../../components/HealthCharityEvent/FeaturedService";
import OurMission from "../../components/HealthCharityEvent/OurMission";
import UpcomingCampaign from "../../components/HealthCharityEvent/UpcomingCampaign";
import BestService from "../../components/HealthCharityEvent/BestService";
import DoctorsStyleThree from "../../components/Common/DoctorsStyleThree";
import AboutUs from "../../components/HealthCharityEvent/AboutUs";
import AppointmentForm from "../../components/HealthCharityEvent/AppointmentForm";
import NewsStyleOne from "../../components/Common/NewsStyleOne";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarFive />

      <MainBanner />

      <FeaturedService />

      <OurMission />

      <UpcomingCampaign />

      <BestService />

      <DoctorsStyleThree />

      <AboutUs />

      <AppointmentForm />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}

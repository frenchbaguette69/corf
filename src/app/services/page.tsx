import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import OurWorks from "../../components/EmergencyMedicalClinic/OurWorks";
import FirstFacility from "../../components/Services/FirstFacility";
import SecondFacility from "../../components/Services/SecondFacility";
import ForAnyHelpContactUs from "../../components/Services/ForAnyHelpContactUs";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style One"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <div className="pt-100">
        <FirstFacility />
      </div>

      <div className="pt-100 pb-70">
        <SecondFacility />
      </div>

      <ForAnyHelpContactUs />

      <OurWorks />

      <Subscribe />

      <Footer />
    </>
  );
}

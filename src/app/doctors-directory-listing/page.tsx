import React from "react";
import NavbarThree from "../../components/Layouts/NavbarThree";
import MainBanner from "../../components/DoctorsDirectoryListing/MainBanner";
import SearchForm from "../../components/DoctorsDirectoryListing/SearchForm";
import Facilities from "../../components/DoctorsDirectoryListing/Facilities";
import AboutUs from "../../components/DoctorsDirectoryListing/AboutUs";
import SpecialistDoctors from "../../components/DoctorsDirectoryListing/SpecialistDoctors";
import DoctorsStyleOne from "../../components/Common/DoctorsStyleOne";
import NewsStyleOne from "../../components/Common/NewsStyleOne";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import FunFactStyleThree from "../../components/Common/FunFactStyleThree";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <SearchForm />

      <Facilities />

      <AboutUs />

      <SpecialistDoctors />

      <FunFactStyleThree />

      <DoctorsStyleOne />

      <Subscribe />

      <NewsStyleOne />

      <Footer />
    </>
  );
}

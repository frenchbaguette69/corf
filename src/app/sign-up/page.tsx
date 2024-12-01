import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Account aanmaken"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Account aanmaken"
        bgImg="/img/page-banner-bg2.jpg"
      />

      <SignUpForm />

      <Subscribe />

      <Footer />
    </>
  );
}

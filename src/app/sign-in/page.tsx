import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import SignInForm from "../../components/Auth/SignInForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Inloggen bij RTMS kliniek"
        homePageUrl="/"
        homePageText="Home"
        activePageText="inloggen"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <SignInForm />

      <Subscribe />

      <Footer />
    </>
  );
}

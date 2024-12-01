import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/ContactUs/ContactInfo";
import ContactForm from "../../components/ContactUs/ContactForm";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImg="/img/page-banner-bg1.jpg"
      />

      <ContactInfo />

      <ContactForm />

      <Subscribe />

      <Footer />
    </>
  );
}

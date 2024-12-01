import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import Faqs from "../../components/Common/Faqs";
import ContactForm from "../../components/ContactUs/ContactForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="FAQs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQs"
        bgImg="/img/page-banner-bg2.jpg"
      />

      <Faqs />

      <ContactForm />

      <Subscribe />

      <Footer />
    </>
  );
}

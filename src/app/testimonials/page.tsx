import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/Layouts/Footer";
import TestimonialsContent from "../../components/Testimonials/TestimonialsContent";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImg="/img/page-banner-bg3.jpg"
      />

      <TestimonialsContent />

      <Subscribe />

      <Footer />
    </>
  );
}

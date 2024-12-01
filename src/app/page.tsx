import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/EmergencyMedicalClinic/MainBanner";
import Facilities from "../components/EmergencyMedicalClinic/Facility";
import AboutUs from "../components/EmergencyMedicalClinic/AboutUs";
import Services from "../components/EmergencyMedicalClinic/Services";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import OurWorks from "../components/EmergencyMedicalClinic/OurWorks";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import AppointmentForm from "../components/EmergencyMedicalClinic/AppointmentForm";
import EmergencyArea from "../components/EmergencyMedicalClinic/EmergencyArea";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleOne from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Facilities />

      <AboutUs />

      <DoctorsStyleOne />

      <FunFactStyleOne />

      <AppointmentForm />

      <EmergencyArea />

      <TestimonialStyleOne />

      <NewsStyleOne />

      <Subscribe />

      <Footer />
    </>
  );
}

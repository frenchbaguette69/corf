"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const DoctorsStyleOne: React.FC = () => {
  return (
    <>
      <div className="doctors-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Onze Specialisten</span>
            <h2>rTMS Kliniek Doctoren</h2>
            <p>
              Ons team van deskundige artsen en specialisten staat klaar om u te
              ondersteunen met geavanceerde behandelingen zoals rTMS,
              Ozontherapie en Vitamine Infusen. Uw welzijn is onze prioriteit.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="doctors-slide"
          >
            {/* Dr. Emma van Dijk */}
            <SwiperSlide>
              <div className="single-doctor">
                <Image
                  src="/img/doctors/doctor1.png"
                  alt="Dr. Emma van Dijk"
                  width={300}
                  height={300}
                />
                <h3>Dr. Emma van Dijk</h3>
                <span className="top-title">rTMS Specialist</span>
                <p>
                  Dr. Van Dijk is gespecialiseerd in rTMS-therapieën en heeft
                  uitgebreide ervaring in het behandelen van depressie en
                  angststoornissen.
                </p>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Dr. Lucas Janssen */}
            <SwiperSlide>
              <div className="single-doctor">
                <Image
                  src="/img/doctors/doctor2.png"
                  alt="Dr. Lucas Janssen"
                  width={300}
                  height={300}
                />
                <h3>Dr. Lucas Janssen</h3>
                <span className="top-title">Psychiater</span>
                <p>
                  Dr. Janssen combineert rTMS-therapieën met psychologische
                  begeleiding voor een persoonlijke aanpak bij mentale
                  gezondheidszorg.
                </p>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Dr. Thomas Bakker */}
            <SwiperSlide>
              <div className="single-doctor">
                <Image
                  src="/img/doctors/doctor3.png"
                  alt="Dr. Thomas Bakker"
                  width={300}
                  height={300}
                />
                <h3>Dr. Thomas Bakker</h3>
                <span className="top-title">Neuromodulatie Expert</span>
                <p>
                  Dr. Bakker is gespecialiseerd in neuromodulatie en richt zich
                  op het gebruik van rTMS bij de behandeling van
                  therapieresistente depressie en angststoornissen.
                </p>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DoctorsStyleOne;

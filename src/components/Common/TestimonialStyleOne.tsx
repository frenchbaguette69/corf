"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const TestimonialStyleOne: React.FC = () => {
  return (
    <>
      <div 
        className="client-area c-bg pt-100 pb-70"
        style={{ 
          backgroundImage: `url(/img/client/client-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="section-title">
            <span className="top-title">Ervaringen</span>
            <h2>Wat onze cliënten zeggen</h2>
            <p>
              Lees de verhalen van onze cliënten en ontdek hoe onze behandelingen hun levens hebben veranderd.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="client-slide"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="single-client">
                <Image
                  src="/img/client/client1.jpg"
                  alt="Mark Jansen"
                  width={60}
                  height={60}
                  className="rounded-circle"
                />
                <p>
                  "Na mijn rTMS-behandeling voel ik me zoveel beter. Het team was erg behulpzaam en zorgzaam. Ik ben ontzettend dankbaar voor deze ervaring."
                </p>
                <ul>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                </ul>
                <h3>Mark Jansen</h3>
                <span>Accountmanager</span>
              </div>
            </SwiperSlide>

            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="single-client">
                <Image
                  src="/img/client/client2.jpg"
                  alt="Pieter de Vries"
                  width={60}
                  height={60}
                  className="rounded-circle"
                />
                <p>
                  "De ozontherapie heeft mijn energieniveau enorm verhoogd. Ik voel me fitter en gezonder. Het was een geweldige ervaring!"
                </p>
                <ul>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                </ul>
                <h3>Pieter de Vries</h3>
                <span>Zelfstandig Ondernemer</span>
              </div>
            </SwiperSlide>

            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="single-client">
                <Image
                  src="/img/client/client3.jpg"
                  alt="Sophie van den Berg"
                  width={60}
                  height={60}
                  className="rounded-circle"
                />
                <p>
                  "De vitamine-infusen hebben me geholpen om me energieker en gezonder te voelen. De zorg en aandacht die ik kreeg waren fantastisch."
                </p>
                <ul>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                  <li><i className="bx bxs-star"></i></li>
                </ul>
                <h3>Sophie van den Berg</h3>
                <span>HR Specialist</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleOne;

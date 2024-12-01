"use client";
  
import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const MainBanner: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube" 
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />

      <div 
        className="main-banner-area"
        style={{ 
          backgroundImage: `url(/img/home-one/home-one-banner-bg.jpg)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-text">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                    >
                      rtms-kliniek
                    </span>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                    >
                      Welkom bij onze kliniek voor uw RTMS Behandelingen
                    </h1>

                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" > RTMS-behandeling, oftewel repetitieve transcraniële magnetische stimulatie, is een innovatieve therapie die magnetische pulsen gebruikt om specifieke hersengebieden te stimuleren. Het wordt vaak ingezet bij depressie en andere neurologische aandoeningen, met als doel de hersenactiviteit te herstellen en symptomen te verminderen. </p>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Link href="/appointment" className="default-btn">
                        Book An Appointment
                      </Link>

                      <div
                        onClick={() => setOpen(true)}
                        className="default-btn active popup-youtube"
                      >
                        Play Now
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 pr-0">
                  <div className="banner-img-wrap">
                    <div
                      className="banner-img"
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                    >
                      <Image
                        src="/img/home-one/home-one-banner.png"
                        alt="Image"
                        width={663}
                        height={1033}
                      />
                    </div>

                    <div className="banner-shape">
                      <Image
                        src="/img/home-one/home-one-shape.png"
                        alt="Image"
                        width={944}
                        height={900}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="first-facility-area">
  <div className="row justify-content-center">
    <div className="col-lg-4 col-sm-6">
      <div
        className="first-facility-item"
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        <i className="flaticon-brain"></i>
        <h3>rTMS</h3>
        <p>
          Ervaar de effectieve behandeling van depressie en angst met rTMS – een veilige therapie die de hersenen stimuleert met magnetische pulsen en bewezen resultaten levert.
        </p>
      </div>
    </div>

    <div className="col-lg-4 col-sm-6">
      <div
        className="first-facility-item"
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        <i className="flaticon-brain"></i>
        <h3>Ozontherapie</h3>
        <p>
          Ontgift en revitaliseer je lichaam met ozontherapie – een baanbrekende behandeling die jouw energieniveau verhoogt en het immuunsysteem ondersteunt.
        </p>
      </div>
    </div>

    <div className="col-lg-4 col-sm-6">
      <div
        className="first-facility-item"
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="1200"
      >
        <i className="flaticon-brain"></i>
        <h3>Vitamine Boost</h3>
        <p>
          Versterk je gezondheid met onze op maat gemaakte vitamine-infusen. Een directe en effectieve manier om essentiële voedingsstoffen aan te vullen.
        </p>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;

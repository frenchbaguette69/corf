"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/img/about/about1.jpg"
                  alt="Over Ons Afbeelding"
                  width={570}
                  height={604}
                />

                <div className="shape-1">
                  <Image
                    src="/img/about/about-shape-1.png"
                    alt="Vorm 1"
                    width={570}
                    height={605}
                  />
                </div>

                <div className="shape-2">
                  <Image
                    src="/img/about/about-shape-2.png"
                    alt="Vorm 2"
                    width={289}
                    height={610}
                  />
                </div>

                <div className="shape-3">
                  <Image
                    src="/img/about/about-shape-3.png"
                    alt="Vorm 3"
                    width={185}
                    height={185}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">Over Ons</span>
                <h2>Betrouwbare zorg met innovatieve behandelingen</h2>
                <p>
                  Bij RTMS Kliniek bieden wij de meest geavanceerde behandelingen
                  voor mentale en fysieke gezondheid. Onze deskundige artsen en
                  specialisten combineren wetenschap en zorg om u het beste
                  resultaat te bieden. Uw welzijn staat centraal in alles wat wij
                  doen.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Innovatieve behandelingen zoals rTMS en Ozontherapie
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Professionele en persoonlijke zorg
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Hoogwaardige faciliteiten en apparatuur
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Ervaren specialisten en therapeuten
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Flexibele afspraken en noodhulp
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  Meer Over Ons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

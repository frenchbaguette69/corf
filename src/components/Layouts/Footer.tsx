"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* Logo en beschrijving */}
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  <Image
                    src="/img/logo-rtms-kliniek.png"
                    alt="RTMS Kliniek Logo"
                    width={150}
                    height={50}
                  />
                </Link>

                <p>
                  RTMS Kliniek biedt innovatieve behandelingen zoals repetitieve
                  Transcraniële Magnetische Stimulatie (rTMS) en Ozon High-Dose
                  Therapy (HDOT). Wij bevorderen zowel mentaal als fysiek welzijn
                  met bewezen therapieën. 
                </p>
                  
                <div className="registrations">
                  <p><strong>BIG:</strong> 19934011201</p>
                  <p><strong>AGB:</strong> 94068213</p>
                  <p><strong>KVK:</strong> 92761577</p>
                </div>
                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Behandelingen */}
            <div className="col-lg-2 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Behandelingen</h3>
                <ul>
                  <li>
                    <Link href="#">rTMS Therapie</Link>
                  </li>
                  <li>
                    <Link href="#">Ozon High-Dose Therapy</Link>
                  </li>
                  <li>
                    <Link href="#">Vitamine Infusen</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Openingstijden */}
            <div className="col-lg-4 col-md-6">
              <div
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>Openingstijden</h3>
                <ul>
                  <li>
                    <span>Maandag - Vrijdag:</span>
                    <span className="right">09:00 - 17:00</span>
                  </li>
                  <li>
                    <span>Zaterdag - Zondag:</span>
                    <span className="right">Gesloten</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contactinformatie */}
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>Neem Contact Op</h3>
                <ul>
                  <li>
                    <a href="tel:+31850606774">
                      <i className="bx bx-phone-call"></i>
                      <span>Telefoon:</span>
                      085 060 6774
                    </a>
                  </li>
                  <li>
                    <a href="tel:+31681840161">
                      <i className="bx bx-phone-call"></i>
                      <span>Mobiel:</span>
                      06-81840161
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@rtmskliniek.nl">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      info@rtmskliniek.nl
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Adres:</span>
                    Kennemerstraatweg 464 unit 1.03, 1851NG Heiloo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} RTMS Kliniek. Ontwikkeld door{" "}
              <a href="https://pafb.nl/" target="_blank">
                PAFB.NL
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

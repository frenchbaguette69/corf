"use client";

import React from "react";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Onze Diensten</span>
            <h2>Wat We Bieden</h2>
            <p>
              Bij RTMS Kliniek bieden we innovatieve en wetenschappelijk
              onderbouwde therapieën om zowel mentale als fysieke gezondheid te
              verbeteren. Ontdek onze unieke behandelingen en hoe ze u kunnen
              helpen.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-brain"></span>
                <h3>rTMS Therapie</h3>
                <p>
                  Repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een
                  veilige en effectieve behandeling voor depressie en
                  angststoornissen.
                </p>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Afbeelding"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-heart"></span>
                <h3>Ozon High-Dose Therapie</h3>
                <p>
                  Een innovatieve therapie die helpt bij het versterken van uw
                  immuunsysteem en het bevorderen van algehele gezondheid.
                </p>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Afbeelding"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-kidney"></span>
                <h3>Vitamine Infusen</h3>
                <p>
                  Vitamine-infusen bieden een krachtige boost aan uw
                  energieniveau en ondersteunen herstel bij vermoeidheid en
                  stress.
                </p>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Afbeelding"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-health"></span>
                <h3>Combinatie Therapie</h3>
                <p>
                  Combineer rTMS met Ozon High-Dose Therapie voor een optimale
                  aanpak van zowel mentale als fysieke klachten.
                </p>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Afbeelding"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-therapy"></span>
                <h3>Mentale Gezondheidszorg</h3>
                <p>
                  Begeleiding en ondersteuning voor mentale gezondheid,
                  afgestemd op uw unieke behoeften.
                </p>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Afbeelding"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

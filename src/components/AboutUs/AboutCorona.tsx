"use client";

import React from "react";
import Image from "next/image";

const AboutRTMSKliniek: React.FC = () => {
  return (
    <>
      <div className="about-area two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/img/about-two/about-two1.png"
                  alt="Over RTMS Kliniek Afbeelding"
                  width={683}
                  height={679}
                />

                <div className="shape-1">
                  <Image
                    src="/img/about-two/about-two-shape2.png"
                    alt="Vorm Afbeelding"
                    width={798}
                    height={811}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">Over RTMS Kliniek</span>
                <h2>Innovatieve Zorg Voor Mentale Gezondheid</h2>
                <p>
                  RTMS Kliniek is een toonaangevende kliniek gespecialiseerd in
                  repetitieve Transcraniële Magnetische Stimulatie (rTMS) en
                  andere geavanceerde therapieën zoals Ozon High-Dose Therapy en
                  Vitamine Infusen. Onze behandelingen richten zich op het
                  verbeteren van de mentale en fysieke gezondheid van onze
                  cliënten.
                </p>
                <p>
                  Wij bieden wetenschappelijk onderbouwde behandelingen die zijn
                  ontworpen om mensen te helpen die kampen met depressie,
                  angststoornissen, burn-out en therapieresistente klachten. Ons
                  toegewijde team van specialisten werkt samen met u aan een
                  gepersonaliseerd behandelplan dat aansluit op uw specifieke
                  behoeften.
                </p>
                <strong>
                  Onze missie is om hoogwaardige zorg te bieden en het welzijn
                  van onze cliënten te bevorderen.
                </strong>
                <p>
                  Bij RTMS Kliniek bent u verzekerd van een veilige, effectieve
                  en professionele aanpak, ondersteund door de nieuwste
                  technologieën en inzichten. Uw gezondheid, ons doel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRTMSKliniek;

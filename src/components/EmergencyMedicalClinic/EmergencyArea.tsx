"use client";

import React from "react";
import Image from "next/image";

const EmergencyArea: React.FC = () => {
  return (
    <>
      <div className="emergency-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="emergency-content ptb-100">
                <h2>Direct hulp nodig? Neem contact op voor rTMS-behandeling</h2>
                <p>
                  Bij RTMS Kliniek bieden wij een innovatieve en veilige oplossing
                  voor mentale gezondheidsproblemen zoals depressie en angst. Onze
                  rTMS-behandelingen stimuleren specifieke hersengebieden met
                  magnetische pulsen, wat bewezen effectief is bij de behandeling
                  van therapieresistente depressie, angststoornissen en andere
                  mentale aandoeningen.
                </p>

                <p>
                  Of u nu meer wilt weten over onze depressiebehandelingen,
                  rTMS-therapie of de voordelen van onze unieke combinatie van
                  rTMS en Ozon High-Dose Therapy (HDOT), wij staan klaar om u te
                  helpen. Neem vandaag nog contact met ons op voor persoonlijk
                  advies en begeleiding.
                </p>

                <ul>
                  <li className="active">
                    <i className="bx bx-phone-call"></i>
                    <span>Bel Nu</span>
                    <h3>
                      <a href="tel:+31850606774">085 060 6774</a>
                    </h3>
                  </li>

                  <li>
                    <i className="bx bx-envelope"></i>
                    <span>Mail Ons</span>
                    <h3>
                      <a href="mailto:info@rtmskliniek.nl">info@rtmskliniek.nl</a>
                    </h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div
                className="emergency-img"
                style={{
                  backgroundImage: `url(/img/emergency.jpg)`
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="shape">
          <Image
            src="/img/shape/emergency-shape.png"
            alt="Image"
            width={366}
            height={335}
          />
        </div>
      </div>
    </>
  );
};

export default EmergencyArea;

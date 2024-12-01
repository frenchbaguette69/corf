"use client";

import React from "react";
import Link from "next/link";
import { FaUserMd, FaHeartbeat, FaMicroscope } from "react-icons/fa";

const SecondFacility: React.FC = () => {
  return (
    <>
      <div className="second-facility-area">
        <div className="container">
          <div className="row justify-content-center">
            {/* Eerste Faciliteit */}
            

            {/* Tweede Faciliteit */}
            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <FaHeartbeat size={60} color="#4caf50" />
                <h3>Persoonlijke Zorg</h3>
                <p>
                  Wij bieden persoonlijke zorg op maat, afgestemd op uw specifieke behoeften en gezondheidssituatie.
                </p>

              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <FaUserMd size={60} color="#4caf50" />
                <h3>Deskundige Specialisten</h3>
                <p>
                  Ons team van ervaren artsen en therapeuten is gespecialiseerd
                  in rTMS en andere innovatieve behandelingen voor uw welzijn.
                </p>
              </div>
            </div>
            {/* Derde Faciliteit */}
            <div className="col-lg-4 col-sm-6">
              <div className="second-facility-item">
                <FaMicroscope size={60} color="#4caf50" />
                <h3>Geavanceerde Technologie</h3>
                <p>
                  Wij maken gebruik van de nieuwste technologieën en apparatuur voor effectieve behandelingen.
                </p>

        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondFacility;

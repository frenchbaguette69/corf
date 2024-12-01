"use client";

import React from "react";
import Link from "next/link";
import { FaBrain, FaLeaf, FaCapsules } from "react-icons/fa";

const Facilities: React.FC = () => {
  return (
    <>
      <div className="second-facility-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <FaBrain size={50} />
                <h3>rTMS</h3>
                <p>
                  Ervaar de effectieve behandeling van depressie en angst met
                  rTMS – een veilige therapie die de hersenen stimuleert met
                  magnetische pulsen.
                </p>

              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <FaLeaf size={50} />
                <h3>Ozontherapie</h3>
                <p>
                  Ontgift en revitaliseer je lichaam met ozontherapie – een
                  baanbrekende behandeling die jouw energieniveau verhoogt en
                  het immuunsysteem ondersteunt.
                </p>

              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="second-facility-item">
                <FaCapsules size={50} />
                <h3>Vitamine Boost</h3>
                <p>
                  Versterk je gezondheid met onze op maat gemaakte
                  vitamine-infusen. Een directe en effectieve manier om
                  essentiële voedingsstoffen aan te vullen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;

"use client";

import React from "react";
import Image from "next/image";

const FunFactStyleOne: React.FC = () => {
  return (
    <>
      <div className="counter-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-man"></i>

                <h2>
                  25<span className="target">+</span>
                </h2>

                <p>Ervaren Specialisten</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-tick"></i>

                <h2>
                  500<span className="target">+</span>
                </h2>

                <p>Succesvolle Behandelingen</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-trophy"></i>

                <h2>
                  15<span className="target">+</span>
                </h2>

                <p>Jaren Ervaring</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-counter">
                <i className="flaticon-experience"></i>

                <h2>
                  10<span className="target">+</span>
                </h2>

                <p>Specialistische Diensten</p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-wrap">
          <div className="shape-1">
            <Image
              src="/img/shape/counter-shape.png"
              alt="Afbeelding"
              width={477}
              height={337}
            />
          </div>
          <div className="shape-2">
            <Image
              src="/img/shape/counter-shape.png"
              alt="Afbeelding"
              width={477}
              height={337}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactStyleOne;

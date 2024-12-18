"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="services-area-three pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Our Healthcare Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-man"></span>
                <h3>Cancer Service</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Image"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-liver"></span>
                <h3>Liver Transport</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Image"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-kidney"></span>
                <h3>Kidney Transport</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Image"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-heart"></span>
                <h3>Cardiac Arrhythmia</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Image"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-brain"></span>
                <h3>Neurology Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Image"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <span className="flaticon-walker"></span>
                <h3>Orthopedic Care</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>

                <Link href="/service-details" className="read-more">
                  Read More <i className="bx bx-plus"></i>
                </Link>

                <div className="services-shape">
                  <Image
                    src="/img/services-card-shape.png"
                    alt="Image"
                    width={252}
                    height={223}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-1">
          <Image
            src="/img/prevention-shape-1.png"
            alt="Image"
            width={146}
            height={156}
          />
        </div>
        <div className="shape-2">
          <Image
            src="/img/prevention-shape-1.png"
            alt="Image"
            width={146}
            height={156}
          />
        </div>
        <div className="shape-3">
          <Image
            src="/img/prevention-shape-1.png"
            alt="Image"
            width={146}
            height={156}
          />
        </div>
        <div className="shape-4">
          <Image
            src="/img/prevention-shape-1.png"
            alt="Image"
            width={146}
            height={156}
          />
        </div>
      </div>
    </>
  );
};

export default OurServices;

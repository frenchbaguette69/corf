"use client";
  
import React from "react";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/img/about/about1.jpg"
                  alt="Image"
                  width={570}
                  height={604}
                />

                <div className="shape-1">
                  <Image
                    src="/img/about/about-shape-1.png"
                    alt="Image"
                    width={570}
                    height={605}
                  />
                </div>

                <div className="shape-2">
                  <Image
                    src="/img/about/about-shape-2.png"
                    alt="Image"
                    width={289}
                    height={610}
                  />
                </div>

                <div className="shape-3">
                  <Image
                    src="/img/about/about-shape-3.png"
                    alt="Image"
                    width={185}
                    height={185}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">About Us</span>
                <h2>We are trusted The Best Certificate Healthcare</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Scientific skills for getting a better result
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>A good environment for work
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional doctors
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Digital laboratory
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Emergency services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;

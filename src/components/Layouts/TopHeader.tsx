"use client";
  
import React from "react";

const TopHeader: React.FC = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <i className="bx bx-time"></i>
                  Ma-Vr 9:00 - 17:00
                </li>
                <li>
                  <a href="https://wa.me/31681840161">
                    <i className="bx bx-phone-call"></i>
                    Bel ons: +31 681840161
                  </a>
                </li>
                <li>
                  <a href="mailto:info@rtmskliniek.nl">
                    <i className="bx bxs-paper-plane"></i>
                    Email: info@rtmskliniek.nl
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i className="bx bxl-pinterest-alt"></i>
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
      </div>
    </>
  );
};

export default TopHeader;

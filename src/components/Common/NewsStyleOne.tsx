"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewsStyleOne: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Nieuws</span>
            <h2>Onze Laatste Artikelen</h2>
            <p>
              Blijf op de hoogte van de nieuwste ontwikkelingen en inzichten
              over rTMS-behandelingen en mentale gezondheid.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Blog 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/rtms-voordelen">
                  <Image
                    src="/img/blog/blog1.jpg"
                    alt="De voordelen van rTMS"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>10 november 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">rTMS</Link>
                    </li>
                  </ul>

                  <Link href="/blog/rtms-voordelen">
                    <h3>De voordelen van rTMS</h3>
                  </Link>

                  <Link href="/blog/rtms-voordelen" className="read-more">
                    Lees meer <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/rtms-bij-depressie">
                  <Image
                    src="/img/blog/blog2.jpg"
                    alt="rTMS bij depressie"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>15 november 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Mentale Gezondheid</Link>
                    </li>
                  </ul>

                  <Link href="/blog/rtms-bij-depressie">
                    <h3>Hoe rTMS helpt bij depressie</h3>
                  </Link>

                  <Link href="/blog/rtms-bij-depressie" className="read-more">
                    Lees meer <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/onderzoek-rtms">
                  <Image
                    src="/img/blog/blog3.jpg"
                    alt="Recent onderzoek naar rTMS"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>1 december 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <Link href="#">Onderzoek</Link>
                    </li>
                  </ul>

                  <Link href="/blog/onderzoek-rtms">
                    <h3>Nieuw onderzoek bevestigt effectiviteit van rTMS</h3>
                  </Link>

                  <Link href="/blog/onderzoek-rtms" className="read-more">
                    Lees meer <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsStyleOne;

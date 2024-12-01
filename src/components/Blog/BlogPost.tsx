"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Nieuws en Artikelen</span>
            <h2>Ons Laatste Nieuws</h2>
            <p>
              Ontdek het laatste nieuws, inzichten en wetenschappelijke updates
              over rTMS-behandelingen, mentale gezondheid en hoe innovatieve
              therapieën een verschil kunnen maken in uw leven.
            </p>
          </div>

          <div className="row">
            {/* Blog 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/rtms-introductie">
                  <Image
                    src="/img/blog/rtms-introductie.jpg"
                    alt="Introductie tot rTMS"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>1 December 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">rTMS</a>
                    </li>
                  </ul>

                  <Link href="/blog/rtms-introductie">
                    <h3>Wat is rTMS? Een Introductie tot deze Innovatieve Therapie</h3>
                  </Link>

                  <p>
                    Leer alles over de basis van rTMS-behandelingen, hoe het
                    werkt en waarom het een doorbraak vormt in de behandeling
                    van depressie en andere psychische aandoeningen.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/rtms-resultaten">
                  <Image
                    src="/img/blog/rtms-resultaten.jpg"
                    alt="Resultaten van rTMS"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>15 November 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">Resultaten</a>
                    </li>
                  </ul>

                  <Link href="/blog/rtms-resultaten">
                    <h3>Succesverhalen: Hoe rTMS Het Leven van Patiënten Verandert</h3>
                  </Link>

                  <p>
                    Ontdek inspirerende verhalen van mensen die hun depressie
                    hebben overwonnen met behulp van rTMS-behandelingen.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/mentale-gezondheid">
                  <Image
                    src="/img/blog/mentale-gezondheid.jpg"
                    alt="Mentale Gezondheid Verbeteren"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>20 Oktober 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">Mentale Gezondheid</a>
                    </li>
                  </ul>

                  <Link href="/blog/mentale-gezondheid">
                    <h3>5 Tips om Uw Mentale Gezondheid te Verbeteren</h3>
                  </Link>

                  <p>
                    Kleine veranderingen in uw dagelijkse routine kunnen een
                    grote impact hebben op uw mentale welzijn. Lees onze
                    tips voor een gezonder leven.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/rtms-vs-medicatie">
                  <Image
                    src="/img/blog/rtms-vs-medicatie.jpg"
                    alt="rTMS versus medicatie"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>5 Oktober 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">Behandelingen</a>
                    </li>
                  </ul>

                  <Link href="/blog/rtms-vs-medicatie">
                    <h3>rTMS versus Medicatie: Wat Past bij U?</h3>
                  </Link>

                  <p>
                    Vergelijk de voordelen en nadelen van rTMS en traditionele
                    medicatie bij de behandeling van depressie.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog/onderzoek-rtms">
                  <Image
                    src="/img/blog/onderzoek-rtms.jpg"
                    alt="Onderzoek naar rTMS"
                    width={570}
                    height={400}
                  />
                </Link>

                <span>25 September 2024</span>
                <div className="blog-content">
                  <ul>
                    <li>
                      <a href="#">Onderzoek</a>
                    </li>
                  </ul>

                  <Link href="/blog/onderzoek-rtms">
                    <h3>Wetenschappelijk Onderzoek naar de Effectiviteit van rTMS</h3>
                  </Link>

                  <p>
                    Wat zegt de wetenschap over rTMS? Een overzicht van de
                    meest recente studies en hun bevindingen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;

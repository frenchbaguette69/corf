"use client";

import React from "react";
import Link from "next/link";

const SignUpForm: React.FC = () => {
  return (
    <>
      <div className="user-area-all-style sign-up-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Maak een account aan!</h2>
            <p>
              Meld je aan om toegang te krijgen tot exclusieve functies en
              diensten. Het duurt slechts een paar minuten en helpt je optimaal
              gebruik te maken van onze platform.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    {/* Sociale media */}
                    

                    {/* Formuliervelden */}
                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="first_name"
                          placeholder="Voornaam"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="last_name"
                          placeholder="Achternaam"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          placeholder="Gebruikersnaam"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="E-mailadres"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Wachtwoord"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="confirm_password"
                          placeholder="Bevestig Wachtwoord"
                        />
                      </div>
                    </div>

                    {/* Voorwaarden */}
                    <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">
                          Ik ga akkoord met de{" "}
                          <Link href="/privacy-policy">Privacyverklaring</Link>{" "}
                          en <Link href="/terms-conditions">Algemene Voorwaarden</Link>
                        </label>
                      </div>
                    </div>

                    {/* Verzendknop */}
                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Registreer
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Heb je al een account?{" "}
                        <Link href="/sign-in/">Log in</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="sign-in-img"
                style={{
                  backgroundImage: `url(/img/sign-in-img.jpg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

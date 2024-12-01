"use client";

import React from "react";
import Link from "next/link";

const SignInForm: React.FC = () => {
  return (
    <>
      <div className="user-area-all-style log-in-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Log in op je account</h2>
            <p>
              Welkom terug! Log in op je account om verder te gaan en toegang te
              krijgen tot onze exclusieve functies en diensten. Heb je nog geen
              account? <Link href="/sign-up">Meld je hier aan!</Link>
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                  

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="Gebruikersnaam of E-mailadres"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Wachtwoord"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 form-condition">
                      <div className="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Onthoud mij</label>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <Link href="/recover-password" className="forget">
                        Wachtwoord vergeten?
                      </Link>
                    </div>

                    <div className="col-12">
                      <button className="default-btn btn-two" type="submit">
                        Log in
                      </button>
                    </div>

                    <div className="col-12">
                      <p className="account-desc">
                        Nog geen account?{" "}
                        <Link href="/sign-up">Maak er een aan</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="log-in-img"
                style={{
                  backgroundImage: `url(/img/log-in-img.jpg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;

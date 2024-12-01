"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="main-contact-area contact ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Neem contact op</span>
            <h2>Stuur ons een bericht voor vragen of afspraken</h2>
            <p>
              Heeft u een vraag of wilt u een afspraak maken? Vul het formulier
              in en wij nemen zo snel mogelijk contact met u op.
            </p>
          </div>

          <div className="contact-wrap contact-pages mb-0">
            <div className="contact-form">
              <form>
                <div className="row">
                  {/* Naam */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Naam</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Uw naam"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Uw e-mailadres"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  {/* Telefoonnummer */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Telefoonnummer</label>
                      <input
                        type="tel"
                        name="number"
                        placeholder="Uw telefoonnummer"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  {/* Onderwerp */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label>Onderwerp</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Onderwerp"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  {/* Bericht */}
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Bericht</label>
                      <textarea
                        name="message"
                        cols={30}
                        rows={6}
                        placeholder="Schrijf uw bericht..."
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  {/* Noodnummer en verzendknop */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="contact-num">
                      <h3>Voor spoedgevallen</h3>
                      <span>
                        <a href="tel:+31850606774">085 060 6774</a>
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <button type="submit" className="default-btn btn-two">
                      Bericht versturen
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

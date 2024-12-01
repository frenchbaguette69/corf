"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";

interface AppointmentFormProps {}

const AppointmentForm: React.FC<AppointmentFormProps> = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };

  return (
    <>
      <div 
        className="appointment-area jarallax ptb-50"
        style={{ 
          backgroundImage: `url(/img/appointment-bg.jpg)`
        }}
      >
        <div className="container">
          <div className="appointment-here-form">
            <span className="top-title">Maak een Afspraak</span>
            <h2>Wij Zijn Er Voor U</h2>

            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <label>Uw Naam</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Voer uw naam in"
                    />
                    <i className="flaticon-account"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Uw Email</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Email"
                      placeholder="Voer uw email in"
                    />
                    <i className="flaticon-email"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Uw Telefoonnummer</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Voer uw telefoonnummer in"
                    />
                    <i className="flaticon-smartphone"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Selecteer Dienst</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="0">Selecteer Dienst</option>
                      <option value="1">rTMS Therapie</option>
                      <option value="2">Ozon High-Dose Therapie</option>
                      <option value="3">rTMS & Ozon Therapie</option>
                      <option value="4">Vitamine Infusen</option>
                    </select>
                    <i className="flaticon-heart"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Afspraakdatum</label>
                  <div className="form-group">
                    <div className="input-group date">
                      <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        className="form-control"
                      />
                    </div>
                    <i className="flaticon-appointment"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Tijd</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="0">Selecteer Tijd</option>
                      <option value="1">09:00 - 10:00 uur</option>
                      <option value="2">10:00 - 11:00 uur</option>
                      <option value="3">11:00 - 12:00 uur</option>
                      <option value="4">12:00 - 13:00 uur</option>
                      <option value="5">13:00 - 14:00 uur</option>
                      <option value="6">14:00 - 15:00 uur</option>
                      <option value="7">15:00 - 16:00 uur</option>
                      <option value="8">16:00 - 17:00 uur</option>
                    </select>
                    <i className="flaticon-clock"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <label>Bericht</label>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="Message"
                      cols={30}
                      rows={8}
                      placeholder="Uw Bericht"
                    ></textarea>
                    <i className="flaticon-edit"></i>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-btn">
                    Verstuur Verzoek
                  </button>
                </div>
              </div>
            </form>

            <div className="shape">
              <Image
                src="/img/shape/appointment-shape.png"
                alt="Afspraak Vorm"
                width={248}
                height={214}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;

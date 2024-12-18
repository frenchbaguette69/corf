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
        className="appointment-area ptb-50 jarallax"
        style={{ 
          backgroundImage: `url(/img/appointment-bg.jpg)`
        }}
      >
        <div className="container">
          <div className="appointment-here-form m-auto">
            <span className="top-title">Make An Appointment</span>
            <h2>We Are Here For You</h2>

            <form>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <label>Your Name</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Enter Your Name"
                    />
                    <i className="flaticon-account"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Your Email</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Email"
                      placeholder="Enter Your Email"
                    />
                    <i className="flaticon-email"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Your Phone</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      placeholder="Enter Your Phone"
                    />
                    <i className="flaticon-smartphone"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Select Service</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="0">Select Service</option>
                      <option value="1">Surgery & Radiology</option>
                      <option value="2">Children Care</option>
                      <option value="3">Orthopedics</option>
                      <option value="4">Nuclear Magnetic</option>
                      <option value="5">Eye Treatment</option>
                      <option value="6">X-Ray</option>
                    </select>
                    <i className="flaticon-heart"></i>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <label>Appointment Date</label>
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
                  <label>Time</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option value="0">Seclect Time</option>
                      <option value="1">09.00 AM To 10.00 AM</option>
                      <option value="2">10.00 AM To 11.00 AM</option>
                      <option value="3">11.00 AM To 12.00 PM</option>
                      <option value="4">12.00 PM To 01.00 PM</option>
                      <option value="5">01.00 PM To 03.00 PM</option>
                      <option value="6">04.00 PM To 06.00 PM</option>
                      <option value="7">07.00 PM To 10.00 PM</option>
                      <option value="8">10.00 PM To 11.00 PM</option>
                    </select>
                    <i className="flaticon-clock"></i>
                  </div>
                </div>

                <div className="col-lg-12">
                  <label>Message</label>
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="Message"
                      cols={30}
                      rows={8}
                      placeholder="Your Message"
                    ></textarea>
                    <i className="flaticon-edit"></i>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="default-btn">
                    Send Request
                  </button>
                </div>
              </div>
            </form>

            <div className="shape">
              <Image
                src="/img/shape/appointment-shape.png"
                alt="Image"
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

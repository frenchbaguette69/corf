"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="contact-wrap contact-pages mb-0">
        <div className="contact-form">
          <form>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone Number"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols={30}
                    rows={6}
                    placeholder="Write your message..."
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="contact-num">
                  <h3>For Emergency</h3>
                  <span>
                    <a href="tel:+442-456a-789">+442-456a-789</a>
                  </span>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <button type="submit" className="default-btn btn-two">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

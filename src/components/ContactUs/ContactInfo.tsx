"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            {/* Heiloo Location */}
            <div className="col-lg-6 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>RTMS Kliniek Heiloo</h3>
                <p>Kennemerstraatweg 464 unit 1.03, 1851NG Heiloo, Nederland</p>
                <span>Email: <a href="mailto:info@rtmskliniek.nl">info@rtmskliniek.nl</a></span>
                <span>Tel: <a href="tel:+31850606774">085 060 6774</a></span>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="single-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9584527680426!2d4.707557215762993!3d52.60566997983564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f893da0f213f%3A0x4383c37a3f84a55b!2sKennemerstraatweg%20464%2C%201851NG%20Heiloo%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1697216740000!5m2!1sen!2snl"
                  width="100%"
                  height="450"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

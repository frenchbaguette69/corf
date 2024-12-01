"use client";
  
import React from "react";
import Link from "next/link";

const CTO: React.FC = () => {
  return (
    <>
      <div 
        className="make-appointment-area ptb-100"
        style={{ 
          backgroundImage: `url(/img/appointment-bg-2.png)`
        }}
      >
        <div className="container">
          <div className="make-appointment-content">
            <h2>NEED TO TEST COVID-19?</h2>
            <p>
              Just Make an Appointment Then We’ll Come to you To Collect Your
              Same
            </p>

            <Link href="/appointment" className="default-btn">
              Make An Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTO;

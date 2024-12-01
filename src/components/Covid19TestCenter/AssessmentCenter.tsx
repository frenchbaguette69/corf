"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AssessmentCenter: React.FC = () => {
  return (
    <>
      <div className="assessment-center-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="assessment-img">
                <Image
                  src="/img/home-three/assessment-img.png"
                  alt="Image"
                  width={1000}
                  height={675}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="emergency-contents">
                <span className="top-title">Assessment Center</span>
                <h2>Who Should not Visit Assesment Center</h2>
                <p>
                  People who have symptoms of upper respiratory tract infection
                  (cough, sore throat, headache, muscle aches, fatigue, runny
                  nose, and joint aches, and may also include.
                </p>

                <ul>
                  <li>Healthcare workers should follow their organization.</li>
                  <li>People with no symptoms who have not travelled</li>
                  <li>Instead, self-isolate at home for 14 days</li>
                  <li>People with no symptoms who have travelled</li>
                  <li>Instead, self-monitor PDF for 14 days</li>
                </ul>

                <Link href="/about" className="default-btn">
                  Know Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentCenter;

import React from "react";
import "./Endo.css";

function Endo() {
  return (
    <>
      {/* Purple Banner */}
      <div className="banner">
        <h1 className="banner-title">Endometriosis</h1>
      </div>

      <div className="container">
        {/* Summary Section */}
        <div className="summary-row">
          <img
            src="https://images.app.goo.gl/examplelink"
            alt="Endometriosis illustration"
          />
          <div className="summary-text">
            <h2>What is Endometriosis?</h2>
            <p>
              A condition where tissue similar to the lining of the uterus
              (endometrium) grows outside the uterus, causing pain,
              inflammation, and sometimes fertility issues. It can be caused by
              genetic factors, immune system disorders, or retrograde
              menstruation.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          <div className="main-content">
            <section>
              <h2>Menstrual Cycle & Symptoms</h2>

              <div className="cycle-phase">
                <h3>Follicular Phase (Days 1-14, starts with period)</h3>
                <p>Estrogen levels rise to mature an egg.</p>
                <p>
                  <strong>Symptoms:</strong> Increased inflammation and pelvic
                  pain as estrogen fuels endometrial tissue growth.
                </p>
              </div>

              <div className="cycle-phase">
                <h3>Ovulation (Around Day 14)</h3>
                <p>The mature egg is released.</p>
                <p>
                  <strong>Symptoms:</strong> Some experience mid-cycle pain
                  (mittelschmerz).
                </p>
              </div>

              <div className="cycle-phase">
                <h3>Luteal Phase (Days 15-28, post-ovulation)</h3>
                <p>Progesterone increases to prepare for pregnancy.</p>
                <p>
                  <strong>Symptoms:</strong> If progesterone is low, pain,
                  bloating, and fatigue worsen before the next period.
                </p>
              </div>

              <div className="cycle-phase">
                <h3>Menstruation (Day 1 of next cycle)</h3>
                <p>
                  Shedding of the uterine lining and any misplaced
                  endometrial-like tissue.
                </p>
                <p>
                  <strong>Symptoms:</strong> Severe cramps, heavy bleeding,
                  clotting, back pain, and GI issues.
                </p>
              </div>
            </section>

            <section>
              <h2>Next Steps</h2>
              <div className="next-steps">
                <h3>Medical Diagnosis</h3>
                <ul>
                  <li>
                    <strong>Pelvic exam:</strong> To check for abnormalities
                  </li>
                  <li>
                    <strong>Ultrasound or MRI:</strong> To assess tissue growth
                  </li>
                  <li>
                    <strong>Laparoscopy:</strong> Minor surgery for confirmation
                    and possible removal of tissue
                  </li>
                </ul>

                <h3>Treatment</h3>
                <ul>
                  <li>
                    <strong>Pain Management:</strong> NSAIDs (e.g., ibuprofen)
                    for cramps
                  </li>
                  <li>
                    <strong>Hormonal Therapy:</strong> Birth control,
                    progestins, or GnRH agonists to reduce symptoms
                  </li>
                  <li>
                    <strong>Surgical Intervention:</strong> Laparoscopic
                    excision surgery if symptoms are severe
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Resources Section */}
          <div className="sidebar">
            <div className="news-links">
              <h2>Quick Links</h2>
              <a
                href="https://www.endofound.org/"
                target="_blank"
                rel="noreferrer"
              >
                Endometriosis Foundation
              </a>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/endometriosis/symptoms-causes/syc-20354656"
                target="_blank"
                rel="noreferrer"
              >
                Mayo Clinic Overview
              </a>
            </div>

            <div className="medications-box">
              <p>
                <em>
                  Always consult with your doctor before starting/changing
                  treatments.
                </em>
              </p>
            </div>
          </div>
        </div>

        {/* Current News Section */}
        <div className="resources">
          <h2>Current News & Resources</h2>
          <div className="card-row">
            <div className="card">
              <img
                src="https://via.placeholder.com/220x160?text=Research"
                alt="Endometriosis Research"
              />
              <div className="card-content">
                <h4>Trauma & Endometriosis</h4>
                <p>
                  <a
                    href="https://www.news-medical.net/news/20250210/Study-reveals-link-between-traumatic-experiences-and-endometriosis-risk.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Study reveals link between traumatic experiences and
                    endometriosis risk
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://via.placeholder.com/220x160?text=Nutrition"
                alt="Diet and Endometriosis"
              />
              <div className="card-content">
                <h4>Diet & Endometriosis</h4>
                <p>
                  <a
                    href="https://www.medicalnewstoday.com/articles/higher-zinc-intake-may-increase-endometriosis-risk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Higher zinc intake may increase endometriosis risk
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://via.placeholder.com/220x160?text=Guidelines"
                alt="Treatment Guidelines"
              />
              <div className="card-content">
                <h4>Treatment Guidelines</h4>
                <p>
                  <a
                    href="https://www.acog.org/womens-health/faqs/endometriosis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ACOG endometriosis treatment protocols
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Endo;

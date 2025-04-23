<<<<<<< Updated upstream
import React from 'react';
import './Hypo.css';
=======
import React from "react";
import "./Hypo.css";
>>>>>>> Stashed changes

function Hypo() {
  return (
    <>
      {/* Purple Banner */}
      <div className="banner">
        <h1 className="banner-title">Hypothyroidism</h1>
      </div>

      <div className="container">
        {/* Summary Section */}
        <div className="summary-row">
          <img
            src="https://images.app.goo.gl/R23WXRWMjfZoTakWA"
            alt="Thyroid gland"
          />
          <div className="summary-text">
            <h2>What is Hypothyroidism?</h2>
            <p>
              A condition where the thyroid gland does not produce enough
              thyroid hormones, leading to a slow metabolism, fatigue, weight
              gain, and other health issues. It can be caused by autoimmune
              diseases (like Hashimoto's thyroiditis), iodine deficiency, or
              certain medications.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          <div className="main-content">
            <section>
              <h2>Hormonal Cycle & Symptoms</h2>

              <div className="cycle-phase">
                <h3>Follicular Phase (Days 1-14, starts with period)</h3>
                <p>
                  Thyroid hormones (T3, T4) influence metabolism and energy.
                </p>
                <p>
                  <strong>Symptoms:</strong> Fatigue, sluggishness, brain fog,
                  and cold intolerance may worsen.
                </p>
              </div>

              <div className="cycle-phase">
                <h3>Ovulation (Around Day 14)</h3>
                <p>
                  The thyroid interacts with estrogen and progesterone levels.
                </p>
                <p>
                  <strong>Symptoms:</strong> Ovulation might be irregular or
                  absent, leading to fertility issues.
                </p>
              </div>

              <div className="cycle-phase">
                <h3>Luteal Phase (Days 15-28, post-ovulation)</h3>
                <p>
                  Progesterone rises, but hypothyroidism can lead to imbalances.
                </p>
                <p>
                  <strong>Symptoms:</strong> Worsening bloating, mood swings,
                  constipation, and fluid retention.
                </p>
              </div>

              <div className="cycle-phase">
                <h3>Menstruation (Day 1 of next cycle)</h3>
                <p>
                  Low thyroid hormones may lead to heavy, prolonged, or
                  irregular periods.
                </p>
                <p>
                  <strong>Symptoms:</strong> Increased fatigue, muscle weakness,
                  and worsening depression.
                </p>
              </div>
            </section>

            <section>
              <h2>Next Steps</h2>
              <div className="next-steps">
                <h3>Medical Diagnosis</h3>
                <ul>
                  <li>
                    <strong>Blood Tests:</strong> TSH, Free T3, Free T4, and
                    thyroid antibodies to assess function.
                  </li>
                  <li>
                    <strong>Ultrasound:</strong> Used if a goiter or nodules are
                    present.
                  </li>
                </ul>

                <h3>Treatment</h3>
                <ul>
                  <li>
                    <strong>Thyroid Hormone Replacement:</strong> Levothyroxine
                    (T4) is the standard treatment.
                  </li>
                  <li>
                    <strong>Iodine & Nutrients:</strong> Proper intake of
                    iodine, selenium, and zinc supports thyroid function.
                  </li>
                  <li>
                    <strong>Lifestyle Changes:</strong> Balanced diet, regular
                    exercise, and stress management.
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
                href="https://www.thyroid.org/hypothyroidism/"
                target="_blank"
                rel="noreferrer"
              >
                American Thyroid Association
              </a>
              <a
                href="https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284"
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
                  medications.
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
                alt="Thyroid Research"
              />
              <div className="card-content">
                <h4>Thyroid & Menstrual Health</h4>
                <p>
                  <a
                    href="https://www.researchgate.net/publication/312203098_Thyroid_disorders_in_women_with_dysfunctional_uterine_bleeding"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Study: Thyroid disorders in dysfunctional uterine bleeding
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src="https://via.placeholder.com/220x160?text=Fertility"
                alt="Thyroid Fertility"
              />
              <div className="card-content">
                <h4>Thyroid & Fertility</h4>
                <p>
                  <a
                    href="https://www.healthcentral.com/condition/thyroid/thyroid-disorders-fertility"
                    target="_blank"
                    rel="noreferrer"
                  >
                    How thyroid disorders impact fertility
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
                <h4>Official Guidelines</h4>
                <p>
                  <a
                    href="https://www.thyroid.org/hypothyroidism/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    American Thyroid Association treatment protocols
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

export default Hypo;

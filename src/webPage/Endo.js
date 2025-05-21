import React, { useState, useEffect } from "react";
import Card from "../components/newsCard/Card";
import "./Endo.css";

function Endo() {
  const [articleData, setarticleData] = useState(null);
  // If you want to show loading state or error state, you can use these
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sampleSize = (articles, n = 4) => {
    if (!Array.isArray(articles)) return null;
    articles = [...articles];
    let m = articles.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [articles[m], articles[i]] = [articles[i], articles[m]];
    }
    return articles.slice(0, n);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    // your server address or API URL goes here
    fetch("http://localhost:4000/api/articles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error in response");
        }
        return response.json();
      })
      .then((article_response) => {
        setTimeout(() => {
          console.log(article_response);
          setarticleData(sampleSize(article_response.data, 4));
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Purple Banner */}
      <div className="banner-container">
      <img src="/endoBan.jpg" alt="Women's Health Banner" className="header-image" />
      </div>
      <div className="headings">
        <div className="banner-title-pcos">Endometriosis</div>
      </div>

      <div className="container">
        {/* Summary Section */}
        <div className="summary-row">
          <img
            src="endo.webp"
            alt="Endometriosis illustration"
          />
          <div className="summary-text">
            <h2>What is Endometriosis?</h2>
            <p>
              Endometriosis is a condition where tissue similar to the lining of the uterus
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

        <div
  style={{
    textAlign: "center",
    margin: "60px auto",
    padding: "0 20px",
    maxWidth: "900px",
    backgroundColor: "#f9f4fc",
    border: "1px solid #e2d4f0",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.05)",
  }}
>
  <h2
    style={{
      fontSize: "1.8rem",
      fontWeight: "600",
      color: "#4b0082",
      marginBottom: "20px",
      paddingTop: "20px",
    }}
  >
    Watch: Endometriosis Explained (Signs & Symptoms, Diagnosis, Pathology, Treatment)
  </h2>
  <div
    style={{
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "20px",
    }}
  >
    <iframe
      src="https://www.youtube.com/embed/qDzKtyYUhas"
      title="Endometriosis Explained"
      allowFullScreen
      frameBorder="0"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    ></iframe>
  </div>
</div>


        {/* Current News Section */}
        <div className="resources">
          <h2>Current News & Resources</h2>
          <div className="card-row">
            {articleData &&
              articleData.map((article) => (
                <Card
                  key={article.id}
                  image={article.image_url}
                  title={article.article_title}
                  description={article.description}
                  link={article.website}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Endo;

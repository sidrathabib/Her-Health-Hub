import React, { useState, useEffect } from "react";
import Card from "../components/newsCard/Card";
import "./Hypo.css";

function Hypo() {
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
      <img src="/docBanner.jpg" alt="Women's Health Banner" className="header-image" />
      </div>
      <div className="headings">
        <div className="banner-title-pcos">Hypothyroidism</div>
      </div>

      <div className="container">
        {/* Summary Section */}
        <div className="summary-row">
          <img
            src="/gland.webp"
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
    Watch: Hypothyroidism Explained
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
      src="https://www.youtube.com/embed/hLNXJWLsjAE"
      title="Hypothyroidism Explained"
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
          <h2>
            <b>Current News & Resoruces</b>
          </h2>
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

export default Hypo;

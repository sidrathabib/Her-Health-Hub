import React, { useState, useEffect } from "react";
import Card from "../components/newsCard/Card";
import "./PCOS.css"; 

function PCOS() {
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
      <div className="banner-container">
      <img src="/anotherbanner.jpeg" alt="Women's Health Banner" className="header-image" />
      </div>
      <div className="headings">
        <div className="banner-title-pcos">Polycystic Ovary Syndrome</div>
      </div>

      <div className="pcos-page">
        <div className="container">
          <div className="summary-row">
            <img src="PCOS.jpg" alt="Illustration showing PCOS condition" />
            <div className="summary-text">
              <h2>What is PCOS?</h2>
              <p>
                Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that
                affects approximately 5 to 10 million women in the United
                States. Despite being common, it often goes undiagnosed due to
                its wide range of symptoms. Women who are suffering from PCOS
                usually have a variety of symptoms but can also be asymptomatic
                — which is usually the reason for no diagnosis. Our purpose is
                to help people find out if they may need support or further
                screening.
              </p>
            </div>
          </div>

          <div className="content-grid">
            <div className="section">
              <h2>PCOS and the Menstrual Cycle</h2>
              <p>
                A regular cycle lasts about 21-35 days, with stages such as the
                luteal phase, ovulation, follicular phase, and menstruation.
                However, in a cycle with PCOS, it is common to have irregular
                periods. It is important to note that a cycle with PCOS may
                have:
              </p>
              <ul>
                <li>A menstruation phase that lasts longer than 7 days</li>
                <li>
                  A prolonged or shortened luteal phase, which can also cause a
                  longer cycle lasting more than 35 days
                </li>
                <li>Fewer than 8 cycles throughout the year</li>
                <li>
                  Anovulation, when the ovulation phase is skipped, which is the
                  cause of a missed period
                </li>
              </ul>

              <h2>How to Get a Diagnosis?</h2>
              <p>
                To get a diagnosis, you will need to discuss your symptoms with
                your doctor. They will request blood work to check for:
              </p>
              <ul>
                <li>High levels of insulin</li>
                <li>High levels of testosterone</li>
                <li>Low levels of estrogen</li>
                <li>High levels of luteinizing hormone (LH)</li>
                <li>Low levels of follicle-stimulating hormone (FSH)</li>
                <li>High levels of progesterone</li>
              </ul>
              <p>
                If you have two of these three symptoms, you may be diagnosed
                with PCOS. It is important to note that advocating for an
                ultrasound is crucial, as it is not always requested. The
                ultrasound will check for the presence of cysts on the ovaries
                and can often show the size of the ovaries and how many cysts
                are present, which blood work cannot do.
              </p>
            </div>

            <div className="pcos-section">
              <h2>Physical Symptoms of PCOS</h2>
              <p>
                Physical symptoms can vary from person to person. It is
                important to note that symptoms may come and go with time and
                can be traced back to as early as one's first period. However,
                some people can go asymptomatic and may never realize there is
                an issue until they are dealing with infertility. Some symptoms
                may include:
              </p>
              <ul>
                <li>Facial hair</li>
                <li>Weight gain</li>
                <li>Acne</li>
                <li>
                  Excessive body hair, including on the chest, stomach, and face
                </li>
                <li>Hair loss or hair thinning</li>
                <li>Dark patches of skin</li>
                <li>Skin tags</li>
                <li>Pelvic pain</li>
                <li>Insulin resistance</li>
                <li>Sleep apnea</li>
                <li>Mood disorders such as anxiety and depression</li>
                <li>Infertility</li>
                <li>Irregular periods</li>
                <li>Heavy periods</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h1
              style={{
                color: "#524389",
                fontWeight: 700,
                marginTop: "30px",
                marginBottom: "10px",
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Treatments for PCOS:
            </h1>

            <p>
              Although there is no cure for PCOS, there are some treatments that
              can help manage your symptoms and reduce the stress it can cause,
              such as:
            </p>
            <h2>Dieting and Lifestyle Changes:</h2>
            <p>
              Lifestyle changes such as diet and exercise can help manage
              symptoms and weight gain. With PCOS, it is best to avoid fried
              foods, foods that are heavy on butter, limit red meat intake,
              refined flour, alcohol, and white rice. It is best to eat foods
              such as:
            </p>
            <ul>
              <li>
                Foods that are rich in OMEGA-3s (salmon, chia seeds, tuna, etc.)
              </li>
              <li>Whole grain foods such as kale, spinach, lettuce, etc.</li>
              <li>
                Fruits and vegetables such as berries, apples, oranges, etc.
              </li>
              <li>
                Foods that are high in fiber such as beans, lentils, and
                chickpeas
              </li>
              <li>
                Foods that are high in protein and aren't red meat, such as
                chicken, turkey, and eggs
              </li>
            </ul>

            <h2>Medication:</h2>
            <p>
              Medication can be prescribed depending on what your PCOS affects
              in your body, as not everyone has the same symptoms and effects on
              their bodies.
            </p>
            <p>
              Some medications that can help manage symptoms such as irregular
              or missed periods include birth control pills, which can help
              regulate your menstrual cycle and reduce symptoms such as acne and
              excessive hair growth. This is often what is most recommended by
              doctors and usually the first step in treatment. If blood work
              shows that you have high levels of insulin, your doctor may also
              recommend medications such as metformin, which is typically a
              diabetes medication but can stop the insulin resistance in one's
              body. Metformin can also help with weight loss when dealing with
              PCOS.
            </p>
            <p>
              If your PCOS is causing you to skip the ovulation phase,
              clomiphene can be prescribed to help ovulate. This medication can
              help by allowing the release of more estrogen in your body, which
              causes you to ovulate. There are some side effects such as hot
              flashes, mood swings, headaches, nausea, etc. If the symptoms get
              too bad, then spironolactone is recommended, which has the same
              effect with fewer symptoms.
            </p>
            <p>
              It is important to note that everyone's body is different, and
              talking to your gynecologist or endocrinologist is essential in
              your journey in dealing with PCOS.
            </p>
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
    Watch: Polycystic Ovary Syndrome Made Easy (PCOS Explained)
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
      src="https://www.youtube.com/embed/YVQzolMgNp0"
      title="Polycystic Ovary Syndrome Explained"
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
      </div>
    </>
  );
}

export default PCOS;

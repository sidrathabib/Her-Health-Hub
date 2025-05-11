import React from "react";
import "./PCOS.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PCOS = () => {
  return (
    <>
      <img
        src="/womensHealth.webp"
        alt="Women's Health Banner"
        className="header-image"
      />
      <div className="banner-pcos">
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

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    <h2>Watch: Polycystic Ovary Syndrome Made Easy (PCOS Explained)</h2>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src="https://www.youtube.com/embed/YVQzolMgNp0"
        title="Endometriosis Body Impact"
        allowFullScreen
        frameBorder="0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  </div>

          <div className="resources">
            <h2>
              <b>Related News Articles:</b>
            </h2>
            <div className="card-row">
              <div className="card">
                <a
                  href="https://nyulangone.org/conditions/polycystic-ovary-syndrome/treatments/medication-for-polycystic-ovary-syndrome"
                  target="_blank"
                  className="card-link"
                >
                  <div className="card">
                    <img
                      src="relatednews2.jpeg"
                      alt="Anti-Androgens for PCOS Treatment"
                    />
                    <div className="card-content">
                      <h4>Anti-Androgen Medications for PCOS</h4>
                      <p>NYU Langone Health</p>
                      <small>
                        Overview of how anti-androgens are used to manage PCOS
                        symptoms and hormonal imbalance.
                      </small>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/pcos-diet"
                  target="_blank"
                >
                  <img src="relatednews1.jpg" alt="PCOS Diet" />
                  <div className="card-content">
                    <h4>PCOS Diet</h4>
                    <p>Johns Hopkins Medicine</p>
                    <small>
                      Guidelines on dietary approaches for managing PCOS.
                    </small>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/polycystic-ovary-syndrome-pcos"
                  target="_blank"
                >
                  <img
                    src="relatednews3.jpeg"
                    alt="Polycystic Ovary Syndrome (PCOS)"
                  />
                  <div className="card-content">
                    <h4>Polycystic Ovary Syndrome (PCOS)</h4>
                    <p>#PCOS #Women'sHealth</p>
                    <small>
                      An overview of PCOS, its symptoms, causes, and treatment
                      options.
                    </small>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  href="https://www.massgeneralbrigham.org/en/about/newsroom/articles/nutrition-for-pcos"
                  target="_blank"
                >
                  <img src="relatednews4.jpg" alt="Managing PCOS With Diet" />
                  <div className="card-content">
                    <h4>
                      Managing PCOS With Diet: What to Eat and What to Avoid
                    </h4>
                    <p>#PCOS #Nutrition</p>
                    <small>
                      Insights on dietary choices to manage PCOS symptoms
                      effectively.
                    </small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCOS;

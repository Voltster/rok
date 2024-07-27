import React from "react";

const Oncology = () => {
  return (
    <div>
      <header class="hero">
        <div class="hero-content">
          <h1>Leading the Fight Against Cancer</h1>
          <p>Innovative Treatments, Compassionate Care</p>
          <a href="#services" class="cta-button">
            Learn More About Our Oncology Services
          </a>
        </div>
      </header>
      <section class="about-us">
        <h2>About Our Oncology Department</h2>
        <div class="content">
          <img src="team.jpg" alt="Oncology Team" />
          <p>
            At MHJ PHARMACONCEPTS, we are committed to providing cutting-edge
            oncology treatments and compassionate care...
          </p>
        </div>
      </section>
      <section id="services" class="services">
        <h2>Our Oncology Services</h2>
        <div class="service-grid">
          <div class="service">
            <img
              src="https://img.freepik.com/free-photo/woman-with-skin-cancer-talking-with-doctor_23-2148988508.jpg?t=st=1722056067~exp=1722059667~hmac=151c4b52418db699cd5b6069e562b0162e22556e6b65fd52e43e94d68d291fcf&w=740"
              alt="Chemotherapy"
            />
            <h3>Chemotherapy</h3>
            <p>
              State-of-the-art chemotherapy treatments designed to target cancer
              cells effectively.
            </p>
          </div>
          <div class="service">
            <img
              src="https://img.freepik.com/free-photo/researcher-looking-monitor-analysing-brain-scan-while-coworker-discussing-with-patient-background-about-side-effects-mind-functions-nervous-system-tomography-scan-working-laboratory_482257-13071.jpg?t=st=1722056108~exp=1722059708~hmac=90ceb4850af19ff8fd14e61ad69a5363111f42d88f71ea046426e4248755f248&w=900"
              alt="Radiation Therapy"
            />
            <h3>Radiation Therapy</h3>
            <p>
              Advanced radiation therapy techniques to minimize side effects and
              maximize treatment efficacy.
            </p>
          </div>
          <div class="service">
            <img
              src="https://img.freepik.com/free-photo/doctor-holds-red-ribbon-hiv-awareness-awareness-world-aids-day-world-sexual-health-day_1150-24400.jpg?t=st=1722056128~exp=1722059728~hmac=22f0d5d1aabcbef649575d2cc76ebd8d1a351bc45e88ac0df1188f2b912779c2&w=740"
              alt="Immunotherapy"
            />
            <h3>Immunotherapy</h3>
            <p>Harnessing the power of the immune system to fight cancer.</p>
          </div>
          <div class="service">
            <img src="clinical-trials-icon.png" alt="Clinical Trials" />
            <h3>Clinical Trials</h3>
            <p>Access to the latest clinical trials and research studies.</p>
          </div>
        </div>
      </section>
      <section class="patient-stories">
        <h2>Hear From Our Patients</h2>
        <div class="testimonial-carousel"></div>
      </section>
      <section class="team">
        <h2>Meet Our Oncology Experts</h2>
        <div class="team-grid"></div>
      </section>
      <section class="contact">
        <h2>Get in Touch</h2>
        <form class="contact-form"></form>
        <div class="contact-details">
          <p>Phone: 123-456-7890</p>
          <p>Email: oncology@mhjpharmaconcepts.com</p>
          <div class="map"></div>
        </div>
      </section>
    </div>
  );
};

export default Oncology;

import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";
import "../style/resume.css";

export default function Resume() {
  return (
    <article classNameName="resume" data-page="resume">
      <header>
        <h2 className="pageTitle">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Vidya pratishthan's institute of technology,Baramati.
            </h4>

            <span>2024 — 2026</span>

            <p className="timeline-text">
              Master of Computer Application
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Tuljaram chaturchand college, Baramati.</h4>

            <span>2021 — 2024</span>

            <p className="timeline-text">
              Bachelor in Computer Application.
            </p>
          </li>

          
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Freelance technical trainer
            </h4>

            <span>2024 — Present</span>

            <p className="timeline-text">
              provide Technical training to institutes on topics such as 
              web development, Python, Java(basic to advance), android development(java),
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Ajspire</h4>

            <span>2024 — 2024</span>

            <p className="timeline-text">
              React intern, mastered Reactjs within 6 months.
            </p>
          </li>

          
        </ol>
      </section>
    </article>
  );
}

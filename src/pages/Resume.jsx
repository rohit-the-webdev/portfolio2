import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";
import "../style/resume.css";

export default function Resume() {
  return (
    <article className="resume mt-4" data-page="resume">
      <div className="timeline">

        {/* Top Book Icon + Title */}
        <div className="timeline-header">
          <IonIcon icon={bookOutline} className="timeline-icon" />
          <h2>Education</h2>
        </div>

        {/* Timeline Items */}
        <div className="timeline-item">
          <h6>Vidya pratishthans's institue of technology, Baramati</h6>
          <span className="year">2024 — 2026</span>
          <p>Master of Computer Application</p>
        </div>

        <div className="timeline-item">
          <h6>tuljaram chaturchand college, Baramti.</h6>
          <span className="year">2021 — 2024</span>
          <p>Bachelor in Computer Application</p>
        </div>
      </div>
    </article>
  );
}

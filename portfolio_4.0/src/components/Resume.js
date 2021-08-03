import React from "react";
import CVIcon from "../assets/curriculum-vitae_compressed.png";
import wow from "../assets/wow.png";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <fragment>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://rorylkd.github.io/Portfolio_3.0/assets/BootcampResume.pdf"
        className="allIcons"
      >
        <img src={CVIcon} alt="CV Icon" className="icon"></img>
      </a>

      <ul className="proficiencies">
        Proficient In:
        <li>Javascript!</li>
        <li>Node.js!</li>
        <li>React!</li>
        <li>Express!</li>
        <li>MongoDB!</li>
        <li>GraphQL!</li>
        <li>
          Wow! <img src={wow} alt="wow" className="wow"></img>
        </li>
      </ul>
      <Footer />
    </fragment>
  );
}

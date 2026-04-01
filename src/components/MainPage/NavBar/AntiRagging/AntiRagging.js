import React from "react";
import AntiRaggingContent from "./AntiRaggingContent";
import './Antiragging.css'

const Antiragging = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="Antiragging-Main">
      <div className="allLeftMenuAOP">
        <button
          onClick={() => scrollToSection('about')}
          className="menubutton"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('committee')}
          className="menubutton"
        >
          Committee Members
        </button>
      </div>
      <div className="antiragging-content-wrapper">
        <AntiRaggingContent />
      </div>
    </div>
  );
};

export default Antiragging;

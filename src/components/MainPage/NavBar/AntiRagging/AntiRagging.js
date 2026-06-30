import React from "react";
import AntiRaggingContent from "./AntiRaggingContent";
import './Antiragging.css'

const Antiragging = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('.header-container')?.offsetHeight || 0;
      const navHeight = document.querySelector('.topnav')?.offsetHeight || 0;
      const pageGap = window.innerWidth >= 901 ? 24 : 12;
      const targetTop = element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: Math.max(targetTop - headerHeight - navHeight - pageGap, 0),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="Antiragging-Main">
      <nav className="allLeftMenuAOP antiragging-tabs" aria-label="Anti-ragging page sections">
        <button
          onClick={() => scrollToSection('about')}
          className="menubutton antiragging-tab"
          type="button"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('committee')}
          className="menubutton antiragging-tab"
          type="button"
        >
          Committee Members
        </button>
      </nav>
      <div className="antiragging-content-wrapper">
        <AntiRaggingContent />
      </div>
    </div>
  );
};

export default Antiragging;

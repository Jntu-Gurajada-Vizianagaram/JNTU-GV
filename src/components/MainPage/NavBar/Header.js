import React, { useEffect, useState } from "react";
import myImage from "./jntugvcev.jpg";
import "./Header.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>

      <img src={myImage} alt="JNTUV_LOGO" className="logo" fetchpriority="high" />
      <div className="header-text">
        <h1 className="university-name">JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM</h1>
        <h5 className="location">VIZIANAGARAM-535 003, A.P</h5>
        {!isScrolled && <h6 className="location" id="act">(Established by Andhra Pradesh Act No.22 of 2021)</h6>}
      </div>

    </div>

  );
};

export default Header;

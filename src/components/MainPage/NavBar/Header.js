import React, { useEffect, useState } from "react";
import myImage from "./jntugvcev.jpg";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      <img src={myImage} alt="JNTUV_LOGO" className="logo" />
      <div className="header-text">
        <h1 className="university-name">JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM</h1>
        <h5 className="location">VIZIANAGARAM-535 003, A.P</h5>
        {!isScrolled && <h6 className="location">(Established by Andhra Pradesh Act No.22 of 2021)</h6>}
      </div>
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Search from './Search/Search';
import './HeaderTop.css';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import PersonOffIcon from '@mui/icons-material/PersonOff';

const HeaderTop = () => {
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
    <div>
      {!isScrolled &&
        <NavBar />}
    </div>
  )
}





const NavBar = () => {
  const links = [
    { name: `Anti-Ragging`, path: "/anti-ragging" },
    { name: `Idea Club`, path: "https://ideaclub.jntugv.edu.in" },
    { name: `MoUs`, path: "https://mou.jntugv.edu.in" },
    { name: `Events`, path: "https://events.jntugv.edu.in" },
    {name: `Alumni Connect`, path: "https://alumni.jntugv.edu.in"},
    {
      name: 'UGC Mandatory Disclosures',
      path: '/mandatory-disclosures',
    },
    { name: `JNTU_Act 8 of 2026`, path: "/assets/acts/act_8_of_2026.pdf", isExternal: true },
    { name: `JNTU_Act 30 of 2008`, path: "/assets/acts/act_30_of_2008.pdf", isExternal: true },
    { name: `JNTU_Act 22 of 2021`, path: "/assets/acts/act_22_of_2021.pdf", isExternal: true },
  ]


  return (
    <>
      <nav className="topnavbar navbar navbar-expand custom-navbar shadow-sm">
        <div className="container-fluid">
          <div className="navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="top-nav-list ms-auto">
              {links.map((link, index) => (
                <li key={index}>
                  {link.path.startsWith('http') || link.isExternal ? (
                    <a
                      href={link.path}
                      className="top-nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link className="top-nav-link" to={link.path}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bigSearch ms-3">
            <Search />
          </div>
        </div>
      </nav>
    </>
  );
};





export default HeaderTop

import {React, useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonOffIcon from '@mui/icons-material/PersonOff';

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
        <NavBar/>}
    </div>
  )
}





const NavBar = () => {
  const links=[
    {"icon":<PersonOffIcon/>, "name": `ANTI-RAGGING`, "path": "/anti-ragging/about" },
    { "icon":<PsychologyIcon/>, "name": `IDEACLUB`, "path": "http://ideaclub.jntugv.edu.in" },
  ]

  return (
<>
<style>
        {`
          .custom-navbar {
            background-image: linear-gradient(to left, #370a68, #55b2e7);
            color: white;
            padding: 0;
          }
          .custom-navbar .nav-link, i {
            color: white;
            font-weight: bold;
            transition: color 0.3s ease;
            
          }
          .custom-navbar .nav-link:hover {
            color: #55b2e7; /* Light blue hover effect */
          }

          /* Responsive font size for nav links */
          .custom-navbar .nav-link {
           font-size: 0.9rem;/* Default size */
          }
          @media (max-width: 768px) {
            .custom-navbar .nav-link {
              font-size: 0.8rem; /* Smaller size for tablets */
            }
          }
          @media (max-width: 576px) {
            .custom-navbar .nav-link {
              font-size: 0.7rem; /* Even smaller size for phones */
            }
          }
        `}
      </style>
    <nav className="navbar navbar-expand custom-navbar shadow-sm">
      <div className="container-fluid">
       
        {/* Navigation links */}
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                
                <Link className="nav-link" to={link.path}>
                {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};





export default HeaderTop
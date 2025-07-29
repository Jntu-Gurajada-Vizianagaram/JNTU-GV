import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";


import { Route, Routes } from "react-router-dom";

// import BelowBar from "./components/BelowBar/BelowBar";
import Header from "./components/MainPage/NavBar/Header";

import AboutJNTUGV from "./components/MainPage/NavBar/Aboutus/AboutJNTUGV";
import AdmissionsOP from "./components/MainPage/NavBar/Academics/Admissions/AdmissionsOP";
import AffliatedCollegesOP from "./components/MainPage/NavBar/Academics/Affliated Colleges/AffliatedCollegesOP";
import AutonomousColleges from "./components/MainPage/NavBar/Academics/Autonomous Colleges/AutonomousColleges";
import ConstituentCollegesOP from "./components/MainPage/NavBar/Academics/Constituent Colleges/ConstituentCollegesOP";
import AcademicsOP from "./components/MainPage/NavBar/Academics/Programs Offered/AcademicsOP";
import Chancellor from "./components/MainPage/NavBar/Administration/Chancellor";
import OSD from "./components/MainPage/NavBar/Administration/OSD/OSD";
import Registrar from "./components/MainPage/NavBar/Administration/Registrar";
import ViceChancellor from "./components/MainPage/NavBar/Administration/ViceChancellor";
import AcademicAudit from "./components/MainPage/NavBar/Directorates/AcademicAudit";
import AcademicPlanning from "./components/MainPage/NavBar/Directorates/AcademicPlanning";
import Admissions from "./components/MainPage/NavBar/Directorates/Admissions";
import AlumniRelations from "./components/MainPage/NavBar/Directorates/AlumniRelations";
import Empowerment from "./components/MainPage/NavBar/Directorates/Empowerment";
import Evaluation from "./components/MainPage/NavBar/Directorates/Evaluation";
import FacultyDevelopmentCell from "./components/MainPage/NavBar/Directorates/FacultyDevelopmentCell";
import IQAC from "./components/MainPage/NavBar/Directorates/IQAC";
import Placements from "./components/MainPage/NavBar/Directorates/Placements";
import Research from "./components/MainPage/NavBar/Directorates/Research";
import SportsAdministration from "./components/MainPage/NavBar/Directorates/SportsAdministration";


import Boschairman from "./components/MainPage/NavBar/Academics/Bos-chairman/Boschairman";

import Grievance from "./components/GrievanceForm/GrievanceForm";
import AboutusMain from "./components/MainPage/NavBar/Aboutus/AboutusMain";
import AcademicsMain from "./components/MainPage/NavBar/Academics/AcademicsMain";
import Calender from "./components/MainPage/NavBar/Academics/Calender/Calender";
import AdministrationMain from "./components/MainPage/NavBar/Administration/AdministrationMain";
import ContactUs from "./components/MainPage/NavBar/Contact-Us/ContactUs";
import DirectoratesMain from "./components/MainPage/NavBar/Directorates/DirectoratesMain";
import Controller from "./components/MainPage/NavBar/Examinations/Controller";
import Controller1 from "./components/MainPage/NavBar/Examinations/Controller1";
import Controller2 from "./components/MainPage/NavBar/Examinations/Controller2";
import Controller3 from "./components/MainPage/NavBar/Examinations/Controller3";
import ControllerPG from "./components/MainPage/NavBar/Examinations/ControllerPG";
import ControllerSDC from "./components/MainPage/NavBar/Examinations/ControllerSDC";
import EvaluationExam from "./components/MainPage/NavBar/Examinations/EvaluationExam";
import ExaminationMain from "./components/MainPage/NavBar/Examinations/ExaminationMain";
import ExamResults from "./components/MainPage/NavBar/Examinations/ExamResults";

import Cresense from "./components/Events/Cresense";
import Eclectique from "./components/Events/Eclectique ";
import Eisen from "./components/Events/Eisen";
import Inauguration from "./components/Events/Inauguration";
import Ityuktha from "./components/Events/Ityuktha";
import RepublicDay from "./components/Events/RepublicDay";
import WomensDay from "./components/Events/WomensDay";
import CompleteGallery from "./components/Gallery/CompleteGallery";
import ScrollToTop from "./components/HomePage/AboutUsMain/ScrollToTop";
import Homepage from "./components/HomePage/Homepage";
import NewsAndEvents from "./components/HomePage/NewsAndEvents/NewsAndEvents";
import Chatbot from "./components/MainPage/Chatbot/Chatbot";
import Footer from "./components/MainPage/Footer/Footer";
import PrivacyPolicy from "./components/MainPage/Footer/PrivacyPolicy";
import Regulations from "./components/MainPage/NavBar/Academics/Regulations/Regulations";
import Syllabus from "./components/MainPage/NavBar/Academics/Syllabus/Syllabus";
import Chairpersons from "./components/MainPage/NavBar/Administration/Chairpersons/Chairpersons";
import AboutUS from "./components/MainPage/NavBar/AntiRagging/AboutUS/AboutUs";
import Antiragging from "./components/MainPage/NavBar/AntiRagging/AntiRagging";
import Committee from "./components/MainPage/NavBar/AntiRagging/Commitee/Committee";
import HeaderTop from "./components/MainPage/NavBar/HeaderTop";
import Banks from "./components/MainPage/NavBar/Infrastructure/Banks/Banks";
import Canteen from "./components/MainPage/NavBar/Infrastructure/Canteen/Canteen";
import Dispensary from "./components/MainPage/NavBar/Infrastructure/Dispensary/Dispensary";
import EngineeringCell from "./components/MainPage/NavBar/Infrastructure/EngineeringCell/EngineeringCell";
import GuestHouse from "./components/MainPage/NavBar/Infrastructure/GuestHouse/GuestHouse";
import Hostels from "./components/MainPage/NavBar/Infrastructure/Hostels/Hostels";
import InfrastructureMain from "./components/MainPage/NavBar/Infrastructure/InfrastructureMain";
import Library from "./components/MainPage/NavBar/Infrastructure/Library/Library";
import MusicClub from "./components/MainPage/NavBar/Infrastructure/MusicClub/MusicClub";
import SportsandFitness from "./components/MainPage/NavBar/Infrastructure/SportsandFitness/SportsandFitness";
import StaffQuarters from "./components/MainPage/NavBar/Infrastructure/StaffQuarters/StaffQuarters";
import Studentactivityclub from "./components/MainPage/NavBar/Infrastructure/Studentactivityclub/Studentactivityclub";
import NavBar from "./components/MainPage/NavBar/NavBar";
import Sitemap from "./components/MainPage/NavBar/Sitemap";

function App() {
  return (
    <div>
      {/* <BelowBar /> */}
      <HeaderTop/>
      <Header />
      <NavBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/sitemap" element={<Sitemap/>}/>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutusMain />}>
          <Route path="about-jntugv" element={<AboutJNTUGV id="about-jntugv" />} />
          <Route path="vision" element={<AboutJNTUGV id="vision" />} />
          <Route path="mission" element={<AboutJNTUGV id="mission" />} />
        </Route>
        <Route path="/academics" element={<AcademicsMain />}>
          <Route
            path="constituent-colleges"
            element={<ConstituentCollegesOP />}
          />
          <Route path="programs-offered" element={<AcademicsOP />} />
          <Route path="admissions" element={<AdmissionsOP />} />
          <Route path="affliated-colleges" element={<AffliatedCollegesOP />} />
          <Route path="autonomous-colleges" element={<AutonomousColleges />} />
          <Route path="bos-chairman" element={<Boschairman />} />

          <Route path="Calendar" element={<Calender />} />
          <Route path="academic-syllabus" element={<Syllabus />} />
          <Route path="academic-regulations" element={<Regulations />} />
        </Route>
        <Route path="/administration" element={<AdministrationMain />}>
          <Route path="chancellor" element={<Chancellor />} />{" "}
          <Route path="vice-chancellor" element={<ViceChancellor />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="chairpersons" element={<Chairpersons />} />
          <Route path="osd" element={<OSD />} />
        </Route>
        <Route path="/directorates" element={<DirectoratesMain />}>
          <Route path="academic-audit" element={<AcademicAudit />} />{" "}
          <Route path="academic-planning" element={<AcademicPlanning />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="alumni-relations" element={<AlumniRelations />} />{" "}
          <Route path="empowerment" element={<Empowerment />} />
          <Route path="evaluation" element={<Evaluation />} />
          <Route
            path="faculty-development-cell"
            element={<FacultyDevelopmentCell />}
          />
          <Route path="iqac" element={<IQAC />} />
          <Route path="placements" element={<Placements />} />
          <Route path="research" element={<Research />} />
          <Route
            path="sports-administration"
            element={<SportsAdministration />}
          />
        </Route>
        <Route path="/examination" element={<ExaminationMain />}>
          <Route path="director-evaluation" element={<EvaluationExam />} />
          <Route path="controller" element={<Controller />} />
          <Route path="controller-sdc" element={<ControllerSDC />} />
          <Route path="controller1" element={<Controller1 />} />
          <Route path="controller2" element={<Controller2 />} />
          <Route path="controller3" element={<Controller3 />} />
          <Route path="controller-pg" element={<ControllerPG />} />
          <Route path="examresults" element={<ExamResults />} />
        </Route>
        <Route path="/anti-ragging" element={<Antiragging />}>
          <Route path="about" element={<AboutUS />} />
          <Route path="committee" element={<Committee />} />
        </Route>

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/grievance-form" element={<Grievance />} />
        <Route path="/news-and-events" element={<NewsAndEvents />} />
        <Route path="/gallery" element={<CompleteGallery />} />

        <Route path="/events/republic-day" element={<RepublicDay />} />
        <Route path="/events/inauguration-event" element={<Inauguration />} />
        <Route path="/events/womens-day" element={<WomensDay />} />
        <Route path="/events/eisen-2k24" element={<Eisen />} />
        <Route path="/events/cresense-2k24" element={<Cresense />} />
        <Route path="/events/eclectique-2k24" element={<Eclectique />} />
        <Route path="/events/ityuktha-2k24" element={<Ityuktha />} />



        <Route path="/infrastructure" element={<InfrastructureMain />}>
          <Route path="about-library" element={<Library />} />
          <Route path="about-hostels" element={<Hostels />} />
          <Route
            path="about-sports-and-fitness"
            element={<SportsandFitness />}
          />
          <Route path="about-dispensary" element={<Dispensary />} />
          <Route path="about-banks" element={<Banks />} />
          <Route path="about-engineering-cell" element={<EngineeringCell />} />
          <Route path="about-canteen" element={<Canteen />} />
          <Route path="about-staff-quarters" element={<StaffQuarters />} />
          <Route path="about-guest-house" element={<GuestHouse />} />
          <Route path="about-music-club" element={<MusicClub />} />
          <Route
            path="about-student-activity-club"
            element={<Studentactivityclub />}
          />
        </Route>
        <Route path="/privacy" element={<PrivacyPolicy />}></Route>

      </Routes>
      <Chatbot/>
      <Footer />
    </div>
  );
}

export default App;

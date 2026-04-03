import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";


import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/MainPage/NavBar/Header";
// import HeaderTop from "./components/MainPage/NavBar/HeaderTop";
import NavBar from "./components/MainPage/NavBar/NavBar";
import ScrollToTop from "./components/HomePage/AboutUsMain/ScrollToTop";
import Footer from "./components/MainPage/Footer/Footer";
import Homepage from "./components/HomePage/Homepage";
import Sitemap from "./components/MainPage/NavBar/Sitemap";
import LastUpdated from "./components/MainPage/LastUpdated/LastUpdated";


const AboutJNTUGV = React.lazy(() => import("./components/MainPage/NavBar/Aboutus/AboutJNTUGV"));
const AdmissionsOP = React.lazy(() => import("./components/MainPage/NavBar/Academics/Admissions/AdmissionsOP"));
const AffliatedCollegesOP = React.lazy(() => import("./components/MainPage/NavBar/Academics/Affliated Colleges/AffliatedCollegesOP"));
const AutonomousColleges = React.lazy(() => import("./components/MainPage/NavBar/Academics/Autonomous Colleges/AutonomousColleges"));
const ConstituentCollegesOP = React.lazy(() => import("./components/MainPage/NavBar/Academics/Constituent Colleges/ConstituentCollegesOP"));
const AcademicsOP = React.lazy(() => import("./components/MainPage/NavBar/Academics/Programs Offered/AcademicsOP"));
const Chancellor = React.lazy(() => import("./components/MainPage/NavBar/Administration/Chancellor"));
const OSD = React.lazy(() => import("./components/MainPage/NavBar/Administration/OSD/OSD"));
const Registrar = React.lazy(() => import("./components/MainPage/NavBar/Administration/Registrar"));
const ViceChancellor = React.lazy(() => import("./components/MainPage/NavBar/Administration/ViceChancellor"));
const AcademicAudit = React.lazy(() => import("./components/MainPage/NavBar/Directorates/AcademicAudit"));
const AcademicPlanning = React.lazy(() => import("./components/MainPage/NavBar/Directorates/AcademicPlanning"));
const AcademicAuditPlanning = React.lazy(() => import("./components/MainPage/NavBar/Directorates/AcademicAuditPlanning"));
const Admissions = React.lazy(() => import("./components/MainPage/NavBar/Directorates/Admissions"));
const AlumniRelations = React.lazy(() => import("./components/MainPage/NavBar/Directorates/AlumniRelations"));
const Empowerment = React.lazy(() => import("./components/MainPage/NavBar/Directorates/Empowerment"));
const Evaluation = React.lazy(() => import("./components/MainPage/NavBar/Directorates/Evaluation"));
const FacultyDevelopmentCell = React.lazy(() => import("./components/MainPage/NavBar/Directorates/FacultyDevelopmentCell"));
const IQAC = React.lazy(() => import("./components/MainPage/NavBar/Directorates/IQAC"));
const Placements = React.lazy(() => import("./components/MainPage/NavBar/Directorates/Placements"));
const Research = React.lazy(() => import("./components/MainPage/NavBar/Directorates/Research"));
const SportsAdministration = React.lazy(() => import("./components/MainPage/NavBar/Directorates/SportsAdministration"));
const AboutDirectorates = React.lazy(() => import("./components/MainPage/NavBar/Directorates/AboutDirectorates"));

const Boschairman = React.lazy(() => import("./components/MainPage/NavBar/Academics/Bos-chairman/Boschairman"));

const Grievance = React.lazy(() => import("./components/GrievanceForm/GrievanceForm"));
const AboutusMain = React.lazy(() => import("./components/MainPage/NavBar/Aboutus/AboutusMain"));
const AcademicsMain = React.lazy(() => import("./components/MainPage/NavBar/Academics/AcademicsMain"));
const Calender = React.lazy(() => import("./components/MainPage/NavBar/Academics/Calender/Calender"));
const AdministrationMain = React.lazy(() => import("./components/MainPage/NavBar/Administration/AdministrationMain"));
const ContactUs = React.lazy(() => import("./components/MainPage/NavBar/Contact-Us/ContactUs"));
const DirectoratesMain = React.lazy(() => import("./components/MainPage/NavBar/Directorates/DirectoratesMain"));
const Controller = React.lazy(() => import("./components/MainPage/NavBar/Examinations/Controller"));
const Controller1 = React.lazy(() => import("./components/MainPage/NavBar/Examinations/Controller1"));
const Controller2 = React.lazy(() => import("./components/MainPage/NavBar/Examinations/Controller2"));
const Controller3 = React.lazy(() => import("./components/MainPage/NavBar/Examinations/Controller3"));
const ControllerPG = React.lazy(() => import("./components/MainPage/NavBar/Examinations/ControllerPG"));
const ControllerSDC = React.lazy(() => import("./components/MainPage/NavBar/Examinations/ControllerSDC"));
const EvaluationExam = React.lazy(() => import("./components/MainPage/NavBar/Examinations/EvaluationExam"));
const ExaminationMain = React.lazy(() => import("./components/MainPage/NavBar/Examinations/ExaminationMain"));
const ExamResults = React.lazy(() => import("./components/MainPage/NavBar/Examinations/ExamResults"));

const Cresense = React.lazy(() => import("./components/Events/Cresense"));
const Eclectique = React.lazy(() => import("./components/Events/Eclectique "));
const Eisen = React.lazy(() => import("./components/Events/Eisen"));
const Inauguration = React.lazy(() => import("./components/Events/Inauguration"));
const Ityuktha = React.lazy(() => import("./components/Events/Ityuktha"));
const RepublicDay = React.lazy(() => import("./components/Events/RepublicDay"));
const WomensDay = React.lazy(() => import("./components/Events/WomensDay"));
const CompleteGallery = React.lazy(() => import("./components/Gallery/CompleteGallery"));
const NewsAndEvents = React.lazy(() => import("./components/HomePage/NewsAndEvents/NewsAndEvents"));
const PrivacyPolicy = React.lazy(() => import("./components/MainPage/Footer/PrivacyPolicy"));
const Regulations = React.lazy(() => import("./components/MainPage/NavBar/Academics/Regulations/Regulations"));
const Syllabus = React.lazy(() => import("./components/MainPage/NavBar/Academics/Syllabus/Syllabus"));
// const Chairpersons = React.lazy(() => import("./components/MainPage/NavBar/Administration/Chairpersons/Chairpersons"));
const Antiragging = React.lazy(() => import("./components/MainPage/NavBar/AntiRagging/AntiRagging"));
const HeaderTop = React.lazy(() => import("./components/MainPage/NavBar/HeaderTop"));
const Banks = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/Banks/Banks"));
const Canteen = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/Canteen/Canteen"));
const Dispensary = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/Dispensary/Dispensary"));
const EngineeringCell = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/EngineeringCell/EngineeringCell"));
const GuestHouse = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/GuestHouse/GuestHouse"));
const Hostels = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/Hostels/Hostels"));
const InfrastructureMain = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/InfrastructureMain"));
const Library = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/Library/Library"));
const MusicClub = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/MusicClub/MusicClub"));
const SportsandFitness = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/SportsandFitness/SportsandFitness"));
const StaffQuarters = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/StaffQuarters/StaffQuarters"));
const Studentactivityclub = React.lazy(() => import("./components/MainPage/NavBar/Infrastructure/Studentactivityclub/Studentactivityclub"));

function App() {
  return (
    <div>
      {/* <BelowBar /> */}
      <HeaderTop />
      <Header />
      <NavBar />
      <ScrollToTop />
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#370a68' }}><h2>Loading...</h2></div>}>
        <Routes>
          <Route path="/sitemap" element={<Sitemap />} />
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
            <Route path="osd" element={<OSD />} />
          </Route>
          <Route path="/directorates" element={<DirectoratesMain />}>
            <Route index element={<AboutDirectorates />} />
            <Route path="about-directorates" element={<AboutDirectorates />} />
            <Route path="academic-audit" element={<AcademicAudit />} />{" "}
            <Route path="academic-planning" element={<AcademicPlanning />} />
            <Route path="academic-audit-planning" element={<AcademicAuditPlanning />} />
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
            <Route path="director" element={<EvaluationExam />} />
            <Route path="controller" element={<Controller />} />
            <Route path="controller-sdc" element={<ControllerSDC />} />
            <Route path="controller1" element={<Controller1 />} />
            <Route path="controller2" element={<Controller2 />} />
            <Route path="controller3" element={<Controller3 />} />
            <Route path="controller-pg" element={<ControllerPG />} />
            <Route path="examresults" element={<ExamResults />} />
          </Route>
          <Route path="/anti-ragging" element={<Antiragging />} />

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
      </Suspense>
      {/* <Chatbot/> */}
      <LastUpdated />
      <Footer />
    </div>
  );
}

export default App;

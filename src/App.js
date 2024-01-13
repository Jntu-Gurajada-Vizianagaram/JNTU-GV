import React from "react";
import "./App.css";
import Homepage from "./Homepage";
// import BelowBar from "./components/BelowBar/BelowBar";
import Header from "./components/MainPage/Header/Header";

import AboutJNTUGV from "./components/MainPage/Header/Aboutus/AboutJNTUGV/AboutJNTUGV";
import Vision from "./components/MainPage/Header/Aboutus/Vision/Vision";
import Mission from "./components/MainPage/Header/Aboutus/Mission/Mission";
import Chancellor from "./components/MainPage/Header/Administration/Chancellor/Chancellor";
import ViceChancellor from "./components/MainPage/Header/Administration/ViceChancellor/ViceChancellor";
import Registrar from "./components/MainPage/Header/Administration/Registrar/Registrar";
import AcademicAudit from "./components/MainPage/Header/Directorates/AcademicAudit/AcademicAudit";
import AcademicPlanning from "./components/MainPage/Header/Directorates/AcademicPlanning/AcademicPlanning";
import Admissions from "./components/MainPage/Header/Directorates/Admissions/Admissions";
import AlumniRelations from "./components/MainPage/Header/Directorates/AlumniRelations/AlumniRelations";
import Empowerment from "./components/MainPage/Header/Directorates/Empowerment/Empowerment";
import Evaluation from "./components/MainPage/Header/Directorates/Evaluation/Evaluation";
import FacultyDevelopmentCell from "./components/MainPage/Header/Directorates/FacultyDevelopmentCell/FacultyDevelopmentCell";
import IQAC from "./components/MainPage/Header/Directorates/IQAC/IQAC";
import Placements from "./components/MainPage/Header/Directorates/Placements/Placements";
import Research from "./components/MainPage/Header/Directorates/Research/Research";
import SportsAdministration from "./components/MainPage/Header/Directorates/SportsAdministration/SportsAdministration";
import { Route, Routes } from "react-router-dom";
import AcademicsOP from "./components/MainPage/Header/Academics/Programs Offered/AcademicsOP";
import ConstituentCollegesOP from "./components/MainPage/Header/Academics/Constituent Colleges/ConstituentCollegesOP";
import AdmissionsOP from "./components/MainPage/Header/Academics/Admissions/AdmissionsOP";
import AffliatedCollegesOP from "./components/MainPage/Header/Academics/Affliated Colleges/AffliatedCollegesOP";
import Boschairman from "./components/MainPage/Header/Academics/Bos-chairman/Boschairman";

import Calender from "./components/MainPage/Header/Academics/Calender/Calender";
import ContactUs from "./components/MainPage/Header/Contact-Us/ContactUs";
import AboutusMain from "./components/MainPage/Header/Aboutus/AboutusMain";
import AcademicsMain from "./components/MainPage/Header/Academics/AcademicsMain";
import AdministrationMain from "./components/MainPage/Header/Administration/AdministrationMain";
import DirectoratesMain from "./components/MainPage/Header/Directorates/DirectoratesMain";
import ExaminationMain from "./components/MainPage/Header/Examinations/ExaminationMain";
import EvaluationExam from "./components/MainPage/Header/Examinations/EvaluationExam";
import Controller from "./components/MainPage/Header/Examinations/Controller";
import ControllerSDC from "./components/MainPage/Header/Examinations/ControllerSDC";
import Controller1 from "./components/MainPage/Header/Examinations/Controller1";
import Controller2 from "./components/MainPage/Header/Examinations/Controller2";
import Controller3 from "./components/MainPage/Header/Examinations/Controller3";
import ControllerPG from "./components/MainPage/Header/Examinations/ControllerPG";
import ExamResults from "./components/MainPage/Header/Examinations/ExamResults";
import Grievance from "./components/GrievanceForm/GrievanceForm";
import Results from "./components/MainPage/Results/Results-main";
import R13 from "./components/MainPage/Results/r13";
import R20 from "./components/MainPage/Results/r20";
import R16 from "./components/MainPage/Results/r16";
import R19 from "./components/MainPage/Results/r19";
import Chairpersons from "./components/MainPage/Header/Administration/Chairpersons/Chairpersons";
import NewsAndEvents from "./components/NewsAndEvents/NewsAndEvents";
import CompleteGallery from "./components/Gallery/CompleteGallery";
import Syllabus from "./components/MainPage/Header/Academics/Syllabus/Syllabus";
import InfrastructureMain from "./components/MainPage/Header/Infrastructure/InfrastructureMain";
import Library from "./components/MainPage/Header/Infrastructure/Library/Library";
import Hostels from "./components/MainPage/Header/Infrastructure/Hostels/Hostels";
import SportsandFitness from "./components/MainPage/Header/Infrastructure/SportsandFitness/SportsandFitness";
import Dispensary from "./components/MainPage/Header/Infrastructure/Dispensary/Dispensary";
import Banks from "./components/MainPage/Header/Infrastructure/Banks/Banks";
import EngineeringCell from "./components/MainPage/Header/Infrastructure/EngineeringCell/EngineeringCell";
import Canteen from "./components/MainPage/Header/Infrastructure/Canteen/Canteen";
import StaffQuarters from "./components/MainPage/Header/Infrastructure/StaffQuarters/StaffQuarters";
import GuestHouse from "./components/MainPage/Header/Infrastructure/GuestHouse/GuestHouse";
import MusicClub from "./components/MainPage/Header/Infrastructure/MusicClub/MusicClub";
import Studentactivityclub from "./components/MainPage/Header/Infrastructure/Studentactivityclub/Studentactivityclub";
import Footer from "./components/MainPage/Footer/Footer";
import Dropdown from "./components/MainPage/Header/Dropdown";


function App() {
  return (
    <div>
      {/* <BelowBar /> */}
      <Header />
      <Dropdown />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutusMain />}>
          <Route path="about-jntugv" element={<AboutJNTUGV />} />
          <Route path="vision" element={<Vision />} />
          <Route path="mission" element={<Mission />} />
        </Route>
        <Route path="/academics" element={<AcademicsMain />}>
          <Route
            path="constituent-colleges"
            element={<ConstituentCollegesOP />}
          />
          <Route path="programs-offered" element={<AcademicsOP />} />
          <Route path="admissions" element={<AdmissionsOP />} />
          <Route path="affliated-colleges" element={<AffliatedCollegesOP />} />
          <Route path="bos-chairman" element={<Boschairman />} />

          <Route path="calender" element={<Calender />} />
          <Route path="academic-syllabus" element={<Syllabus />} />
        </Route>
        <Route path="/administration" element={<AdministrationMain />}>
          <Route path="chancellor" element={<Chancellor />} />{" "}
          <Route path="vice-chancellor" element={<ViceChancellor />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="chairpersons" element={<Chairpersons />} />

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
        <Route path="/results" element={<Results />}>
          <Route path="r13" element={<R13 />} />
          <Route path="r16" element={<R16 />} />
          <Route path="r19" element={<R19 />} />
          <Route path="r20" element={<R20 />} />
        </Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/grievance-form" element={<Grievance />} />
        <Route path="/news-and-events" element={<NewsAndEvents/>} />
        <Route path="/gallery" element={<CompleteGallery />} />

        <Route path="/infrastructure" element={<InfrastructureMain />}>
          <Route path="about-library" element={<Library />} />
          <Route path="about-hostels" element={<Hostels />} />
          <Route path="about-sports-and-fitness" element={<SportsandFitness />} />
          <Route path="about-dispensary" element={<Dispensary />} />
          <Route path="about-banks" element={<Banks />} />
          <Route path="about-engineering-cell" element={<EngineeringCell />} />
          <Route path="about-canteen" element={<Canteen />} />
          <Route path="about-staff-quarters" element={<StaffQuarters />} />
          <Route path="about-guest-house" element={<GuestHouse />} />
          <Route path="about-music-club" element={<MusicClub />} />
          <Route path="about-student-activity-club" element={<Studentactivityclub />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

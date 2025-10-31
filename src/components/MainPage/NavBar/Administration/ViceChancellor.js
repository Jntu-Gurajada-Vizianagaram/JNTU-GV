import { MdOutlineMailOutline } from "react-icons/md";
import vc from "../../../../assets/AdminDirectoratesImages/vc.png";
import "./AdminandDirectorates.css";
function ViceChancellor() {
  return (
    <div className="allRightContent-Profile">
      <div className="profileName">
        <div className="profile-Image">
          <img src={vc} alt="Profile" />
        </div>
        <h3>Prof. V V Subba Rao</h3>
        <h4>Hon’ble Vice-Chancellor</h4>
        <p>
          <MdOutlineMailOutline width="40px" />
          vc@jntugv.edu.in
        </p>
      </div>

      {/* <div className="profileDetails">
        <div className="contributions">
        <div className="registar-1">
          <p>
         Prof. Vissakodeti Venkata Subba Rao is the Vice-Chancellor of
          Jawaharlal Nehru Technological University, Gurajada, Vizianagaram. He
          is an academician par excellence, a beloved teacher, and a focused
          leader with the vision to improve Indian education to internationally
          approved standards.
          </p>
        </div>
        
        <div className="registar-2">
         <p className="AD-sub">Academic Qualifications</p>
         <p>
           <img src={tick} alt="Icon" className="AD-icon" /> Ph.D., Computer Science & Engineering, JNTUH, Hyderabad.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> M.Tech., Computer Science & Engineering, Andhra University.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> B.E. Electronics , SRKR College of Engineering, Bhimavaram, Andhra Pradesh.
          </p>
        </div>
        <div className="registar-3">
          <p className="AD-sub">Academic Excellence</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Received award for “Valuable Ideas towards realizing the Vision of SWARNA
            ANDHRA 2047” from Sri Nara Chandrababu Naidu, Hon’ble Chief Minister of A.P.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Outstanding Leadership Legacy Award” from Council for Skills and Competencies.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Elected as “National Women's Parliament” from Sri Nara Chandrababu Naidu,
            Hon’ble Chief Minister of A.P.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Elected as “Meritorious Teacher” from Dr. Kodela Siva Prasad, Hon’ble First
            Speaker of Newly formed Andhra Pradesh.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Certified “Database Associate on DB2 and Associate Developer” by IBM.
          </p>
          
        </div>
        <div className="registar-4">
          <p className="AD-sub">Administrative Positions held at JNTUGV</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Vice-Chancellor(i/c)JNTU-GV, Vizianagaram from 19th July 2024 to till date.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Director of Evaluation JNTU-GV, Vizianagaram - 08th October 2022 to 07th
            August 2024.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Principal & HOD, CSE Department, JNTUK-UCEN, Narasaraopet - 12th
            November 2018 to 11th December 2019.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Vice Principal (Academics) & HOD, CSE department, JNTUK-UCEN, Narasaraopet 
            from June 2016 to November 2018.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Director of Empowerment of Women & Grievances, i/c, JNTUGV-Vizianagaram from 08th October 2022 to 31st October 2023.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> BOS Chairperson for CSE and IT Departments, JNTU-GV, Vizianagaram -
            August 2023 to till date.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> HOD, CSE, Department & IT i/c Departments JNTUK-UCEV Vizianagaram - 30th 
            June 2016 to 28th December 2021 & February 2013 to Jan 2016.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Professor In-charge, Examinations & Computer center and IT services & Convener 
            Women.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Empowerment JNTUK-UCEN, Narasaraopet – September 2016 to June 2018.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Academic Senate member on University Standing Committee, JNTU-GV, Vizianagaram.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Department Advisory Board Member, RVR & JC College of Engineering, Guntur.
          </p>
        </div>
        <div className="registar-5">
          <p className="AD-sub">Research Contributions</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> No of Ph.Ds. awarded: 15.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> No of Ph.Ds. Submitted: 02.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> No of Ph.Ds. guiding: 15.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Funding Projects from External Agency Completed: 01.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Funding Projects from External Agency Ongoing: 02.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> No. of Patents Granted : 01.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> No. of Patents Published: 03.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Published around 100 research papers in various reputed journals, and 
            conferences.
          </p>
        </div>
        <div className="registar-6">
          <p className="AD-sub">Monographs/Books/Book Chapters</p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Investigating and Identifying Fraudulent Behaviors of Medical Claims Data Using 
Machine Learning Algorithms Handbook of Artificial Intelligence Publishing 2023, 
Pg.No.231-254.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> CLUSTERING BASED BAND SELECTION Lap Lambert Academic Publishing, 
            June 2022.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> WATER QUALITY PREDICTION OF AQUA PONDS Lap LAMBERT Academic 
            Publishing, 2019.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> A Complete Practical Guide to ETHICAL HACKING AND INFORMATION 
            SECURITY.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> SciTech Publications (INDIA), First Edition-March 2012.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Mutation Testing and Web Applications—A Test Driven Development Approach for 
Web Applications Built with Java Script - Part of the book series: Intelligent Systems 
Reference
          </p>
        
        </div>
        <div className="registar-7">
        <p className="AD-sub">Honors</p>
          
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Life Member of CSI, ISTE, BMEI.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> BOS Chairperson, for CSE & IT Departments-JNTUGV- Vizianagaram.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> BOS Chairperson, for Emerging Courses, JNTUK.
          </p>
          <p>
            <img src={tick} alt="Icon" className="AD-icon" /> Regional Coordinator for Andhra Pradesh State Level Police Recruitment Board, A. P.
          </p>
        </div>
        </div>
      </div>


    </div> */}

    </div>

    
  );
}

export default ViceChancellor;

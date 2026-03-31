import React from "react";
import gsa from "../../../../assets/AdminDirectoratesImages/gsa.jpg";
import { MdOutlineMailOutline } from "react-icons/md";

function SportsAdministration() {
  return (
    <div className="dir-profile-container">
      {/* Profile Header Block */}
      <div className="dir-profile-header">
        <div className="dir-profile-image">
          <img src={gsa} alt="Dr. Swami Naidu Gurugubelli" />
        </div>
        <div className="dir-profile-info">
          <h3>Dr. Swami Naidu Gurugubelli</h3>
          <h4>Director of University Games & Sports Administration</h4>
          <h4>Professor in Metallurgical Engineering</h4>
          <h4>M.Tech(IITM); Ph.D</h4>
          <p className="dir-profile-email">
            <MdOutlineMailOutline size="20px" /> dgs@jntugv.edu.in
          </p>
        </div>
      </div>

      {/* Profile Details Block */}
      <div className="dir-profile-details">
        <p>Teaching and Research Experience: 22 Years.</p>

        <p className="dir-sub-heading">Research supervision:</p>
        <p>❖ 07 Research scholars awarded PhD.</p>
        <p>❖ 08 Research scholars pursuing for their PhD.</p>
        <p>❖ Guided for 28 M.Tech projects.</p>

        <p className="dir-sub-heading">Awards/Fellowships/Prizes:</p>
        <p>❖ State award for Best Teacher on 7th September 2016 from the Government of Andhra Pradesh.</p>
        <p>❖ Andhra Pradesh Scientist Award - 2020 from the Government of Andhra Pradesh.</p>
        <p>❖ Top 30 iconic principal award received on 8th April 2021 for excellence and leadership in education from GOLDEN AIM Awards.</p>
        <p>❖ Best Teacher award on 4th September 2015 by Confederation of Education Excellence, New Delhi.</p>
        <p>❖ University Best Teacher award on 14th November 2013 from the Vice-chancellor of JNTU Kakinada, during University formation day celebrations.</p>
        <p>❖ Research Excellency award by Indo-Global foundation, an international organization supported by the Government of Andhra Pradesh.</p>
        <p>❖ Chaired a session in the International conference on applied mechanics, materials and manufacturing (ICAMMM-2012), 19-21 Feb' 2012, Kualalampur, Malaysia.</p>
        <p>❖ Chaired a special session in IEEE approved International conference on Electrical, Electronics, and Optimization Techniques (ICEEOT) - 2016, Chennai, Tamilnadu, during 3-5, March 2016.</p>

        <p className="dir-sub-heading">Professional and administrative service:</p>
        <p>❖ Principal, JNTUK College of engineering, Vizianagaram. (2019-21)</p>
        <p>❖ Vice-principal, JNTUK College of engineering, Vizianagaram. (2016-18)</p>
        <p>❖ Head of Metallurgical Engineering, JNTUK College of Engg., VZM</p>
        <p>❖ Chairman, Board of studies, Dept of Metallurgical Engg., JNTUK</p>
        <p>❖ Member, Board of Studies, Department of Metallurgical Engineering, Andhra University, Visakhapatnam, Andhra Pradesh. (2014-17 and 2017-20)</p>
        <p>❖ Member, Board of Studies, Department of Metallurgy and Materials technology, Yogi Vemana College of Engineering, Yogi Vemana University, Proddutur, kadapa (2019-till date)</p>
        <p>❖ Data Auditor, TEQIP (world Bank project) Phase-II, for JNTUA, Pulivendula and KU, Kothagudem. (2014 - 2017)</p>
        <p>❖ Member, AICTE Expert Verification Committee</p>
        <p>❖ Member, AICTE-AQIS Evaluation committee</p>

        <p className="dir-sub-heading">Research projects executed:</p>
        <p>❖ Executed UGC funded research project titled: Synthesis and characterization of nano redmud particle reinforced aluminium matrix composites, cost of the project: Rs 13.908 Lac</p>
        <p>❖ Executed NRB sanctioned research project titled "A novel ECAR technique to produce AA5083 aluminum alloy with high deformation homogeneity and improved mechanical properties for naval applications". Cost of the project: Rs 33.628 Lac.</p>

        <p className="dir-sub-heading">Patents:</p>
        <p>❖ Filed patent on Synthesis of a new class insulators and dielectrics from industrial solid waste - a novel method, Apple. No. 6450/CHE/2015 A, Dt: 8-1-16</p>

        <p className="dir-sub-heading">Professional Recognition:</p>
        <p>❖ Editorial Board Correspondent, IIM Metal News, 2015-16</p>
        <p>❖ Vice-Chairman, Indian Institute of Metals, Visakhapatnam Chapter (2013 - till date)</p>
        <p>❖ EC Member, Metallurgical and Materials Division, Institution of Engineers, Visakhapatnam chapter (2013-2015)</p>
        <p>❖ Member of the Editorial Review board of the 'International Journal of surface engineering and Interdisciplinary Materials Science, Inderscience Publishers.</p>
        <p>❖ Reviewer for the International Journal of Materials engineering Innovation, Inderscience Publishers.</p>
        <p>❖ Reviewer for the International Journal of Materials and structural integrity, Inderscience Publishers.</p>
        <p>❖ Editorial Board Member, Advances in Materials Science and Mechanical Engineering Research (AMSMER), International Research Publication house.</p>
        <p>❖ Editorial Board Member, Alnternational Journal of Nano Science and Nanotechnology (IJNN), International Research Publication house.</p>
        <p>❖ Editorial Board Member, International Journal of Manufacturing and Mechanical Engineering (IJMME), International Research Publication house.</p>
        <p>❖ Organized 12 workshops and conference.</p>
        <p>❖ Attended 16 workshops and short term courses.</p>
        <p>❖ Published 59 Research articles published in International Journals and Conferences.</p>
        <p>❖ Authored one book chapter and edited two books.</p>
      </div>
    </div>
  );
}

export default SportsAdministration;

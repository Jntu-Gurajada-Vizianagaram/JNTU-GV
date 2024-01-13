import React from "react";
import image from "./Images/1.jpg";
import { Typography } from "@mui/material";

function Canteen() {
  return (
    
    <div>
      <div className="allRightContentHeading">Canteen</div><hr />
      
        
        <Typography><b>“Canteen and took a long swig. The dragon smacked 
            its tongue several times, making it clear that it too needed”</b><br /><br/>
            JNTUK, University College of Engineering has the facility of a spacious 
            and clean canteen that caters to the taste of all students. Canteen can 
            conveniently accommodate good number of students at a time and well maintenance 
            with efficient service in the campus. The canteen is provided with good furniture 
            and best cooking and storing facilities, which provides hot lunch, snacks and 
            beverages both to the students and staff at reasonable rates. It remains open 
            on all working days. Beverages of different flavors are served on different days
            according to different seasons. It was a place where students unwind and relax 
            with friends to enjoy good quality, delicious and healthy food and it was a treat 
            for students. This place helps students to congregate not only to eat but also
            to exchange their views.<br/><br/>
            <b>“Of course the delicate taste of the canteen’s food satisfied the taste buds 
            and the appetite of devil stomach...”</b><br/><br/>
            Food for brain is supplied in classrooms and food for body is supplied at 
            cafeteria. The spacious cafeteria offers varieties of delicious and hygienic 
            food for the young minds. Apart from breakfast, lunch and dinner, students can 
            have snacks, tea, coffee, soft drinks and confectionery. A team of experienced 
            members closely monitor the quality of food and consistently upgrade the menu
            to match the tastes of young generation. Students can select their food from 
            the menu which contains vegetarian and non-vegetarian dishes at reasonable rates. 
            There are separate cabins for faculty and students. In addition, a fresh choice
            bakery outlet is also available within the campus.</Typography><br />
        <img src={image} alt="Canteen Logo" className="canteen-logo" />
      
      </div>
    
  );
}

export default Canteen;

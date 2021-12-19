import React, { useState } from 'react';
import About from './about';
import Contact from './contact';
import Cover from './cover';
import Education from './education';
import Experience from './experience';
import Footer from './footer';

import './main.css';
import './site.css';
import Skills from './skills';


export default function Template2(){
  const [values, setValues] = useState({
    cover : {name:"Joyce",tagLine:"FullStack Developer"},
    about:{aboutPerson:"Hello! I’m Joyce Harrison. I am passionate about UI/UX design and Web Design. I am a skilled Front-end Developer and master of Graphic Design tools such as Photoshop and Sketch.",
  age:"28",
  email:"Joyce@company.com",phone:"+0718-111-0011",address:"140, City Center, New York, U.S.A"},
  skills:[{skill:"HTML",score:"90"}],
  experience : [
    {role:"Frontend Developer",organization:"Creative Agency",duration:"May, 2015 - Present",
    detail:"Leverage agile frameworks to provide a robust synopsis for high level overviews."}
  ],
  education :[
    {degree:"Masters in Information Technology",university:"International University",duration:"2011 - 2013",
    detail:"Leverage agile frameworks to provide a robust synopsis for high level overviews."}
  ],
  contact : [{fieldName : "address", detail :"140, City Center, New York, U.S.A"},
  {fieldName : "phone",detail : "+0718-111-0011"},
  {fieldName : "email",detail:"Joyce@company.com"}
]

  });
  const saveCover = (data)=>{
    setValues({...values, cover: (data)}) 
   }
   const saveAbout = (data)=>{
    setValues({...values, about: (data)}) 
   }
   const saveSkills = (data)=>{
    setValues({...values, skills: (data)}) 
   }
   const saveExperience = (data)=>{
    setValues({...values, experience: (data)}) 
   }
   const saveEducation = (data)=>{
    setValues({...values, education: (data)}) 
   }
   const saveContact = (data)=>{
    setValues({...values, contact: (data)}) 
   }
return(
    <body id="top">
  
    <div class="page-content">
      <div>
<div class="cover bg-white">
<Cover data={values.cover} saveCover={saveCover}></Cover>
<About data={values.about} saveAbout={saveAbout}></About>
 
  <hr class="d-print-none"/>
<Skills data={values.skills} saveSkills={saveSkills}></Skills>
  <hr class="d-print-none"/>
 <Experience data={values.experience} saveExperience={saveExperience}></Experience>
  <hr class="d-print-none"/>
  <div class="page-break"></div>
<Education data={values.education} saveEducation={saveEducation}></Education>
  <hr class="d-print-none"/>
<Contact data={values.contact} saveContact={saveContact}></Contact>
</div></div>
    </div>
 <Footer></Footer>
   
  </body>
);
}
import react, { useState } from "react";

import './template1.css';

import Profile from "./profile";
import Contact from "./contact";
import Education from "./education";
import Languages from "./languages";
import Interests from "./interest";
import Summary from "./summary";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
export default function Template1(props){
    const detail={
        name : "Alan Doe",
        tagLine : "Full stack Developer",
       
        email : "alan.doe@website.com",
        phone : "0123 456 789",
        website: "portfoliosite.com"
      ,
      education : [
        { 
          id : 0,
          degree : "MSc in Computer Science",
          university : "University of London",
          time : "2016 - 2018"
        }
      ],
      languages :
     {
       lang:"English"
     }
      ,
      interests :[
    {
      interest :"climbing"
    }
      ],
    
        summary : "Summarise your career here",
        jobDetails : [
          {
            job_title : "Lead Developer",
            time :"2019 - Present",
            company:"Startup Hubs, San Francisco",
            detail:"Describe your role here"
          }
        ],
        projects : [
          {
            title :"CoderPro",
          detail : "A responsive website template designed to help developers launch their software projects."
        }
        ],
        skills :[
          {
         title :"python",
         score : 95
          }
        ]
      }
      
      const [values, setValues] = useState({
        profile:{
          name : "John Doe",
          tagLine : "Full stack developer"
        },
        contact:{email : "john@gmail.com",phone : "16-789657", website:"john@myportfolio.com"},
        education : [
          {
            degree : "MSc in Computer Science",
            university : "University of London",
            time : "2016 - 2018"
          }
        ],
        languages : [
          {
            lang : "english"
          }
        ],
        interests :[
          {
            interest :"climbing"
          }
            ],
            careerSummary: {summary : "Summarise your career here"},
            jobDetails : [
              {
                job_title : "Lead Developer",
                time :"2019 - Present",
                company:"Startup Hubs, San Francisco",
                detail:"Describe your role here"
              }
            ],
            projects : [
              {
                title :"CoderPro",
              detail : "A responsive website template designed to help developers launch their software projects."
            }
            ],
            skills :[
              {
             title :"python",
             score : 95
              }
            ]
      });
     const saveProfile = (data)=>{
      setValues({...values, profile: (data)})
     
     }
     const saveContact = (data)=>{
      setValues({...values, contact: (data)})
     }
     const saveEducation = (data)=>{
      setValues({...values, education: (data)})
     }
     const saveLanguage = (data)=>{
      setValues({...values, languages: (data)})
     }
     const saveInterests = (data)=>{
      setValues({...values, interests: (data)})
     }
     const saveSummary = (data)=>{
      setValues({...values, careerSummary: (data)})
     }
     const saveExperience = (data)=>{
      setValues({...values, jobDetails:(data)})
     }
     const saveProjects = (data)=>{
      setValues({...values, projects: (data)})
     }
     const saveSkills = (data)=>{
      setValues({...values, skills: (data)})
     }
    return(
        <div id="template1" class="wrapper mt-lg-5">
        <div class="sidebar-wrapper">
        <Profile data={values.profile} saveProfile={saveProfile}></Profile>
        <Contact data={values.contact} saveContact={saveContact}></Contact>
        <Education data={values.education} saveEducation={saveEducation}></Education>
        <Languages data={values.languages} saveLanguage={saveLanguage}></Languages>
        <Interests data={values.interests} saveInterests={saveInterests}></Interests>
        </div>


    <div class="main-wrapper">
         <Summary data={values.careerSummary} saveSummary={saveSummary}></Summary>
         <Experience data={values.jobDetails} saveExperience={saveExperience}></Experience>
          <Projects data={values.projects} saveProjects={saveProjects}></Projects>
          <Skills data={values.skills} saveSkills={saveSkills}></Skills>
       
        </div>
    </div>
    );
}
import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';
import Header from './header';
import './App.css';
import Template1 from './template1/template1';
import Template2 from './template2/template2';
import Cover1 from './CoverPages/cover1';
import Cover2 from './CoverPages/cover2';
import Cover3 from './CoverPages/cover3';
import About1 from './AboutPages/about1';
import About2 from './AboutPages/about2';
import About3 from './AboutPages/about3';
import Education1 from './EducationPages/education1';
import Education2 from './EducationPages/education2';
import Education3 from './EducationPages/education3';
import Experience1 from './ExperiencePages/experience1';
import Experience2 from './ExperiencePages/experience2';
import Skills1 from './SkillsPages/skills1';
import Skills2 from './SkillsPages/skills2';
import Contact1 from './ContactPages/contact1';
import SignIn from './signIn';
import Register from './register';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Styling from './styling';
function App() {
  const [layOutData,setLayoutData] = useState({
    Cover1 : {
      name : "John Doe",
      role : "I am a Full Stack Developer",
      intro : "Some Text"
    },
    Cover2 : {
      name : "John Doe",
      role : "I am a Full Stack Developer",
      intro : "Some Text"
    },
    Cover3 : {
      name : "John Doe",
      role : "I am a Full Stack Developer",
      intro : "Some Text"
    },
    About1 :{title : "About Me",
    content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ut accusamus maxime laborum vel et consectetur, eveniet nobis, iure aperiam.",
    content2 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ut accusamus maxime laborum vel et consectetur, eveniet nobis, iure aperiam."
  },
  About2 :{intro : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  title : "Web Designer & Developer",
  detail : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ut accusamus maxime laborum vel et consectetur, eveniet nobis, iure aperiam.",
  point1 : "Awesome Design",point2 : "Creative Design",point3 : "Better client services", point4 : "Digital Marketing & Branding"
},
About3 :{detail : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto ut accusamus maxime laborum vel et consectetur, eveniet nobis, iure aperiam."
},
Education1 :[
  {degree : "Communication & Multimedia Design",university : " Amsterdam University of Applied Sciences (HvA)",time : " september 2009 - current",type:"proapeudetic diploma"},
  {degree : "Communication & Multimedia Design",university : " Amsterdam University of Applied Sciences (HvA)",time : " september 2009 - current",type:"proapeudetic diploma"}
],
Education2 :[
  {degree : "Bachelor's Degree, Computer Software Engineering",university : "Lake Washington Institute of Technology",time : "2020 - 2022"},
    {degree : "Associate's Degree, Computer Software Engineering, 3.82",  university : "Lake Washington Institute of Technology" , time : "2018 - 2020"},
    {degree : "Associate's Degree, Computer Software Engineering, 3.82",  university : "Lake Washington Institute of Technology" , time : "2018 - 2020"}
],
Education3 : [
  {degree : "Department of Computer Science",university : "National Tsing Hua University, Taiwan",time : "2015 - 2019"},
  {degree : "Institute of Computer Science and Engineering",university : "National Chiao Tung University, Taiwan",time : "2020 - present"}
],
Experience1 : [
  {role : "Web Solutions Specialist",description : " Lorem ipsum dolor sit amet, consectetur adipisicing elitIllo odit totam, quaerat numquam dolor, praesentium perferendis sunt magnamli.",time : " september 2016 - present"},
  {role : "Web Solutions Specialist",description : " Lorem ipsum dolor sit amet, consectetur adipisicing elitIllo odit totam, quaerat numquam dolor, praesentium perferendis sunt magnamli.",time : " september 2016 - present"}
],
Experience2 :[
  {role:"Website Lead",time:"Aug 2019 - Present",organization:"Cultural Care",description:"As a volunteer I participate on weekly meetings. Support the Seattle ACT-W website with updates and design for the annual conference."},
  {role:"Exchange Student",time:"Jan 2016 - Dec 2015",organization:"ChickTech",description:"Developed fluency in English while working as an au pair."},
  {role:"Supply Chain",time:"Feb 2014 - Dec 2015",organization:"Grupo Embrasa",description:"Research, select, and purchase materials and components as needed for company functions. Build and maintain relationships with vendors. Negotiate pricing with suppliers to keep costs low. Process requisitions and update management on status of orders."}
],
Skills1 :[
  {title : "Html",score : "80"},{title : "Css",score : "90"}
],
Skills2 :[
  {skill:"Web Developer"},
  {skill:"Web Designer"},
  {skill:"Web Developer"}
],
Contact1:[
  {fieldName:"email",detail:"roelbrouwers1985@gmail.com"},{fieldName:"phone",detail:"+31 644229702"}
]
  })
  const [styles,setStyles] = useState({
    Cover1 : {
      bgcolor :" #2852D1",
      headingcolor :"#ffffff",
      contentcolor : "#ffffff",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Cover2 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Cover3 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    About1 : {
      bgcolor :"#FF7F50",
      headingcolor :"#ffffff",
      contentcolor : "#ffffff",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    About2 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    About3 :{
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Education1 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Education2 :{
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Education3 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Experience1 :{
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Experience2 :{
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Skills1 :{
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Skills2 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    },
    Contact1 : {
      bgcolor :" #ffffff",
      headingcolor :"#000000",
      contentcolor : "#000000",
      divHeight : 310,
      headingFont : 40,
      contentFont : 25
    }
    
  })
  const[isLoggedIn,setIsLoggedIn]= useState(false);
  const[toRegister,setToRegister] =useState(false);
//   useEffect(()=>{
//     const fetchData = async () => {
//     try{
//       let data = await axios.get("http://localhost:3000/layoutData");
//     }catch(err){
// console.log(err)
//     }
//   };
// fetchData();
//   },[])

 
 const [template,setTemplate] = useState("");
 const initialState=[];
 const [pages,setPages] = useState(initialState);
 const [divToStyle,setDivToStyle] = useState("");
  const [bgcolor, getBgColor] = useState("#ffffff");
   const [headingcolor, getHeadingColor] = useState("#000000");
 const [contentcolor, getContentColor] = useState("#000000");
  const [ divHeight, getdivHeight] = useState(250);
     const [ headingFont, getheadingFont] = useState(20);
    const [ contentFont, getcontentFont] = useState(20);
const layout =[];
const mapper = {
  Template1 : Template1,
  Template2 : Template2,
  Cover1: Cover1,
  Cover2: Cover2,
  Cover3 : Cover3,
  About1 : About1,
  About2 : About2,
  About3 : About3,
  Education1 : Education1,
  Education2 : Education2,
  Education3 : Education3,
  Experience1 : Experience1,
  Experience2 : Experience2,
  Skills1 : Skills1,
  Skills2 : Skills2,
  Contact1 : Contact1
}
const [currentCoverPage,setCurrentCover] = useState("");
const [currentAboutPage,setCurrentAbout] = useState("");
const [currentEducationPage,setCurrentEducation] = useState("");
const [currentExperiencePage,setCurrentExperience] = useState("");
const [currentSkillsPage,setCurrentSkills] = useState("");
const [currentContactPage,setCurrentContact] = useState("");

  const templateChosen = (choice)=>{
    setPages(()=>(initialState))
    setPages(pages => [...pages,choice]);
  
  }
  const coverChosen = (choice) =>{
    setPages(pages => [...pages,choice]);
    setCurrentCover(choice);
  }
  const aboutChosen = (choice) =>{
    
    setPages(pages => [...pages,choice]);
    setCurrentAbout(choice);
  }
  const educationChosen = (choice) =>{
    
    setPages(pages => [...pages,choice]);
    setCurrentEducation(choice);
  }

  const experienceChosen = (choice) =>{
    
    setPages(pages => [...pages,choice]);
    setCurrentExperience(choice);
  }

  const skillsChosen = (choice) =>{
    
    setPages(pages => [...pages,choice]);
    setCurrentSkills(choice);
  }

  const contactChosen = (choice) =>{
    
    setPages(pages => [...pages,choice]);
    setCurrentContact(choice);
  }
  const isUserLoggedIn = (status)=>{
    setIsLoggedIn(status)
  }
  const userToRegeister = (status)=>{
    setToRegister(status);
  }
  const printDocument=()=> {
  

    // html2canvas(document.getElementById("main"))
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF({
    //      // orientation: 'p',
    //     });
    //     const imgProps= pdf.getImageProperties(imgData);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     //const pdfHeight = pdf.internal.pageSize.getHeight();
    //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //     console.log(pdfHeight)
    //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, (pdfHeight-150));
    //     pdf.save('download.pdf');
    //   });
    let elem = document.getElementById("main");
    elem.scrollIntoView();
    html2canvas(elem).then(canvas => {
      //document.body.appendChild(canvas)
      const img = canvas.toDataURL("image/png", 1);
      //console.log(`"data:image/png;base64,${img}"`)

      var imgWidth = 220;
      var pageHeight = 200;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const pdf = new jsPDF("p", "mm");
      var position = 10;

      pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight, 100);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      //pdf.addImage(img, 'PNG', 0, 0)
      pdf.save("export.pdf");
    });
  
  }
  const updateData = (pageChoice,formData)=>{
    const typeString = pageChoice.replace(/["]+/g, '');
    setLayoutData({...layOutData, [typeString]: (formData)}) 
  }
//  const setDivToStyle = () =>{
//   const typeString = currentCoverPage.replace(/["]+/g, '');
//   setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
//  }
//  if(doStyle){
//    if(divToStyle==="cover"){
//     const typeString = currentCoverPage.replace(/["]+/g, '');
//     setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
//    // setDoStyle(false);
//    }
//  }
useEffect(() => {
  if(divToStyle==="cover"){
        const typeString = currentCoverPage.replace(/["]+/g, '');
       setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
  }
  if(divToStyle==="about"){
    const typeString = currentAboutPage.replace(/["]+/g, '');
   setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
}
if(divToStyle==="education"){
  const typeString = currentEducationPage.replace(/["]+/g, '');
 setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
}
if(divToStyle==="experience"){
  const typeString = currentExperiencePage.replace(/["]+/g, '');
 setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
}
if(divToStyle==="skills"){
  const typeString = currentSkillsPage.replace(/["]+/g, '');
 setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
}
if(divToStyle==="contact"){
  const typeString = currentContactPage.replace(/["]+/g, '');
 setStyles({...styles,[typeString] :({bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont})})
}
}, [bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont]);
  return (

    isLoggedIn ?
   
    (<div className="container-fluid">
    <Header templateChosen={templateChosen} coverChosen={coverChosen} aboutChosen={aboutChosen}
     educationChosen={educationChosen} experienceChosen={experienceChosen}
     skillsChosen={skillsChosen} contactChosen={contactChosen}></Header>

<div class="row">
  
  <div className="col-sm-3">
  <div class="col-sm-12 sideBarLeft pos-fixed">
    <div>
        <button type="button" class="btn btn-default btn-sm" onClick = {()=>setPages(initialState)}>Clear All</button>
        <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#cover-collapse">Cover +</button>
        <div id="cover-collapse" class="collapse" onClick={()=>setDivToStyle("cover")}>
       <Styling forComponent={divToStyle} getBgColor={getBgColor} getdivHeight={getdivHeight} getHeadingColor={getHeadingColor}
       getheadingFont={getheadingFont} getContentColor={getContentColor} getcontentFont={getcontentFont}/>
        </div>
        <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#about-collapse">About +</button>
        <div id="about-collapse" class="collapse" onClick={()=>setDivToStyle("about")}>
        <Styling forComponent={divToStyle} getBgColor={getBgColor} getdivHeight={getdivHeight} getHeadingColor={getHeadingColor}
       getheadingFont={getheadingFont} getContentColor={getContentColor} getcontentFont={getcontentFont}/>
        </div>
        <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#education-collapse">Education +</button>
        <div id="education-collapse" class="collapse" onClick={()=>setDivToStyle("education")}>
        <Styling forComponent={divToStyle} getBgColor={getBgColor} getdivHeight={getdivHeight} getHeadingColor={getHeadingColor}
       getheadingFont={getheadingFont} getContentColor={getContentColor} getcontentFont={getcontentFont}/>
        </div>
        <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#experience-collapse">Experience +</button>
        <div id="experience-collapse" class="collapse" onClick={()=>setDivToStyle("experience")}>
        <Styling forComponent={divToStyle} getBgColor={getBgColor} getdivHeight={getdivHeight} getHeadingColor={getHeadingColor}
       getheadingFont={getheadingFont} getContentColor={getContentColor} getcontentFont={getcontentFont}/>
        </div>
        <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#skills-collapse">Skills +</button>
        <div id="skills-collapse" class="collapse" onClick={()=>setDivToStyle("skills")}>
        <Styling forComponent={divToStyle} getBgColor={getBgColor} getdivHeight={getdivHeight} getHeadingColor={getHeadingColor}
       getheadingFont={getheadingFont} getContentColor={getContentColor} getcontentFont={getcontentFont}/>
        </div>
        <button type="button" class="btn btn-default btn-sm" data-toggle="collapse" data-target="#contact-collapse">Contact +</button>
        <div id="contact-collapse" class="collapse" onClick={()=>setDivToStyle("contact")}>
        <Styling forComponent={divToStyle} getBgColor={getBgColor} getdivHeight={getdivHeight} getHeadingColor={getHeadingColor}
       getheadingFont={getheadingFont} getContentColor={getContentColor} getcontentFont={getcontentFont}/>
        </div>
        </div>
        <button type="button" class="btn btn-default btn-sm" onClick = {printDocument}>Download as PDF</button>
        </div>
 
  </div>
  <div id="main" className="col-sm-9 main scrollit">
  {template === 'temp1' && (
        <Template1></Template1>
      )}

      {template === 'temp2' && (<Template2></Template2>)}

{pages.map((item, key) => {
    const typeString = item.replace(/["]+/g, '');
    const Type = mapper[typeString];
    const displayData = layOutData[typeString];
    const currentStyles = styles[typeString];
    layout.push(<Type data={displayData} divName={divToStyle} 
      attrs = {currentStyles}
       updateData={updateData} key={key} />);
})};
     { layout.map((component)=>
      <>{component}</>
      )}

</div>
</div>
     
    </div>)
    : (toRegister ? (<Register isUserLoggedIn={isUserLoggedIn} userToRegeister={userToRegeister}/>):
      
     ( <SignIn isUserLoggedIn={isUserLoggedIn} userToRegeister={userToRegeister}/>))
   
  );
}

export default App;

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import temp1Img from './templateImages/template1.png';
import temp2Img from './templateImages/template2.png';
import cover1Img from './templateImages/cover1.png';
import cover2Img from './templateImages/cover2.png';
import cover3Img from './templateImages/cover3.png';
import about1Img from './templateImages/about1.png';
import about2Img from './templateImages/about2.PNG';
import about3Img from './templateImages/about3.PNG';
import education1Img from './templateImages/education1.PNG';
import education2Img from './templateImages/education2.PNG';
import education3Img from './templateImages/education3.PNG';
import experience1Img from './templateImages/experience1.PNG';
import experience2Img from './templateImages/experience2.PNG';
import skills1Img from './templateImages/skills1.PNG';
import skills2Img from './templateImages/skills2.PNG';
import contact1Img from './templateImages/contact1.PNG';
import './modal.css';

export default function Header(props){
  const [title, setTitle] = useState("Transitioning...");

  const [modalState,setModalState] = useState("");
  const {templateChosen,coverChosen,aboutChosen,educationChosen,experienceChosen,skillsChosen,contactChosen}=props;
  
  const defaultTemplateSelection = () =>{
    setModalState("modal-defaultTemplate");
    setTitle("Select any template");
    document.body.style.backgroundColor = "white";
  }

  const coverSelection = () =>{
    setModalState("modal-cover");
    setTitle("Select any Cover")
  }

 const aboutSelection = () =>{
   setModalState("modal-about");
   setTitle("Select any About Page");
 }
 const educationSelection = () =>{
  setModalState("modal-education");
  setTitle("Select any Education Page");
}
const experienceSelection = () =>{
  setModalState("modal-experience");
  setTitle("Select any Experience Page");
}
const skillsSelection = () =>{
  setModalState("modal-skills");
  setTitle("Select any Skills Page");
}
const contactSelection = () =>{
  setModalState("modal-contact");
  setTitle("Select any Contact Page");
}



  const hideModal = () => {
    setModalState("");
  };
  
 const handleChooseTemplate=(e)=>{
 templateChosen(e.currentTarget.id);
 setModalState("");
 }
 const handleChooseCover= (e) =>{
  coverChosen(e.currentTarget.id);
  setModalState("");
 }
 const handleChooseAbout = (e) =>{
   aboutChosen(e.currentTarget.id);
   setModalState("");
 }
 const handleChooseEducation = (e) =>{
   educationChosen(e.currentTarget.id);
   setModalState("");
 }
 const handleChooseExperience =(e) =>{
   experienceChosen(e.currentTarget.id);
   setModalState("");
 }
 const handleChooseSkills =(e) =>{
  skillsChosen(e.currentTarget.id);
  setModalState("");
}
const handleChooseContact =(e) =>{
  contactChosen(e.currentTarget.id);
  setModalState("");
}
    return(
      <>
      <Modal
      dialogClassName="header-modal"
     show={modalState === "modal-defaultTemplate"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="Template1" className="col-sm-6 shrink" onClick={handleChooseTemplate}>
      <img src={temp1Img} width="250" height="300"/>
    </div>
    <div id="Template2" className="col-sm-6 shrink" onClick={handleChooseTemplate}>
    <img src={temp2Img} width="250" height="300"></img>
    </div>
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>

   <Modal
      dialogClassName="header-modal"
     show={modalState === "modal-cover"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="Cover1" className="col-sm-4 shrink" onClick={handleChooseCover}>
      <img src={cover1Img} width="250" height="300"/>
    </div>
    <div id="Cover2" className="col-sm-4 shrink" onClick={handleChooseCover}>
    <img src={cover2Img} width="250" height="300"></img>
    </div>
    <div id="Cover3" className="col-sm-4 shrink" onClick={handleChooseCover}>
    <img src={cover3Img} width="250" height="300"></img>
    </div>
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>

   <Modal
      dialogClassName="header-modal"
     show={modalState === "modal-about"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="About1" className="col-sm-4 shrink" onClick={handleChooseAbout}>
      <img src={about1Img} width="250" height="250"/>
    </div>
    <div id="About2" className="col-sm-4 shrink" onClick={handleChooseAbout}>
    <img src={about2Img} width="250" height="250"></img>
    </div>
    <div id="About3" className="col-sm-4 shrink" onClick={handleChooseAbout}>
    <img src={about3Img} width="250" height="250"></img>
    </div>
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>

   <Modal
      dialogClassName="header-education-modal"
     show={modalState === "modal-education"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="Education1" className="col-sm-4 shrink" onClick={handleChooseEducation}>
      <img src={education1Img} width="350" height="200"/>
    </div>
    <div id="Education2" className="col-sm-4 shrink" onClick={handleChooseEducation}>
    <img src={education2Img} width="350" height="200"></img>
    </div>
    <div id="Education3" className="col-sm-4 shrink" onClick={handleChooseEducation}>
    <img src={education3Img} width="350" height="200"></img>
    </div>
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>

   <Modal
      dialogClassName="header-modal"
     show={modalState === "modal-experience"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="Experience1" className="col-sm-4 shrink" onClick={handleChooseExperience}>
      <img src={experience1Img} width="500" height="250"/>
    </div>
    <div id="Experience2" className="col-sm-4 shrink" onClick={handleChooseExperience}>
    <img src={experience2Img} width="500" height="250"></img>
    </div>
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>

   <Modal
      dialogClassName="header-modal"
     show={modalState === "modal-skills"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="Skills1" className="col-sm-6 shrink" onClick={handleChooseSkills}>
      <img src={skills1Img} width="400" height="250"/>
    </div>
    <div id="Skills2" className="col-sm-6 shrink" onClick={handleChooseSkills}>
    <img src={skills2Img} width="400" height="250"></img>
    </div>
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>

   <Modal
      dialogClassName="header-modal"
     show={modalState === "modal-contact"}
     onHide={hideModal}
   >
     <Modal.Header>
       <Modal.Title>{title}</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <div className="row">
    <div id="Contact1" className="col-sm-12 shrink" onClick={handleChooseContact}>
      <img src={contact1Img} width="800" height="250"/>
    </div>
  
       </div>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm">Save</button>
     </Modal.Footer>
   </Modal>


    
    <nav class="navbar navbar-expand-lg navbar-light bg-blue height-40 row">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <button onClick={defaultTemplateSelection} class="nav-link noButtonClass">Default Templates</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manage Pages
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           <button id="cover" class="dropdown-item btn btn-light" onClick={coverSelection}>Add Cover</button>
           <button  id="about" class="dropdown-item btn btn-light" onClick={aboutSelection}>Add About</button>
           <button  id="education" class="dropdown-item btn btn-light" onClick={educationSelection}>Add Education</button>
           <button  id="experience" class="dropdown-item btn btn-light" onClick={experienceSelection}>Add Experience</button>
           <button  id="skills" class="dropdown-item btn btn-light" onClick={skillsSelection}>Add skills</button>
           <button  id="contact" class="dropdown-item btn btn-light" onClick={contactSelection}>Add Contact</button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  </>
  );

}
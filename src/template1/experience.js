import React, { useState } from 'react';
import './styles.css';
import Modal from "react-bootstrap/Modal";
import './template1.css';

export default function Experience(props){
    const {saveExperience,data} = props;
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const [formValues, setFormValues] = useState([data])
   
  
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Add Experience details")
      document.body.style.backgroundColor = "white";
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
  let handleChange = (i, e) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  
  let addFormFields = () => {
      setFormValues([...formValues, {job_title : "",time : "", company : "", details : ""}])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }
  
  const saveData = () =>{
    saveExperience(formValues);
    setIsOpen(false);
  }
    return(
        <>
        <Modal
       show={isOpen}
       onHide={hideModal}
     >
       <Modal.Header>
         <Modal.Title>{title}</Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <form>
           {formValues.map((element, index) => (
             <div className="form-group row padding-35" key={index}>
                 <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Job Title</label>
                       <div class="col-sm-9">
                       <input type="text" name="job_title" value={element.job_title || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">From - To</label>
                       <div class="col-sm-9">
                       <input type="text" name="time" value={element.time || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Organization</label>
                       <div class="col-sm-9">
                       <input type="text" name="company" value={element.company || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Description</label>
                       <div class="col-sm-9">
                       <textarea cols="35" rows="4" name="details" value={element.details || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                  
               {
                 index ? 
                   <button type="button"  className="btn btn-primary btn-sm remove-experience" onClick={() => removeFormFields(index)}>X</button> 
                 : null
               }
             </div>
           ))}
           <div className="button-section">
               <button className="btn btn-primary btn-sm add" type="button" onClick={() => addFormFields()}>Add More Details</button>
               
           </div>
       </form>
       </Modal.Body>
       <Modal.Footer>
         <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
         <button className="btn btn-primary btn-sm" onClick = {saveData}>Save</button>
       </Modal.Footer>
     </Modal>
        <section class="section experiences-section"
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("experiences")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"section experiences-section")}>
        <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Experiences</h2>
        {data.map((item,index)=>(
               <div key={index} class="item">
               <div class="meta">
                   <div class="upper-row">
                       <h3 class="job-title">{item.job_title}</h3>
                       <div class="time">{item.time}</div>
                   </div>
                   <div class="company">{item.company}</div>
               </div>
               <div class="details">
                  {item.details}
               </div>
           </div>
           ))}
            {(isEditShown && currentDiv==="experiences")?( <button className="btn edit-btn-mainwrapper" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
    </section>
    </>
    );
}
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './education.css';

export default function Education2(props){
  const{updateData,data}=props;
  const {bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont}=props.attrs;
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const [formValues, setFormValues] = useState([data])
   
  
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Add Education Details")
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
      setFormValues([...formValues, { degree: "", university: "" ,time:""}])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }
  
  const saveData = () =>{
    updateData("Education2",formValues);
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
                   <label class="col-sm-4 col-form-label">Degree</label>
                       <div class="col-sm-8">
                       <input type="text" name="degree" value={element.degree || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-4 col-form-label">University</label>
                       <div class="col-sm-8">
                       <input type="text" name="university" value={element.university || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-4 col-form-label">Time</label>
                       <div class="col-sm-8">
                       <input type="text" name="time" value={element.time || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
               
              
  
               {
                 index ? 
                   <button type="button"  className="btn btn-primary btn-sm remove" onClick={() => removeFormFields(index)}>X</button> 
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
         <button className="btn btn-primary btn-sm" onClick={saveData}>Save</button>
       </Modal.Footer>
     </Modal>
      
        <div id="education2" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("education2")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border education-container":"education-container")}>
        <h4 class="heading" style={{color:headingcolor, fontSize:headingFont+"px"}}>Education</h4>
        {data.map((element, index) => (
        <div class="education-block">
            <h5 style={{color:headingcolor, fontSize:headingFont+"px"}}>{element.university}</h5>
            <span class="education-date">{element.time}</span>
            <h6 style={{color:contentcolor,fontSize:contentFont+"px"}}>{element.degree}</h6>
         
        </div>
        ))}
          {(isEditShown && currentDiv==="education2")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
    </div>
    
    </>
    );
}
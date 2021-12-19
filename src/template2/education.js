import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function Education(props){
  const {saveEducation,data} = props;
  const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv,setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState([data]);

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
    setFormValues([...formValues, {degree : "",university : "",duration:"",detail:""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}
const saveData = () =>{
  saveEducation(formValues);
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
                   <label class="col-sm-3 col-form-label">Degree</label>
                       <div class="col-sm-9">
                       <input type="text" name="degree" value={element.degree || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">University</label>
                       <div class="col-sm-9">
                       <input type="text" name="university" value={element.university || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Duration</label>
                       <div class="col-sm-9">
                       <input type="text" name="duration" value={element.duration || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Detail</label>
                       <div class="col-sm-9">
                       <textarea rows="4" cols="40" name="detail" value={element.detail || ""} onChange={e => handleChange(index, e)} />
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
        <div class="education-section px-3 px-lg-4 pb-4"
         onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("education")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border":"education-section px-3 px-lg-4 pb-4")}>
        <h2 class="h3 mb-4">Education</h2>
        {data.map((item,index)=>(
        <div class="timeline">
          <div class="timeline-card timeline-card-success card shadow-sm">
            <div class="card-body">
              <div class="h5 mb-1">{item.degree} <span class="text-muted h6">from {item.university}</span></div>
              <div class="text-muted text-small mb-2">{item.duration}</div>
              <div>{item.detail}</div>
            </div>
          </div>
        </div>
         ))} 
          {(isEditShown && currentDiv==="education")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
      </div>
      </>
    );
}
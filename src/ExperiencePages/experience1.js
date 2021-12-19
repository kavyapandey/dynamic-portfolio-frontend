import React, { useState } from 'react';
import './experience.css';
import Modal from "react-bootstrap/Modal";
export default function Experience1(props){
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
    setFormValues([...formValues, { role: "", description: "" ,time:""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}

const saveData = () =>{
  updateData("Experience1",formValues);
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
                   <label class="col-sm-4 col-form-label">Role</label>
                       <div class="col-sm-8">
                       <input type="text" name="role" value={element.role || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-4 col-form-label">Time</label>
                       <div class="col-sm-8">
                       <input type="text" name="time" value={element.time || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-4 col-form-label">Description</label>
                       <div class="col-sm-8">
                       <textarea name="description" row="4" cols="40" value={element.description || ""} onChange={e => handleChange(index, e)} />
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
      
        
        <div class="work-section" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("experience1")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border work-section":"work-section")}>
        <h4 class="section-title">Work Experience:</h4>
        <div class="col-12">
         <div class="work">
         {data.map((item,index)=>(
             <>
          <div key={index} class="d-flex justify-content-between">
           <h5 style={{color:headingcolor, fontSize:headingFont+"px"}}>{item.role}</h5>
           <h5 style={{color:headingcolor, fontSize:headingFont+"px"}}>{item.time}</h5>
          </div>
          <p style={{color:contentcolor,fontSize:contentFont+"px"}}>
          {item.description}
          </p>
          </>
   ))}
         </div>
        </div>
        {(isEditShown && currentDiv==="experience1")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
        </div>
        </>
    );
}
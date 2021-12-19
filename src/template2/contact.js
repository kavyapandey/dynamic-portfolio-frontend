import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function Contact(props){
  const {saveContact,data} = props;
  const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv,setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState([data])
 

  const [isOpen, setIsOpen] =useState(false);
  const [title, setTitle] = useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
    setTitle("Add Contact Details")
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
    setFormValues([...formValues, { fieldName: "", detail: ""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}

const saveData = () =>{
  saveContact(formValues);
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
                 <label class="col-sm-4 col-form-label">Field Name</label>
                     <div class="col-sm-8">
                     <input type="text" name="fieldName" value={element.fieldName || ""} onChange={e => handleChange(index, e)} />
                  </div>
                  </div>
                  <div class="form-group row light-border">
                 <label class="col-sm-4 col-form-label">Detail</label>
                     <div class="col-sm-8">
                     <input type="text" name="detail" value={element.detail || ""} onChange={e => handleChange(index, e)} />
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
        <div class="contant-section px-3 px-lg-4 pb-4" id="contact"
         onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("contact")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border":"contant-section px-3 px-lg-4 pb-4")}>
        <h2 class="h3 text mb-3">Contact</h2>
        <div class="row">
          <div class="col-md-7 d-print-none">
          </div>
          <div class="col">
            <div class="mt-2">
            {data.map((item,index)=>( 
              <>
               <h3 class="h6">{item.fieldName}</h3>
               <div class="pb-2 text-secondary">{item.detail}</div>
               </>
            ))}
            </div>
          </div>
        </div>
        {(isEditShown && currentDiv==="contact")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
      </div>
      </>
    );
}
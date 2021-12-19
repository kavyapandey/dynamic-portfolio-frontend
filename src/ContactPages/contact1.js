import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";


export default function Contact1(props){
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
    setFormValues([...formValues, { fieldName: "", detail: ""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}
const saveData = () =>{
  updateData("Contact1",formValues);
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
    
        <section id="contact" class="row" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
         onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("contact")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border row":"row")}>
        <aside class="col-sm-3">
          <h3>Contact</h3>
        </aside>
        
        <div class="col-sm-9">
          <div class="row">
          {data.map((item,index)=>(
            <div class="col-sm-6">
              <strong style={{color:headingcolor, fontSize:headingFont+"px"}}>{item.fieldName}</strong>
              <div class="email" style={{color:contentcolor,fontSize:contentFont+"px"}}>{item.detail}
              </div>
            </div>
          ))}
          </div>
        </div>
        {(isEditShown && currentDiv==="contact")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
      </section>
      </>
    );
}
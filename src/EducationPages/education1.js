import React, { useState } from 'react';
import './education.css';
import Modal from "react-bootstrap/Modal";

export default function Education1(props){
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
    setFormValues([...formValues, { degree: "", university: "" ,time:"",type:""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}

const saveData = () =>{
  updateData("Education1",formValues);
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
                 <label class="col-sm-4 col-form-label">Time</label>
                     <div class="col-sm-8">
                     <input type="text" name="time" value={element.time || ""} onChange={e => handleChange(index, e)} />
                  </div>
                  </div>
                  <div class="form-group row light-border">
                 <label class="col-sm-4 col-form-label">University</label>
                     <div class="col-sm-8">
                     <input type="text" name="university" value={element.university || ""} onChange={e => handleChange(index, e)} />
                  </div>
                  </div>
                  <div class="form-group row light-border">
                 <label class="col-sm-4 col-form-label">Type</label>
                     <div class="col-sm-8">
                     <input type="text" name="type" value={element.type || ""} onChange={e => handleChange(index, e)} />
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
    
        
        <section id="education1" class="row" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
         onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("education1")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border row":"row")}>
          <aside class="col-sm-3">
            <h4 style={{color:headingcolor, fontSize:headingFont+"px"}}>Education</h4>
          </aside>
         
          <div class="col-sm-9">
            <div class="row">
            {data.map((item,index)=>(
              <div key={index} class="col-sm-12">
                <h5 style={{color:headingcolor, fontSize:headingFont+"px"}}>
                  <span class="col-sm-9" style={{color:contentcolor,fontSize:contentFont+"px"}}>{item.degree}</span>
                  <span class="date col-sm-3">
                   {item.time}
                  </span>
                </h5>
      
                <div class="area">
                 {item.university}
                </div>
  
                <div class="studyType" style={{color:contentcolor,fontSize:contentFont+"px"}}>
                 {item.type} 
                </div>
               
              </div>
                ))}
            </div>
          </div>
          {(isEditShown && currentDiv==="education1")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
        </section>
        </>
    );

}
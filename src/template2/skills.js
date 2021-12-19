import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function Skills(props){
  const {saveSkills,data}= props;

  const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv,setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState([data]);

  const [isOpen, setIsOpen] =useState(false);
  const [title, setTitle] = useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
    setTitle("Add Personal Details")
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
    setFormValues([...formValues, {skill : "",score : ""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}
const saveData = () =>{
  saveSkills(formValues);
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
                   <label class="col-sm-3 col-form-label">Skill Title</label>
                       <div class="col-sm-9">
                       <input type="text" name="skill" value={element.skill || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Skill Score</label>
                       <div class="col-sm-9">
                       <input type="text" name="score" type="number" max="100" value={element.score || ""} onChange={e => handleChange(index, e)} />
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
        <div class="skills-section px-3 px-lg-4"
         onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("skills")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border":"skills-section px-3 px-lg-4")}>
        <h2 class="h3 mb-3">Professional Skills</h2>
        <div class="row">
        {data.map((item,index)=>(
       <>
          {index%2==0?( <div class="col-md-6">
            <div class="mb-2"><span>{item.skill}</span>
              <div class="progress my-1">
            <div class="progress-bar bg-primary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="100" data-aos-anchor=".skills-section" style={{width: item.score + "%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>):(
              <div class="col-md-6">
              <div class="mb-2"><span>{item.skill}</span>
                <div class="progress my-1">
                  <div class="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style={{width: item.score + "%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          )}
         </>
        
       
         ))}  
         </div>
         {(isEditShown && currentDiv==="skills")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
      </div>
      </>
    );
}
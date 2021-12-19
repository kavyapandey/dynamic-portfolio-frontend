import React, { useState } from 'react';
import './styles.css';
import Modal from "react-bootstrap/Modal";
import './template1.css';

export default function Projects(props){
  const {saveProjects,data} = props;
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const [formValues, setFormValues] = useState([data])
   
  
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Add Project details")
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
      setFormValues([...formValues, {title : "",detail : ""}])
    }
  
  let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
  }
  const saveData = () =>{
    saveProjects(formValues);
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
                   <label class="col-sm-3 col-form-label">Project Title</label>
                       <div class="col-sm-9">
                       <input type="text" name="title" value={element.title || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Project Detail</label>
                       <div class="col-sm-9">
                       <textarea cols="35" rows="4" name="detail" value={element.detail || ""} onChange={e => handleChange(index, e)} />
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
        <section class="section projects-section"
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("projects")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"section projects-section")}>
        <h2 class="section-title"><span class="icon-holder"><i class="fas fa-archive"></i></span>Projects</h2>
        {data.map((item,index)=>(
             <div class="item">
             <span class="project-title"><a href="" target="_blank">{item.title}</a></span> 
             - <span class="project-tagline">{item.detail}</span>  
         </div>
         ))}
          {(isEditShown && currentDiv==="projects")?( <button className="btn edit-btn-mainwrapper" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
    </section>
    </>
    );
}
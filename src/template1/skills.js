import React, { useState } from 'react';
import './styles.css';
import Modal from "react-bootstrap/Modal";
import './template1.css';


export default function Skills(props){
    const {saveSkills,data} = props;
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const [formValues, setFormValues] = useState([data])
   
  
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Add Skill details")
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
      setFormValues([...formValues, {title : "",score : ""}])
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
                       <input type="text" name="title" value={element.title || ""} onChange={e => handleChange(index, e)} />
                    </div>
                    </div>
                    <div class="form-group row light-border">
                   <label class="col-sm-3 col-form-label">Skill Score</label>
                       <div class="col-sm-9">
                       <input type="text" name="score" value={element.score || ""} onChange={e => handleChange(index, e)} />
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
        <section className="skills-section section"
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("skills")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"section skills-section")}>
        <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
        <div className="skillset">      
        {data.map((item,index)=>(
          
<div key={index} className="item">
<h3 className="level-title">{item.title}</h3>
<div className="progress level-bar">
<div className="progress-bar theme-progress-bar" role="progressbar" aria-valuenow="{{item.score}}" aria-valuemin="0" aria-valuemax="100" style={{width: item.score + "%"}}></div>
</div>                               
</div>
        ))}  
         
            
        
        </div>  
        {(isEditShown && currentDiv==="skills")?( <button className="btn edit-btn-mainwrapper" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
    </section>
    </>
    );
}
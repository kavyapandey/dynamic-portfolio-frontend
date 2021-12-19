import React, { useState } from 'react';
import './template1.css';
import './styles.css';
import Modal from "react-bootstrap/Modal";

export default function Education(props){
      const {saveEducation,data}=props;
     
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
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
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
      <form  onSubmit={handleSubmit}>
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
     
        <div class="education-container container-block"
        onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("education")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"education-container")}>
        <h2 class="container-block-title">Education</h2>
        <>
        {data.map((item,index)=>(
             <div key={index} className="item">
              <h4 className="degree">{item.degree}</h4>
              <h5 className="meta">{item.university}</h5>
              <div className="time">{item.time}</div>
                    
            </div>
            ))}
            {(isEditShown && currentDiv==="education")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
            </>
    </div>
    </>
    );
}
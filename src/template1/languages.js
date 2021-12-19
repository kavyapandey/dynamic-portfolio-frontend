import React, { useState } from 'react';
import './styles.css';
import Modal from "react-bootstrap/Modal";
import './template1.css';


export default function Languages(props){
  const {saveLanguage,data}=props;
    const [isEditShown, setIsEditShown] = useState(false);
      const [currentDiv,setCurrentDiv] = useState("");
      const [formValues, setFormValues] = useState([data])
     
    
      const [isOpen, setIsOpen] =useState(false);
      const [title, setTitle] = useState("Transitioning...");
    
      const showModal = () => {
        setIsOpen(true);
        setTitle("Add Languages")
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
        setFormValues([...formValues, { lang : ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
    }
    const saveData = () =>{
      saveLanguage(formValues);
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
                  <label class="col-sm-4 col-form-label">Language</label>
                      <div class="col-sm-8">
                      <input type="text" name="lang" value={element.lang || ""} onChange={e => handleChange(index, e)} />
                   </div>
                   </div>
                 
              {
                index ? 
                  <button type="button"  className="btn btn-primary btn-sm remove-lang" onClick={() => removeFormFields(index)}>X</button> 
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
        <div class="languages-container container-block"
        onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("languages")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"languages-container")}>
    <h2 class="container-block-title">Languages</h2>
    <ul className="list-unstyled interests-list">
            {
                data.map((item,index)=>(
                    <>
                     <li key={index}>{item.lang} <span className="lang-desc"></span></li>
                    </>
                ))
            }
            {(isEditShown && currentDiv==="languages")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)} 
        </ul>
</div>
</>
);
}
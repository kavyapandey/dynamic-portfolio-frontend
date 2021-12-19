import React, { useState } from 'react';
import './styles.css';
import Modal from "react-bootstrap/Modal";
import './template1.css';

export default function Summary(props){
  const{saveSummary,data}=props;
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const [formValues, setFormValues] = useState(data);
   
  
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Add Summary")
      document.body.style.backgroundColor = "white";
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    let handleChange = (e) => {
      const { name, value } = e.target;
            setFormValues(prevState => ({
                ...prevState,
                [name]: value
            })); 
    }
    const saveData = () =>{
      saveSummary(formValues);
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
          
             <div className="form-group row padding-10">
                 <div class="form-group row light-border">
                   <label class="col-sm-2 col-form-label">Summary</label>
                       <div class="col-sm-10">
                       <textarea name="summary"  rows="5" cols="50" value={formValues.summary || ""} onChange={e => handleChange(e)} />
                    </div>
                    </div>
                  
             </div>
           
       </form>
       </Modal.Body>
       <Modal.Footer>
         <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
         <button className="btn btn-primary btn-sm" onClick={saveData}>Save</button>
       </Modal.Footer>
     </Modal>
        <section class="section summary-section"
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("summary")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"section summary-section")}>
        <h2 class="section-title"><span class="icon-holder"><i class="fas fa-user"></i></span>Career Profile</h2>
        <div class="summary">
            <p>{data.summary}</p>
            {(isEditShown && currentDiv==="summary")?( <button className="btn edit-btn-mainwrapper" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
        </div>
      
    </section>
    </>
    );
}
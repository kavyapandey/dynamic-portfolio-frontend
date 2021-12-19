import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './template1.css';


export default function Contact(props){
  const{saveContact,data} =props;
  const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv,setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState(data);
 
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

  let handleChange = (e) => {
    const { name, value } = e.target;
            setFormValues(prevState => ({
                ...prevState,
                [name]: value
            }));
  }
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
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
     <form  onSubmit={handleSubmit}>
        
 <div className="form-group row padding-35">
<div class="form-group row">
<label class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
    <input type="text" name="email" value={formValues.email || ""} onChange={e => handleChange(e)} />
    
 </div>
 </div>
 <div class="form-group row light-border">
<label class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
    <input type="text" name="phone" value={formValues.phone || ""} onChange={e => handleChange(e)} />
 </div>
 </div>
 <div class="form-group row light-border">
<label class="col-sm-2 col-form-label">Website</label>
    <div class="col-sm-10">
    <input type="text" name="website" value={formValues.website || ""} onChange={e => handleChange(e)} />
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
    
        <div class="contact-container container-block"
        onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("contact")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
            className={(isEditShown?"hover-border":"contact-container container-block")}>
            
        <ul class="list-unstyled contact-list">
            <li class="email"><i class="fas fa-envelope"></i><a href="mailto: yourname@email.com">{data.email}</a></li>
            <li class="phone"><i class="fas fa-phone"></i><a href={data.phone}>{data.phone}</a></li>
            <li class="website"><i class="fas fa-globe"></i><a href={data.website} target="_blank">{data.website}</a></li>
        </ul>
         
        {(isEditShown && currentDiv==="contact")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}      
    </div>
    </>
    );
}
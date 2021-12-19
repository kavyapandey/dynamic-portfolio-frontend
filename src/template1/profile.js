import React, { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './template1.css';


export default function Profile(props){
  const {saveProfile,data} = props;
 console.log("data is",data)
    const [selectedImage, setSelectedImage] = useState(null);
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const initialState = data;
    const [formValues, setFormValues] = useState(initialState);
   
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Add Details")
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
    saveProfile(formValues);
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
        
 <div className="form-group row padding-35">
<div class="form-group row">
<label class="col-sm-2 col-form-label">Profile Image</label>
    <div class="col-sm-10">
   
    <input
     type="file"
      name="myImage"
        onChange={(event) => {
        setSelectedImage(event.target.files[0]);
        }}
      />
 </div>
 </div>
<div class="form-group row">
<label class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
    <input type="text" name="name" value={formValues.name || ""} onChange={e => handleChange(e)} />
    
 </div>
 </div>
 <div class="form-group row light-border">
<label class="col-sm-2 col-form-label">Tag Line</label>
    <div class="col-sm-10">
    <input type="text" name="tagLine" value={formValues.tagLine || ""} onChange={e => handleChange(e)} />
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
    
        <div class="profile-container"
        onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("profile")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border":"profile-container")}
            >
        {selectedImage && (
        
       <div>
       <img class="profile profile-image" width={"250px"} src={URL.createObjectURL(selectedImage)} alt="Upload your picture here" /></div>
        )}
        
          
            <h1 class="name">{data.name}</h1>
            <h3 class="tagline">{data.tagLine}</h3>
           
         
            {(isEditShown && currentDiv==="profile")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}      
        </div>
        </>
    );
}
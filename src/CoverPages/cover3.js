import React, { useState } from 'react';
import photo from './coverImages/pic2.jpg';
import Modal from "react-bootstrap/Modal";
import './cover.css';

export default function Cover3(props){
   const{updateData,data}=props;
   const {bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont}=props.attrs;
    const [selectedImage, setSelectedImage] = useState(null);
    const [isEditShown, setIsEditShown] = useState(false);
    const [currentDiv,setCurrentDiv] = useState("");
    const [formValues, setFormValues] = useState([{name : "John Doe",
    role : "I am a Full Stack Developer",
    intro : "Some Text"}])
    const [isOpen, setIsOpen] =useState(false);
    const [title, setTitle] = useState("Transitioning...");
  
    const showModal = () => {
      setIsOpen(true);
      setTitle("Edit About Page")
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
      updateData("Cover3",formValues);
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
  <label class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
      <input type="text" name="name" value={formValues.name || ""} onChange={e => handleChange(e)} />
      
   </div>
   </div>
   <div class="form-group row light-border">
  <label class="col-sm-2 col-form-label">Role</label>
      <div class="col-sm-10">
      <input type="text" name="role" value={formValues.role || ""} onChange={e => handleChange(e)} />
   </div>
   </div>
   <div class="form-group row light-border">
  <label class="col-sm-2 col-form-label">Introduction</label>
      <div class="col-sm-10">
      <input type="text" name="intro" value={formValues.intro || ""} onChange={e => handleChange(e)} />
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
         <div className="row" style={{height:divHeight+ "px"}}
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("cover3")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border row":"row")}>
        <div className="col-sm-6 coveralign" style={{backgroundColor:bgcolor,height:divHeight+ "px"}}>
        <h2 style={{color:headingcolor, fontSize:headingFont+"px"}}>{data.name}</h2>
               <h3 style={{color:headingcolor, fontSize:headingFont+"px"}}>
                  {data.role}
               </h3>
            <p style={{color:contentcolor,fontSize:contentFont+"px"}}>{data.intro}</p>
        </div>
        <div className="col-sm-6 noPadding">
        <img className="imageAlign" style={{height:divHeight+ "px"}} src={photo}/>
</div>
{(isEditShown && currentDiv==="cover3")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
       </div>
       </>
    );
    
}
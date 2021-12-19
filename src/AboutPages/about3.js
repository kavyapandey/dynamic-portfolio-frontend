import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './about.css'

export default function About3(props){
  const{updateData,data}=props;
  const {bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont}=props.attrs;
    const [selectedImage, setSelectedImage] = useState(null);
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

      let handleChange = (e) => {
        const { name, value } = e.target;
              setFormValues(prevState => ({
                  ...prevState,
                  [name]: value
              }));
       
       
      }
      const saveData = () =>{
        updateData("About3",formValues);
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
  <label class="col-sm-2 col-form-label"> Image</label>
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
  <label class="col-sm-2 col-form-label">Introduction</label>
      <div class="col-sm-10">
      <textarea rows="4" cols="40" type="text" name="intro" value={formValues.detail || ""} onChange={e => handleChange(e)} />
      
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
       <div class="about3 row mt-2" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
        onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("about3")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border about3 row mt-2":"about3 row mt-2")}>
    <div class="col-8 text-center">
        <p style={{color:contentcolor,fontSize:contentFont+"px"}}>{data.detail}
        </p>
    </div>
    {selectedImage && (
        
        <div class= "d-none d-md-block col-4">
       <img src={URL.createObjectURL(selectedImage)} alt="about" class="img-fluid" width="100%"/></div>
         )}
 {(isEditShown && currentDiv==="about3")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
</div>
</>
 
);
}
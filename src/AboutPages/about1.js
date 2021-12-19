import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './about.css';

export default function About1(props){
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
      updateData("About1",formValues);
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
<label class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
    <input type="text" name="title" value={formValues.title || ""} onChange={e => handleChange(e)} />
    
 </div>
 </div>
 <div class="form-group row light-border">
<label class="col-sm-2 col-form-label">Content</label>
    <div class="col-sm-10">
    <input type="text" name="content1" value={formValues.content1 || ""} onChange={e => handleChange(e)} />
 </div>
 </div>
 <div class="form-group row light-border">
<label class="col-sm-2 col-form-label">Content</label>
    <div class="col-sm-10">
    <input type="text" name="content2" value={formValues.content2 || ""} onChange={e => handleChange(e)} />
 </div>
 </div>
</div>
          
      
     </form>
     </Modal.Body>
     <Modal.Footer>
       <button className="btn btn-primary btn-sm add" onClick={hideModal}>Cancel</button>
       <button className="btn btn-primary btn-sm"onClick={saveData}>Save</button>
     </Modal.Footer>
   </Modal>
    
        <section class= "about1 section1" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
        onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("about1")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border about1 section1":"about1 section1")}>
  <div class= "container">
    <h1 style={{color:headingcolor, fontSize:headingFont+"px"}} class= "title">{data.title}</h1>
    <div class= "content-wrapper">
    {selectedImage && (
        
        <div class= "img-wrapper">
        <img class="img" src={URL.createObjectURL(selectedImage)} alt="Upload your picture here" /></div>
         )}
      {/* <div class= "img-wrapper">
        <img class= "img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
      </div> */}
    
            <div class="text-wrapper">
            <p style={{color:contentcolor,fontSize:contentFont+"px"}} class="text">{data.content1}</p>
            <p style={{color:contentcolor,fontSize:contentFont+"px"}} class="text">{data.content2}</p>
            </div>
           
            
   </div>
  </div>
  {(isEditShown && currentDiv==="about1")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}      
</section>
</>
    );

}
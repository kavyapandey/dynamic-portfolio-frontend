import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import './about.css'

export default function About2(props){
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
        updateData("About2",formValues);
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
      <input type="text" name="intro" value={formValues.intro || ""} onChange={e => handleChange(e)} />
      
   </div>
   </div>
   <div class="form-group row light-border">
  <label class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-10">
      <input type="text" name="title" value={formValues.title || ""} onChange={e => handleChange(e)} />
   </div>
   </div>
   <div class="form-group row light-border">
  <label class="col-sm-2 col-form-label">Detail</label>
      <div class="col-sm-10">
      <input type="text" name="detail" value={formValues.detail || ""} onChange={e => handleChange(e)} />
   </div>
   </div>
   <div class="form-group row light-border">
  <label class="col-sm-2 col-form-label">Key Points</label>
  
      <div class="col-sm-10">
      <input type="text" name="point1" value={formValues.point1 || ""} onChange={e => handleChange(e)} />
   </div>
   <div class="col-sm-10">
      <input type="text" name="point2" value={formValues.point2 || ""} onChange={e => handleChange(e)} />
   </div>
   <div class="col-sm-10">
      <input type="text" name="point3" value={formValues.point3 || ""} onChange={e => handleChange(e)} />
   </div>
   <div class="col-sm-10">
      <input type="text" name="poin4" value={formValues.point4 || ""} onChange={e => handleChange(e)} />
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
      
        <section class="about2" id="about" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
         onMouseEnter={() => {
            setIsEditShown(true);
            setCurrentDiv("about2")}}
         onMouseLeave={() => {
            setIsEditShown(false)}}
         className={(isEditShown?"hover-border about2":"about2")}>
            <div class="container">
                <div class="heading text-center">
                    <h2 style={{color:headingcolor, fontSize:headingFont+"px"}}>About
                        <span>Me</span></h2>
                    <p style={{color:contentcolor,fontSize:contentFont+"px"}}>{data.intro}
                    </p>
                </div>
                <div class="row">
                {selectedImage && (
        
        <div class= "col-lg-6">
       <img src={URL.createObjectURL(selectedImage)} alt="about" class="img-fluid" width="100%"/></div>
         )}
                    <div class="col-lg-6">
                        <h3>{data.title} </h3>
                        <p>{data.detail}</p>
                        <div class="row">
                       
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>{data.point1}</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>{data.point2}</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>{data.point3}</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>{data.point4}</h4>
                            </div>
                         

                        </div>
                    </div>
                </div>
            </div>
            {(isEditShown && currentDiv==="about2")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}
        </section>
        </>
    );
}
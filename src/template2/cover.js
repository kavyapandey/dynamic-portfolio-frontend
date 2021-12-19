import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

export default function Cover(props){
  const {saveCover,data} = props;
  const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv,setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState([data])
  const [selectedImage, setSelectedImage] = useState(null);

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
    saveCover(formValues);
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
               <div class="form-group row light-border">
                 <label class="col-sm-4 col-form-label">Upload Image</label>
                     <div class="col-sm-8">
                     <input
                       type="file"
                        name="imageSrc"
                        onChange={(event) => {
                          setSelectedImage(event.target.files[0]);
                          }}
                        />
                     
                  </div>
                  </div>
                  <div class="form-group row light-border">
                 <label class="col-sm-4 col-form-label">Name</label>
                     <div class="col-sm-8">
                     <input type="text" name="name" value={formValues.name || ""} onChange={e => handleChange(e)} />
                  </div>
                  </div>
                  <div class="form-group row light-border">
                 <label class="col-sm-4 col-form-label">Tag Line</label>
                     <div class="col-sm-8">
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
        <div id="cover" class="cover-bg p-3 p-lg-4 text-white"
         onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("cover")}}
       onMouseLeave={() => {
          setIsEditShown(false)}}
       className={(isEditShown?"hover-border cover-bg p-3 p-lg-4 text-white":"cover-bg p-3 p-lg-4 text-white")}>
        
              <div class="row">
        
              <div class="col-lg-4 col-md-5">
              {selectedImage && (
                <div class="avatar hover-effect bg-white shadow-sm p-1"><img src={URL.createObjectURL(selectedImage)} alt= "Profile Image" width="200" height="200"/></div>
              )}
                </div>
              <div class="col-lg-8 col-md-7 text-center text-md-start">
                <h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">{data.name}</h2>
                <p data-aos="fade-left" data-aos-delay="100">{data.tagLine}</p>
              </div>
              {(isEditShown && currentDiv==="cover")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
            </div>
         
     
      </div>
      </>
    );
}
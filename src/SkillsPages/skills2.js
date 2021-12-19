import React, { useState } from 'react';
import './skills.css';
import Modal from "react-bootstrap/Modal";

export default function Skills2(props){
	const{updateData,data}=props;
	const {bgcolor,headingcolor,contentcolor,divHeight,headingFont,contentFont}=props.attrs;
	const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv,setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState([data])
 

  const [isOpen, setIsOpen] =useState(false);
  const [title, setTitle] = useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
    setTitle("Add Skill details")
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
    setFormValues([...formValues, {skill : ""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}

const saveData = () =>{
	updateData("Skills2",formValues);
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
			 {formValues.map((element, index) => (
			   <div className="form-group row padding-35" key={index}>
				  
					  <div class="form-group row light-border">
					 <label class="col-sm-3 col-form-label">Skill</label>
						 <div class="col-sm-9">
						 <input type="text" name="skill" value={element.skill || ""} onChange={e => handleChange(index, e)} />
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
	  
        <section id="skills" style={{height:divHeight+ "px",backgroundColor:bgcolor}}
		 onMouseEnter={() => {
			setIsEditShown(true);
			setCurrentDiv("skills")}}
		 onMouseLeave={() => {
			setIsEditShown(false)}}
		 className={(isEditShown?"hover-border":"")}>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="text-center">
					<h4 style={{color:headingcolor, fontSize:headingFont+"px"}}>My Skills </h4><br/>
					
				</div>
			</div>
		</div>
		
		<div class="row px-5">
		{data.map((item,index)=>(
			<div key={index} class="col-md-3">
				<div class="text-center">
					<h6 style={{color:contentcolor,fontSize:contentFont+"px"}}>{item.skill}</h6>
				</div>	
			</div>
			))}
		</div>
	</div>
	{(isEditShown && currentDiv==="skills")?( <button className="btn edit-btn" onClick={showModal}><i class="fas fa-edit"></i></button>):(<div></div>)}   
</section>
</>
    );
}
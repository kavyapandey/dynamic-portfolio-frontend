import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function About(props) {
  const { saveAbout, data } = props;
  const [isEditShown, setIsEditShown] = useState(false);
  const [currentDiv, setCurrentDiv] = useState("");
  const [formValues, setFormValues] = useState([data]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
    setTitle("Add Personal Details");
    document.body.style.backgroundColor = "white";
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const saveData = () => {
    saveAbout(formValues);
    setIsOpen(false);
  };
  return (
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
                <label class="col-sm-4 col-form-label">About</label>
                <div class="col-sm-8">
                  <textarea
                    rows="4"
                    cols= "40"
                    name="aboutPerson"
                    value={formValues.aboutPerson || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div class="form-group row light-border">
                <label class="col-sm-4 col-form-label">Age</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    name="age"
                    value={formValues.age || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div class="form-group row light-border">
                <label class="col-sm-4 col-form-label">Email</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    name="email"
                    value={formValues.email || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div class="form-group row light-border">
                <label class="col-sm-4 col-form-label">Phone</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    name="phone"
                    value={formValues.phone || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div class="form-group row light-border">
                <label class="col-sm-4 col-form-label">Address</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    name="address"
                    value={formValues.address || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary btn-sm add" onClick={hideModal}>
            Cancel
          </button>
          <button className="btn btn-primary btn-sm" onClick={saveData}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
      <div
        class="about-section pt-4 px-3 px-lg-4 mt-1"
        onMouseEnter={() => {
          setIsEditShown(true);
          setCurrentDiv("about");
        }}
        onMouseLeave={() => {
          setIsEditShown(false);
        }}
        className={
          isEditShown ? "hover-border" : "about-section pt-4 px-3 px-lg-4 mt-1"
        }
      >
        <div class="row">
          <div class="col-md-6">
            <h2 class="h3 mb-3">About Me</h2>
            <p>{data.aboutPerson}</p>
          </div>
          <div class="col-md-5 offset-md-1">
            <div class="row mt-2">
              <div class="col-sm-4">
                <div class="pb-1">Age</div>
              </div>
              <div class="col-sm-8">
                <div class="pb-1 text-secondary">{data.age}</div>
              </div>
              <div class="col-sm-4">
                <div class="pb-1">Email</div>
              </div>
              <div class="col-sm-8">
                <div class="pb-1 text-secondary">{data.email}</div>
              </div>
              <div class="col-sm-4">
                <div class="pb-1">Phone</div>
              </div>
              <div class="col-sm-8">
                <div class="pb-1 text-secondary">{data.phone}</div>
              </div>
              <div class="col-sm-4">
                <div class="pb-1">Address</div>
              </div>
              <div class="col-sm-8">
                <div class="pb-1 text-secondary">{data.address}</div>
              </div>
            </div>
          </div>
          {isEditShown && currentDiv === "about" ? (
            <button className="btn edit-btn" onClick={showModal}>
              <i class="fas fa-edit"></i>
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

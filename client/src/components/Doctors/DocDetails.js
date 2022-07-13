import React from "react";
import { Button, Modal } from "react-bootstrap";

const DocDetails = (props) => {
  const { showDocDetails, closeDocModal, docs, img } = props;

  return (
    <Modal
      className="modal-container"
      show={showDocDetails}
      onHide={closeDocModal}
      size="md">
      <Modal.Header closeButton>
        <Modal.Title>Doctor Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3 mt-3 doc-card-container">
          <div className=" ">
            <div className="row">
              <div className="col-md-4">
                <img src={img} className="doc-card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Dr. {docs.name}</h5>
                  <h6 className="card-text">
                    <span>Experience : </span>
                    {docs.exp} Year(s)
                  </h6>
                  <h6 className="card-text">
                    <span>Specialist in :</span> {docs.expert}
                  </h6>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-7">
                  <h6>
                    <span>Available at :</span> <>{docs.available}</>
                  </h6>
                </div>
                <div className="col-md-5">
                  <h6>
                    <span>Duty Timings : </span>
                    {docs.time}
                    {""} Hrs.
                  </h6>
                </div>
              </div>
              <h6>
                <span>Contact : </span> {docs.contact}
              </h6>
              <h6 className="card-text">
                <span>About : </span> {docs.desc}{" "}
              </h6>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={closeDocModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DocDetails;

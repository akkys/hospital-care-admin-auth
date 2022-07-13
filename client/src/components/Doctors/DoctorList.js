import React, { useState } from "react";
import img from "../../img/doc.png";
import DocDetails from "./DocDetails";

const DoctorList = (props) => {
  const { docs } = props;

  const [showDocDetails, setShowDocDetails] = useState(false);
  const handleDocModal = () => {
    setShowDocDetails(true);
  };

  const closeDocModal = () => {
    setShowDocDetails(false);
  };

  const docDetailModal = () => {
    return (
      <DocDetails
        docDetailModal={docDetailModal}
        closeDocModal={closeDocModal}
        docs={docs}
        img={img}
        showDocDetails={showDocDetails}
        setShowDocDetails={setShowDocDetails}
      />
    );
  };

  return (
    <>
      <div className="col-md-3 mb-3 mt-3 card-container">
        <div className="card border-secondary text-dark bg-light mb-3 ">
          <div className="row">
            <img src={img} className="card-img-top" alt="..." />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title">Dr. {docs.name}</h5>
                <h6 className="card-text">Experience : {docs.exp} Year(s)</h6>
                <h6 className="card-text">Specialist in : {docs.expert}</h6>
                <h6>Contact : {docs.contact}</h6>
              </div>
            </div>
          </div>
          <div className="card-body">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleDocModal}>
              Know More...
            </button>
          </div>
        </div>
      </div>
      {docDetailModal()}
    </>
  );
};

export default DoctorList;

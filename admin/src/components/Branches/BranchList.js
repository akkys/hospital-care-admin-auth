import React from "react";

const BranchList = (props) => {
  const { branch, openModal, openDeleteModal, adminInfo } = props;
  return (
    <div className="col-md-6 mb-3 mt-3 card-container">
      <div className="card border-secondary text-dark bg-light mb-3 ">
        <div className="card-body mt-3">
          <div className="row m-auto">
            <div className="col-md-12">
              <h6>
                <i className="fa fa-map-marker ml-1 mr-3" />
                {branch.address}
              </h6>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col-md-12">
              <h6>
                <i className="fa fa-envelope mr-3" />
                {branch.email}
              </h6>
            </div>
          </div>
          <p className="text-secondary ml-2 mt-2 mb-3">
            For Appointment / Enquiry
          </p>
          <div className="row m-auto">
            <div className="col-md-12">
              <h6>
                <i className="fa fa-phone-square ml-1 mr-3" />
                {branch.contact}
              </h6>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col-md-12">
              <h6>
                <i className="fa fa-users mr-3" />
                Help Line : {branch.helpLine}
              </h6>
            </div>
          </div>
          {adminInfo && (
            <>
              <span
                onClick={() => openModal(branch)}
                className="mt-3 ml-3 text-secondary float-left"
                style={{ cursor: "pointer" }}>
                Edit
              </span>
              <span
                onClick={() => openDeleteModal(branch._id)}
                className="mt-3 mr-3 text-danger float-right"
                style={{ cursor: "pointer" }}>
                Remove
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BranchList;

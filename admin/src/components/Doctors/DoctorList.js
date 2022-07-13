import React, { useState } from "react";
import img from "../../img/doc.png";
import DeleteModal from "../../misc/DeleteModal";
import DocDetails from "./DocDetails";

const DoctorList = (props) => {
  const { docs, adminInfo, openModal, deleteHandler } = props;

  const [showDocDetails, setShowDocDetails] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDocModal = () => {
    setShowDocDetails(true);
  };

  const closeDocModal = () => {
    setShowDocDetails(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
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
      {/* Delete Modal  */}
      {deleteModal && (
        <DeleteModal
          deleteHandler={deleteHandler}
          data={docs}
          deleteModalVisible={deleteModal}
          setDeleteModalVisible={setDeleteModal}
        />
      )}

      <div className="col-md-3 mb-3 mt-3 card-container">
        <div className="card border-secondary text-dark bg-light mb-3 ">
          <div className="row">
            <img src={img} className="card-img-top" alt="..." />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title">
                  Dr. {docs.name}
                  {adminInfo && (
                    <i
                      onClick={() => openModal(docs)}
                      className="fa fa-pencil-square-o float-right text-success"
                      style={{ fontSize: "19px" }}
                    />
                  )}
                </h5>
                <h6 className="card-text">
                  <span>Experience : </span> {docs.exp} Year(s)
                </h6>
                <h6 className="card-text">
                  <span>Specialist in : </span> {docs.expert}
                </h6>
                <h6 className="card-text">
                  <span>Contact : </span> {docs.contact}
                </h6>
              </div>
            </div>
          </div>
          <div className="card-body">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={handleDocModal}>
              Know More...
            </button>
            {adminInfo && (
              <i
                onClick={openDeleteModal}
                className="fa fa-trash fa-lg float-right text-danger"
                style={{
                  marginTop: "2%",
                  fontSize: "23px",
                }}
              />
            )}
          </div>
        </div>
      </div>
      {docDetailModal()}
    </>
  );
};

export default DoctorList;

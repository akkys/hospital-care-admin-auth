import React, { useState } from "react";
import img from "../../img/doc.png";
import DeleteModal from "../../misc/DeleteModal";

const StaffList = ({ user, deleteHandler }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  console.log(user);

  const openDeleteModal = () => {
    setDeleteModal(true);
  };
  return (
    <>
      {deleteModal && (
        <DeleteModal
          deleteHandler={deleteHandler}
          data={user}
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
                  {user.firstName} {user.lastName}
                </h5>
                <h6 className="card-text">
                  <span>Email :</span> {user.email}
                </h6>

                <h6 className="card-text">
                  <span>Role :</span> {user.role}
                </h6>
                <div className="mb-4">
                  <i
                    onClick={openDeleteModal}
                    className="fa fa-trash fa-lg float-right text-danger"
                    style={{
                      marginLeft: "95%",
                      fontSize: "23px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffList;

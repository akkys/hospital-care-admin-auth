import React from "react";

const WardList = (props) => {
  const { ward, openModal, adminInfo, openDeleteModal } = props;
  return (
    <div className="col-md-6 mb-3 mt-3 ward-container">
      <div
        className="card border-secondary text-dark bg-light mb-3 "
        style={{ height: "280px" }}>
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(223, 219, 219)" }}>
          {adminInfo ? (
            <h4>
              {ward.roomType}
              <i
                onClick={() => openModal(ward)}
                className="fa fa-pencil-square-o float-right mt-2 text-success"
              />
            </h4>
          ) : (
            <h4>{ward.roomType}</h4>
          )}
        </div>
        <div className="card-body">
          <h5 className="text-secondary">
            <h6 className="float-right">Price : {ward.price}/- per Day </h6>
            <h5>Description :</h5>
            <span>{ward.desc}</span>
          </h5>
        </div>
        {adminInfo && (
          <i
            onClick={() => openDeleteModal(ward._id)}
            className="fa fa-trash fa-lg float-right text-danger"
            style={{ padding: "10px", marginLeft: "90%", fontSize: "23px" }}
          />
        )}
      </div>
    </div>
  );
};

export default WardList;

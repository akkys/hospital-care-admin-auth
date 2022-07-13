import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | A S K Hospital";
  });
  return (
    <div className="container home-container mb-5">
      <h4 className="mb-5">Contact Us</h4>
      <div className="row col-md-6">
        <div className="col-md-12">
          <h6>
            <i className="fa fa-map-marker ml-1 mr-3" />
            #152, 2nd Cross, 3rd Main,
            <br />
            <span className="ml-4"> Rajajinagar, Bangalore - 560098</span>
          </h6>
        </div>
      </div>
      <div className="row col-md-6 ">
        <div className="col-md-12">
          <h6>
            <i className="fa fa-envelope mr-3" />
            deanoffice@askh.ac.in
          </h6>
        </div>
      </div>
      <p className="text-secondary ml-2 mt-2 mb-3">For Appointment / Enquiry</p>
      <div className="row col-md-6 ">
        <div className="col-md-12">
          <h6>
            <i className="fa fa-phone-square ml-1 mr-3" />
            080 85647854
          </h6>
        </div>
      </div>
      <div className="row col-md-6">
        <div className="col-md-12">
          <h6>
            <i className="fa fa-users mr-3" />
            080 85798475
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

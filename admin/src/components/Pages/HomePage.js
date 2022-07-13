import React, { useEffect } from "react";
import ImageCarousel from "./ImageCarousel";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home | A S K Hospitals";
  }, []);

  return (
    <>
      <div className="home-container container ">
        <h3 className="mb-3" style={{ textAlign: "center", fontSize: "4vw" }}>
          Welcome to A S K Hospital.
        </h3>
        <ImageCarousel />
        <div className="home-sub-container">
          <h3 style={{ textAlign: "center", fontSize: "3vw" }}>
            "Our Vision is to be a trustworthy, empathetic and ethical to the
            healthcare needs of the society."
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomePage;

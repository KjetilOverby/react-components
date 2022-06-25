import React from "react";
import FooterComponent from "../src/components/footer/FooterComponent";

const footer = () => {
  return (
    <>
      <div className="container">
        <FooterComponent />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default footer;

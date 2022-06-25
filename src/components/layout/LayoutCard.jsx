import React from "react";
import ButtonComponent from "../button/ButtonComponent";

const LayoutCard = ({ title, description, link }) => {
  return (
    <>
      <div className="container">
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <ButtonComponent title="docs" link={link} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-rows: 1rem 5rem 1fr;
          }
        `}
      </style>
    </>
  );
};

export default LayoutCard;

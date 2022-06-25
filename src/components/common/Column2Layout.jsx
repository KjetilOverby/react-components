import React from "react";
const Column2Layout = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem;
        }
        @media screen and (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};
export default Column2Layout;

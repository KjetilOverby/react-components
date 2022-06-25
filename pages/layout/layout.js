import React from "react";
import LayoutCard from "../../src/components/layout/LayoutCard";

const layout = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">LAYOUT</h1>
        <div className="layout-card-container">
          <LayoutCard
            title="Pagelayout"
            description="Sett header, innhold og footer på en enkel måte."
            link="/layout/pagelayout"
          />
          <LayoutCard
            title="Marginlayout"
            description="Sett marginer tilpasset skjermstørrelsene."
            link="/layout/marginlayout"
          />
          <LayoutCard
            title="2 Columns layout"
            description="Sett marginer tilpasset skjermstørrelsene."
            link="/layout/column2layout"
          />
          <LayoutCard
            title="Hidden"
            description="Vis eller skjul elementer etter skjermstørrelser."
            link="/layout/hidden"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: 5rem;
          }
          .title {
            font-weight: 100;
            margin-bottom: 1.5rem;
          }
          .layout-card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
            grid-gap: 5rem;
          }
        `}
      </style>
    </>
  );
};

export default layout;

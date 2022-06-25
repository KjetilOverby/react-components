import React from "react";
import Link from "next/link";

const SideTabs = ({ color }) => {
  return (
    <>
      <div className="container">
        <Link href="/">
          <p className="tab">Hjem</p>
        </Link>
        <Link href="/button">
          <p className="tab">Buttons</p>
        </Link>
        <Link href="/layout/layout">
          <p className="tab">Layout</p>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: left;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: flex-start;
            height: 8rem;
            padding-left: 5rem;
          }
          .tab {
            cursor: pointer;
            color: ${color};
          }
          .tab:hover {
            color: grey;
          }
        `}
      </style>
    </>
  );
};

export default SideTabs;

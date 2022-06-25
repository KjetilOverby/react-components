import React from "react";
import SideTabs from "../../src/components/common/SideTabs";

const marginlayout = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Marginlayout</h1>
        <div className="content-container">
          <SideTabs />
          <div className="first-box">
            <p>
              Marginayout Brukes til å sette marginer som er tilpasset de
              forskjellige skjermstørreslsene. Verdiene på marginene er lett å
              gjøre om i koden etter at den er kopiert. Alle children
              componentene under marginlayout blir påvirket av denne.
            </p>
            <div className="html-box">
              <p className="first-tag">{`<MarginLayout>`}</p>

              <p className="second-tag">
                {`<ContentComponent`} {`/>`}
              </p>

              <p className="first-tag">{`</MarginLayout>`}</p>
            </div>
          </div>
          <div className="illustrationbox">
            <div className="illustration-header">
              <p className="illustration-text">Header</p>
            </div>
            <div className="illustration-content">
              <div
                style={{
                  border: "1px solid lightgray",
                  height: "100%",
                  width: "80%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div
                  style={{
                    border: "1px solid lightgray",
                    height: "100%",
                    width: "50%",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <p className="illustration-text">Innhold</p>
                </div>
              </div>
            </div>
            <div className="illustration-footer">
              <p className="illustration-text">Footer</p>
            </div>
          </div>

          <div className="code-box">
            <p style={{ color: "white" }}>{`import React from \'react\';

const MarginLayout = ({ children }) => {
  return (
    <><div className=\'container\'>{children}</div>
      <style jsx>{\`
          .container {
            margin: 5rem 35rem;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin: 5rem 25rem;
             }
          @media screen and (max-width: 1775px) {
            .container {
              margin: 5rem 15rem;
            }
          }
          @media screen and (max-width: 1550px) {
            .container {
              margin: 5rem 10rem;
            }
          }
          @media screen and (max-width: 1265px) {
            .container {
              margin: 5rem 3rem;
            }
          }
          @media screen and (max-width: 800px) {
            .container {
              margin: 5rem .5rem;
            }
          }
         
          }
        \`}</style></>);};

export default MarginLayout;
`}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .content-container {
            display: grid;
            grid-template-columns: 35rem 1fr 1fr 35rem;
            grid-template-areas:
              "left first second right"
              "left code . right";
            grid-gap: 10rem 4rem;
          }
          .html-box {
            margin: 2rem 0;
          }
          .title {
            font-weight: 100;
            margin: 5rem 0;
            text-align: center;
          }
          .first-box {
            grid-area: first;
          }
          .first-tag {
            color: dodgerblue;
          }
          .second-tag {
            color: dodgerblue;
            margin-left: 2rem;
          }
          .span1 {
            color: orange;
          }
          .span2 {
            color: green;
          }
          .illustrationbox {
            height: 25rem;
            display: grid;
            grid-template-rows: 4rem 1fr 4rem;
            border: 1px solid lightgray;
            grid-area: second;
          }
          .illustration-text {
          }
          .illustration-header {
            background: dodgerblue;
            display: grid;
            place-items: center;
          }
          .illustration-content {
            background: white;
            display: grid;
            place-items: center;
          }
          .illustration-footer {
            background: dodgerblue;
            display: grid;
            place-items: center;
          }
          .code-box {
            background: #333;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            color: white;
            width: 35rem;
            height: auto;
            overflow: scroll;
            border-radius: 5px;
            grid-area: code;
          }
          .code-text {
          }
          .span-inline-descritption {
            color: green;
          }
          .span-inline-tag {
            margin-left: 2rem;
            color: red;
          }
          .span-tag {
            color: blue;
          }
          @media screen and (max-width: 2100px) {
            .content-container {
              grid-template-columns: 20rem 1fr 1fr 20rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default marginlayout;

import React from "react";
import SideTabs from "../../src/components/common/SideTabs";

const Column2Layout = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">2 Columns Layout </h1>
        <div className="content-container">
          <SideTabs />
          <div className="first-box">
            <p>
              Som navnet sier så setter denne 2 kolonner og går over til en
              kolonne på mobilstørrelser. Det er ingen marginer så denne vil
              fylle hele skjermen, men kan brukes sammen med MarginLayout. For
              at det skal virke så må Marginlayout være parent til Column2Layout
            </p>
            <div className="html-box">
              <p className="first-tag">{`<MarginLayout>`}</p>

              <p className="second-tag">{`<Column2Layout>`}</p>
              <div className="content-tag">
                <p className="third-tag">{`<p>`}</p>
                <p className="html-text">Lorem</p>
                <p className="third-tag">{`</p>`}</p>
                <p className="third-tag">{`<img src={img} />`}</p>
              </div>

              <p className="second-tag">{`</Column2Layout>`}</p>

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
                  width: "90%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <div className="illustration-content-container">
                  <p className="lorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, quo distinctio fugit odio magni ex debitis dolor
                    assumenda inventore quod animi corporis sint sequi
                    accusantium cumque aperiam molestiae itaque labore!
                  </p>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.transitmag.no/wp-content/uploads/2018/07/The_City_London-scaled.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="illustration-footer">
              <p className="illustration-text">Footer</p>
            </div>
          </div>

          <div className="code-box">
            <p style={{ color: "white" }}>{`import React from \"react\";
const Column2Layout = ({ children }) => {
  return (
    <><div className="container">{children}</div><style jsx>{\`
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
        \`}</style></>
  );
};
export default Column2Layout;`}</p>
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
          .illustration-content-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 1rem;
            grid-column-gap: 1rem;
          }
          .lorem {
            font-size: 0.6rem;
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
            color: red;
          }
          .second-tag {
            color: dodgerblue;
            margin-left: 2rem;
          }
          .third-tag {
            color: dodgerblue;
            margin-left: 4rem;
          }
          .html-text {
            margin-left: 4rem;
            font-style: italic;
            color: gray;
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
            background: #71a889;
            display: grid;
            place-items: center;
          }
          .illustration-content {
            background: white;
            display: grid;
            place-items: center;
          }
          .illustration-footer {
            background: #71a889;
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

export default Column2Layout;

import React from "react";
import SideTabs from "../../src/components/common/SideTabs";

const pagelayout = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Pagelayout</h1>
        <div className="content-container">
          <SideTabs />
          <div className="first-box">
            <p>
              Pagelayout kan brukes når du har header og footer. I Pagelayout så
              legger du inn header med gridarea: header, Footer med gridarea:
              footer og innholdet med gridarea: content. Det ser omtrent sånn
              ut:
            </p>
            <div className="html-box">
              <p className="first-tag">{`<PageLayout>`}</p>
              <p className="second-tag">
                {`<HeaderComponent`} <span className="span1">grid-area:</span>{" "}
                <span className="span2">header</span> {`/>`}
              </p>
              <p className="second-tag">
                {`<ContentComponent`} <span className="span1">grid-area:</span>{" "}
                <span className="span2">content</span> {`/>`}
              </p>
              <p className="second-tag">
                {`<FooterComponent`} <span className="span1">grid-area:</span>{" "}
                <span className="span2">footer</span> {`/>`}
              </p>
              <p className="first-tag">{`</PageLayout>`}</p>
            </div>
            <p>
              {`
              Sett dette på "root" siden, som f.eks i next js i mappen pages og
              filen index. Man kan ikke legge til flere elementer her så resten
              av innholdet må skje innenfor disse 3 komponentene. Layouten vil
              se ut som i illustrasjonen selv helt uten innhold.`}
            </p>
          </div>
          <div className="illustrationbox">
            <div className="illustration-header">
              <p className="illustration-text">Header</p>
            </div>
            <div className="illustration-content">
              <p className="illustration-text">Innhold</p>
            </div>
            <div className="illustration-footer">
              <p className="illustration-text">Footer</p>
            </div>
          </div>

          <div className="code-box">
            <p style={{ color: "white" }}>{`import React from \"react\";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className=\"container\">{children}</div>
      <style jsx>{\`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 6rem 1fr 15rem;

          grid-template-areas:
            \"header\"
            \"content\"
            \"footer\";
        }
      \`}</style>
    </>
  );
};

export default PageLayout;`}</p>
          </div>
          {/* <div className="code-box">
            <span className="code-text">{`import React from "react";`}</span>

            <span
              className="code-text"
              style={{ marginTop: "1rem" }}
            >{`const PageLayout = ({ children }) => {`}</span>

            <span className="code-text">{`return (`}</span>
            <span className="code-text">{`<>`}</span>
            <span className="code-text">{`<div className="container">{children}</div>`}</span>
            <span className="code-text">{` <style jsx>{\``}</span>
            <span className="code-text">{`.container {`}</span>
            <span className="code-text">{`min-height: 100vh;`}</span>
            <span className="code-text">{`width: 100vw;`}</span>
            <span className="code-text">{`display: grid;`}</span>
            <span className="code-text">{`grid-template-columns: 1fr;`}</span>
            <span className="code-text">{`grid-template-rows: 6rem 1fr 15rem;`}</span>
            <span className="code-text">{` grid-template-areas:`}</span>
            <span className="code-text">{`"header"`}</span>
            <span className="code-text">{`"content"`}</span>
            <span className="code-text">{`"footer";`}</span>
            <span className="code-text">{`}`}</span>
            <span className="code-text">{`\`}</style>`}</span>
            <span className="code-text">{`</>`}</span>
            <span className="code-text">{`);`}</span>
            <span className="code-text">{`};`}</span>
            <span className="code-text">{`export default PageLayout;`}</span>
          </div> */}
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
            background: indianred;
            display: grid;
            place-items: center;
          }
          .illustration-content {
            background: white;
            display: grid;
            place-items: center;
          }
          .illustration-footer {
            background: indianred;
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

export default pagelayout;

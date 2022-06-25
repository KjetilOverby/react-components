import React from "react";
import SideTabs from "../../src/components/common/SideTabs";

const hidden = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Hidden</h1>
        <div className="content-container">
          <SideTabs />
          <div className="first-box">
            <p>
              Hidden brukes til å skjule elementer etter en gitt
              skjermstørrelse. Man må installere react-responsive.
            </p>
            <div className="html-box">
              <p className="first-tag">{`<Hidden size='small-down'>`}</p>

              <p className="second-tag">
                {`<ContentComponent`} {`/>`}
              </p>

              <p className="first-tag">{`</Hidden>`}</p>
            </div>
          </div>
          <div className="illustrationbox">
            <div className="install-box">
              <p className="install-text">npm install react-responsive</p>
            </div>
            <div className="props-box">
              <h3 className="props-header">Props:</h3>
              <p>{`\'small-down\' - 550px >`}</p>
              <p>{`\'medium-down\' - 1200px >`}</p>
              <p>{`\'large-down\' - 1900px >`}</p>
              <p>{`\'small-up\' - 550px <`}</p>
              <p>{`\'medium-up\' - 1200px <`}</p>
              <p>{`\'large-up\' - 1900px <`}</p>
            </div>
            <p>
              "small-down" vil si at alt fra skjermstørrelse 550px eller lavere
              er synlig på skjermen. Alt over blir skjult
            </p>
            <p>
              "small-up" vil si at alt fra 550px og høyere vil bli synlig og alt
              under skjult.
            </p>
            <p>
              Hvis standardverdiene ikke passer kan man lett gjøre om de i
              koden.
            </p>
          </div>

          <div className="code-box">
            <p style={{ color: "white" }}>{`
import React, { useEffect, useState } from \"react\";
import { useMediaQuery } from "react-responsive";

const Hidden = ({ children, size }) => {
  const small = useMediaQuery({ query: \`(min-width: 550px)\` });
  const medium = useMediaQuery({ query: \`(min-width: 1200px)\` });
  const large = useMediaQuery({ query: \`(min-width: 1900px)\` });

  const smallUp = useMediaQuery({ query: \`(max-width: 550px)\` });
  const mediumUp = useMediaQuery({ query: \`(max-width: 1200px)\` });
  const largeUp = useMediaQuery({ query: \`(max-width: 1900px)\` });

  const [sizeDetect, setSizeDetect] = useState(small);

  useEffect(() => {
    if (size === \"small-down\") {
      setSizeDetect(small);
    } else if (size === \"medium-down\") {
      setSizeDetect(medium);
    } else if (size === \"large-down\") {
      setSizeDetect(large);
    } else if (size === \"small-up\") {
      setSizeDetect(smallUp);
    } else if (size === \"medium-up\") {
      setSizeDetect(mediumUp);
    } else if (size === \"large-up\") {
      setSizeDetect(largeUp);
    }
  });

  return (
    <>
      <div className=\"container\">{sizeDetect && children}</div>

      <style jsx>{\`
        .container {
        }
      \`}</style>
    </>
  );
};

export default Hidden;

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
          .install-box {
            background: #333;
            display: inline-block;
            padding: 0.5em;
          }
          .install-text {
            color: white;
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
          .props-header {
            margin: 1rem 0;
          }
          .props-box {
            margin-bottom: 1rem;
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

export default hidden;

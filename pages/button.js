import React from "react";
import ButtonComponent from "../src/components/button/ButtonComponent";

const button = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">Buttons</h1>
        <p>Lag en egen react komponent og kopier koden i den.</p>
        <p>Eksempel:</p>
        <p style={{ marginTop: "2rem" }}>
          <span className="span-tag"> {`<ButtonComponent`}</span>
        </p>
        <p>
          <span className="span-inline-tag">
            {" "}
            {`type=`}
            <span className="span-inline-descritption">{`'outline'`}</span>
          </span>
        </p>
        <p>
          <span className="span-inline-tag">
            {" "}
            {`title=`}
            <span className="span-inline-descritption">{`'home'`}</span>
          </span>
        </p>
        <p>
          <span className="span-inline-tag">
            {" "}
            {`func=`}
            <span className="span-inline-descritption">
              <span style={{ color: "purple" }}>{`{`}</span>
              <span style={{ color: "orange" }}>function</span>
              <span style={{ color: "purple" }}>{`}`}</span>
            </span>
          </span>
        </p>

        <p>
          <span className="span-inline-tag">
            {" "}
            {`link=`}
            <span className="span-inline-descritption">{`'/home'`}</span>
          </span>
        </p>
        <p style={{ marginBottom: "2rem" }}>
          <span className="span-tag"> {`/>`}</span>
        </p>
        <ButtonComponent type="outline" title="home" link="/" />
        <hr />
        <h1 className="title">Standard Buttons</h1>
        <div className="btn-container">
          <div>
            <ButtonComponent title="Standard" />
            <p className="text">Type: standard</p>
          </div>
          <div>
            <ButtonComponent title="Standard-outline" type="outline" />
            <p className="text">Type: outline</p>
          </div>
          <div>
            <ButtonComponent title="red" type="red" />
            <p className="text">Type: red</p>
          </div>
          <div>
            <ButtonComponent title="red-outline" type="red-outline" />
            <p className="text">Type: red-outline</p>
          </div>

          <div>
            <ButtonComponent
              title="custom color"
              type="custom-bg"
              bg="#579765"
              bgh="#314b36"
              color="#314b36"
              colorh="#579765"
            />
            <p className="text">Type: custom-bg</p>
            <p className="text">bg: #579765</p>
            <p className="text">color: #314b36</p>
            <p className="text">bgh: #314b36</p>
            <p className="text">colorh: #579765</p>
          </div>
          <div>
            <ButtonComponent
              title="custom outline"
              type="custom-outline"
              bgh="#a399"
              bc="#11a399"
            />
            <p className="text">Type: custom-outline</p>
            <p className="text">bg: #0399</p>
            <p className="text">hover: #314b36</p>
          </div>
        </div>
        <p style={{ color: "grey", fontStyle: "italic" }}>
          Kopier denne koden i en react komponent.
        </p>
        <div className="code-box">
          <p
            style={{ color: "lightgrey" }}
          >{`import React from \"react\";import Link from \"next/link\";const ButtonComponent = ({title, func, ml, type, link, bg, bgh, color, colorh, bc}) => {return (<>{!link && (<button onClick={func} className={\`container $\{type} \`}>{title}</button>)}{link && (<Link href={\`$\{link}\`}><button className={\`container $\{type} \`}>{title}</button></Link>)}<style jsx>{\`.container {background: dodgerblue;min-width: 10rem;height: 2.5rem;padding: 0.5rem;border: none;border-radius: 5px;color: white;transition: background 0.5s, color 0.5s;text-transform: uppercase;margin: 1rem 1rem 1rem 0;margin-left: $\{ml};grid-area: btn;}.container:hover {background: #1973cc;cursor: pointer;}.outline {border: 1px solid #1973cc;background: transparent;color: #1973cc;}.outline:hover {background: #1973cc47;}.red-outline {border: 1px solid #cc2519;background: transparent;color: #cc2519;}.red-outline:hover {background: #cc25193b;}.red {background: #cc2519;}.red:hover {background: #b11f15;}.custom-bg {background: $\{bg};color: $\{color};}.custom-bg:hover {background: $\{bgh};color: $\{colorh};}.custom-outline {border: 1px solid $\{bc};background: transparent;color: $\{bc};}.custom-outline:hover {background: $\{bgh};}\`}</style></>);};export default ButtonComponent;`}</p>
        </div>
        <hr />
        <h1 className="title2">Button Special Effects</h1>
        <div></div>
        <div className="code-box">
          <p style={{ color: "lightgrey" }}>{`import React from \"react\";

          const Button3D = () => {
            return (
              <>
                <div className=\"container\">
                  <div class=\"center\">
                    <a href=\"#\">
                      <span data-attr=\"Buy\">Buy</span>
                      <span data-attr=\"Now\">Now</span>
                    </a>
                  </div>
                </div>
                <style jsx>
                  {\`
                    .center {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    }
                    a {
                      text-decoration: none;
                      text-transform: uppercase;
                      font-size: 30px;
                    }
                    a span {
                      padding: 15px;
                      transition: 0.5s;
                      position: relative;
                    }
                    a span:nth-child(1) {
                      color: #fff;
                      background: #262626;
                    }
                    a span:nth-child(2) {
                      color: #fff;
                      background: #ff3636;
                    }
                    a span:nth-child(1):before {
                      content: attr(data-attr);
                      position: absolute;
                      top: 0;
                      left: 0;
                      background: #ff3636;
                      padding: 15px;
                      transition: 0.5s;
                      transform-origin: top;
                      transform: rotateX(90deg) translateY(-50%);
                    }
                    a:hover span:nth-child(1):before {
                      transform: rotateX(0deg) translateY(0%);
                    }
                    a span:nth-child(2):before {
                      content: attr(data-attr);
                      position: absolute;
                      top: 0;
                      left: 0;
                      background: #262626;
                      padding: 15px;
                      transition: 0.5s;
                      transform-origin: bottom;
                      transform: rotateX(90deg) translateY(50%);
                    }
                    a:hover span:nth-child(2):before {
                      transform: rotateX(0deg) translateY(0%);
                    }
                    a span:nth-child(1):after {
                      content: attr(data-attr);
                      padding: 15px;
                      position: absolute;
                      top: 0;
                      left: 0;
                      background: #262626;
                      transform-origin: bottom;
                      transform: rotateX(0deg) translateY(0%);
                      transition: 0.5s;
                    }
                    a:hover span:nth-child(1):after {
                      transform: rotateX(90deg) translateY(50%);
                    }
                    a span:nth-child(2):after {
                      content: attr(data-attr);
                      position: absolute;
                      top: 0;
                      left: 0;
                      background: #ff3636;
                      padding: 15px;
                      transition: 0.5s;
                      transform-origin: top;
                      transform: rotateX(0deg) translateY(0%);
                    }
                    a:hover span:nth-child(2):after {
                      transform: rotateX(90deg) translateY(-50%);
                    }
                  \`}
                </style>
              </>
            );
          };
          
          export default Button3D;
          `}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: 5rem;
          }
          .btn-container {
            display: flex;
          }
          .code-box {
            background: #333;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            color: white;
            width: 35rem;
            height: 30rem;
            overflow: scroll;
            border-radius: 5px;
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
          .text {
            color: grey;
            font-weight: 100;
            font-style: italic;
          }
          .title {
            font-weight: 100;
            margin-bottom: 1.5rem;
          }
          .title2 {
            font-weight: 100;
            margin-bottom: 5.5rem;
          }
          .span1 {
            color: dodgerblue;
          }
          hr {
            color: #e2e0e0a2;
          }
        `}
      </style>
    </>
  );
};

export default button;

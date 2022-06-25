import React, { useEffect, useState } from "react";
import Link from "next/link";

const StartPage = () => {
  const [display, setDisplay] = useState(-1);
  useEffect(() => {
    setDisplay(-1);
    setTimeout(() => {
      setDisplay(10);
    }, 1000);
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="header">REACT COMPONENTS</h1>
        <Link href="/button">
          <p className="tab tab1">Button</p>
        </Link>
        <Link href="/layout/layout">
          <p className="tab tab2">Layout</p>
        </Link>
        <Link href="/header">
          <p className="tab tab3">Header</p>
        </Link>
        <Link href="/animate">
          <p className="tab tab4">CSS Animate</p>
        </Link>
        <Link href="/footer">
          <p className="tab tab5">Footer</p>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10rem;
          }
          .header {
            font-size: 6rem;
            margin: 4rem 0;
            animation: rubberBand 1s;
            background: -webkit-linear-gradient(#ecc1d2, #692b7c);
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .tab {
            color: #75aa96;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            transition: color 0.5s;
            text-transform: uppercase;
            z-index: ${display};
          }
          .tab:hover {
            color: #547492;
            cursor: pointer;
          }
          .tab1 {
            animation: zoomInRight 2.4s;
          }
          .tab2 {
            animation: zoomInLeft 2.4s;
            animation-delay: 0.1s;
          }
          .tab3 {
            animation: zoomInRight 2.4s;
            animation-delay: 0.2s;
          }
          .tab4 {
            animation: zoomInLeft 2.4s;
            animation-delay: 0.3s;
          }
          .tab5 {
            animation: zoomInRight 2.4s;
            animation-delay: 0.4s;
          }

          @-webkit-keyframes zoomInLeft {
            0% {
              opacity: 0;
              -webkit-transform: scale3d(0.1, 0.1, 0.1)
                translate3d(-1000px, 0, 0);
              transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.55,
                0.055,
                0.675,
                0.19
              );
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
            60% {
              opacity: 1;
              -webkit-transform: scale3d(0.475, 0.475, 0.475)
                translate3d(10px, 0, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1
              );
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
            }
          }
          @keyframes zoomInRight {
            0% {
              opacity: 0;
              -webkit-transform: scale3d(0.1, 0.1, 0.1)
                translate3d(1000px, 0, 0);
              transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.55,
                0.055,
                0.675,
                0.19
              );
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
            60% {
              opacity: 1;
              -webkit-transform: scale3d(0.475, 0.475, 0.475)
                translate3d(-10px, 0, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1
              );
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
            }
          }
          @keyframes rubberBand {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
            30% {
              -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
            }
            40% {
              -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
            }
            50% {
              -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
            }
            65% {
              -webkit-transform: scale3d(0.95, 1.05, 1);
              transform: scale3d(0.95, 1.05, 1);
            }
            75% {
              -webkit-transform: scale3d(1.05, 0.95, 1);
              transform: scale3d(1.05, 0.95, 1);
            }
            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
          @media screen and (max-width: 1400px) {
            .container {
              padding-top: 0rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;

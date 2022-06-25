import React, { useState, useEffect } from "react";
import SideTabs from "../src/components/common/SideTabs";
import animateList from "../src/components/animate/AnimateList.js";

const Animate = () => {
  const [name, setName] = useState();
  const [permanentName, setPermanentName] = useState();
  const [code, setCode] = useState();

  const selectHandler = (e) => {
    setName(e.target.innerHTML);
    setPermanentName(e.target.innerHTML);
    setTimeout(() => {
      setName("");
    }, 1200);
  };
  useEffect(() => {
    if (permanentName === "bounce") {
      setCode(animateList[0]);
    } else if (permanentName === "flash") {
      setCode(animateList[1]);
    } else if (permanentName === "pulse") {
      setCode(animateList[2]);
    } else if (permanentName === "rubberBand") {
      setCode(animateList[3]);
    } else if (permanentName === "shake") {
      setCode(animateList[4]);
    } else if (permanentName === "swing") {
      setCode(animateList[5]);
    } else if (permanentName === "tada") {
      setCode(animateList[6]);
    } else if (permanentName === "wobble") {
      setCode(animateList[7]);
    } else if (permanentName === "bounceIn") {
      setCode(animateList[8]);
    } else if (permanentName === "bounceInDown") {
      setCode(animateList[9]);
    } else if (permanentName === "bounceInLeft") {
      setCode(animateList[10]);
    } else if (permanentName === "bounceInRight") {
      setCode(animateList[11]);
    } else if (permanentName === "bounceInUp") {
      setCode(animateList[12]);
    } else if (permanentName === "bounceOut") {
      setCode(animateList[13]);
    } else if (permanentName === "bounceOutDown") {
      setCode(animateList[14]);
    } else if (permanentName === "bounceOutLeft") {
      setCode(animateList[15]);
    } else if (permanentName === "bounceOutRight") {
      setCode(animateList[16]);
    } else if (permanentName === "bounceOutUp") {
      setCode(animateList[17]);
    } else if (permanentName === "fadeIn") {
      setCode(animateList[18]);
    } else if (permanentName === "fadeInDown") {
      setCode(animateList[19]);
    } else if (permanentName === "fadeInDownBig") {
      setCode(animateList[20]);
    } else if (permanentName === "fadeInLeft") {
      setCode(animateList[21]);
    } else if (permanentName === "fadeInLeftBig") {
      setCode(animateList[22]);
    } else if (permanentName === "fadeInRight") {
      setCode(animateList[23]);
    } else if (permanentName === "fadeInRightBig") {
      setCode(animateList[24]);
    } else if (permanentName === "fadeInUp") {
      setCode(animateList[25]);
    } else if (permanentName === "fadeInUpBig") {
      setCode(animateList[26]);
    } else if (permanentName === "fadeOut") {
      setCode(animateList[27]);
    } else if (permanentName === "fadeOutDown") {
      setCode(animateList[28]);
    } else if (permanentName === "fadeOutLeft") {
      setCode(animateList[29]);
    } else if (permanentName === "fadeOutRight") {
      setCode(animateList[30]);
    } else if (permanentName === "fadeOutUp") {
      setCode(animateList[31]);
    } else if (permanentName === "flip") {
      setCode(animateList[32]);
    } else if (permanentName === "flipInX") {
      setCode(animateList[33]);
    } else if (permanentName === "flipInY") {
      setCode(animateList[34]);
    } else if (permanentName === "flipOutX") {
      setCode(animateList[35]);
    } else if (permanentName === "flipOutY") {
      setCode(animateList[36]);
    } else if (permanentName === "lightSpeedIn") {
      setCode(animateList[37]);
    } else if (permanentName === "lightSpeedOut") {
      setCode(animateList[38]);
    } else if (permanentName === "rotateIn") {
      setCode(animateList[39]);
    } else if (permanentName === "rotateInDownLeft") {
      setCode(animateList[40]);
    } else if (permanentName === "rotateInDownRight") {
      setCode(animateList[41]);
    } else if (permanentName === "rotateInUpLeft") {
      setCode(animateList[42]);
    } else if (permanentName === "rotateInUpRight") {
      setCode(animateList[43]);
    } else if (permanentName === "rotateOut") {
      setCode(animateList[44]);
    } else if (permanentName === "rotateOutDownLeft") {
      setCode(animateList[45]);
    } else if (permanentName === "rotateOutDownRight") {
      setCode(animateList[46]);
    } else if (permanentName === "rotateOutUpLeft") {
      setCode(animateList[47]);
    } else if (permanentName === "rotateOutUpRight") {
      setCode(animateList[48]);
    } else if (permanentName === "hinge") {
      setCode(animateList[49]);
    } else if (permanentName === "rollIn") {
      setCode(animateList[50]);
    } else if (permanentName === "rollOut") {
      setCode(animateList[51]);
    } else if (permanentName === "zoomIn") {
      setCode(animateList[52]);
    } else if (permanentName === "zoomInDown") {
      setCode(animateList[53]);
    } else if (permanentName === "zoomInLeft") {
      setCode(animateList[54]);
    } else if (permanentName === "zoomInRight") {
      setCode(animateList[55]);
    } else if (permanentName === "zoomInUp") {
      setCode(animateList[56]);
    } else if (permanentName === "zoomOut") {
      setCode(animateList[57]);
    } else if (permanentName === "zoomOutDown") {
      setCode(animateList[58]);
    } else if (permanentName === "zoomOutLeft") {
      setCode(animateList[59]);
    } else if (permanentName === "zoomOutRight") {
      setCode(animateList[60]);
    } else if (permanentName === "zoomOutUp") {
      setCode(animateList[61]);
    } else if (permanentName === "slideInDown") {
      setCode(animateList[62]);
    } else if (permanentName === "slideInLeft") {
      setCode(animateList[63]);
    } else if (permanentName === "slideInRight") {
      setCode(animateList[64]);
    } else if (permanentName === "slideInUp") {
      setCode(animateList[65]);
    } else if (permanentName === "slideOutDown") {
      setCode(animateList[66]);
    } else if (permanentName === "slideOutLeft") {
      setCode(animateList[67]);
    } else if (permanentName === "slideOutRight") {
      setCode(animateList[68]);
    } else if (permanentName === "slideOutUp") {
      setCode(animateList[69]);
    }
  }, [name]);

  return (
    <>
      <div className="container">
        <div className="left">
          <SideTabs color="#fff" />
        </div>
        <div className="right">
          <p className="selector" onClick={selectHandler}>
            bounce
          </p>
          <p className="selector" onClick={selectHandler}>
            flash
          </p>
          <p className="selector" onClick={selectHandler}>
            pulse
          </p>
          <p className="selector" onClick={selectHandler}>
            rubberBand
          </p>
          <p className="selector" onClick={selectHandler}>
            shake
          </p>
          <p className="selector" onClick={selectHandler}>
            swing
          </p>
          <p className="selector" onClick={selectHandler}>
            tada
          </p>
          <p className="selector" onClick={selectHandler}>
            wobble
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceIn
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceInDown
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceInLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceInRight
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceInUp
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceOut
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceOutDown
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceOutLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceOutRight
          </p>
          <p className="selector" onClick={selectHandler}>
            bounceOutUp
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeIn
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInDown
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInLeftBig
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInRight
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInRightBig
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInUp
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeInUpBig
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeOut
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeOutDown
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeOutLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeOutRight
          </p>
          <p className="selector" onClick={selectHandler}>
            fadeOutUp
          </p>
          <p className="selector" onClick={selectHandler}>
            flip
          </p>
          <p className="selector" onClick={selectHandler}>
            flipInX
          </p>
          <p className="selector" onClick={selectHandler}>
            flipInY
          </p>
          <p className="selector" onClick={selectHandler}>
            flipOutX
          </p>
          <p className="selector" onClick={selectHandler}>
            flipOutY
          </p>
          <p className="selector" onClick={selectHandler}>
            lightSpeedIn
          </p>
          <p className="selector" onClick={selectHandler}>
            lightSpeedOut
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateIn
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateInDownLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateInDownRight
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateInUpLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateInUpRight
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateOut
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateOutDownLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateOutDownRight
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateOutUpLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            rotateOutUpRight
          </p>
          <p className="selector" onClick={selectHandler}>
            hinge
          </p>
          <p className="selector" onClick={selectHandler}>
            rollIn
          </p>
          <p className="selector" onClick={selectHandler}>
            rollOut
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomIn
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomInDown
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomInLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomInRight
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomInUp
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomOut
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomOutDown
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomOutRight
          </p>
          <p className="selector" onClick={selectHandler}>
            zoomOutUp
          </p>
          <p className="selector" onClick={selectHandler}>
            slideInDown
          </p>
          <p className="selector" onClick={selectHandler}>
            slideInLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            slideInRight
          </p>
          <p className="selector" onClick={selectHandler}>
            slideInUp
          </p>
          <p className="selector" onClick={selectHandler}>
            slideOutDown
          </p>
          <p className="selector" onClick={selectHandler}>
            slideOutLeft
          </p>
          <p className="selector" onClick={selectHandler}>
            slideOutRight
          </p>
          <p className="selector" onClick={selectHandler}>
            slideOutUp
          </p>
        </div>
        <div className="middle">
          <div className="text-container">
            <p className={`text`}>Animation Effect</p>
          </div>
          <div>
            {permanentName && (
              <>
                <h1 className="permanent">{permanentName}</h1>
                <div className="code-box">{code}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 15rem 1fr 15rem;
            grid-template-areas: "left middle right";
            height: 100vh;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1541450805268-4822a3a774ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80");
            background-size: cover;
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
          .text {
            font-size: 6rem;
            animation: ${name} 1s;
            display: inline-block;
            font-weight: 600;
            color: khaki;
          }
          .text-container {
            position: absolute;
            top: 5rem;
          }
          .selector:hover {
            cursor: pointer;
          }
          .selector {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: khaki;
          }
          .middle {
            grid-area: middle;
            display: grid;
            place-items: center;
          }
          .right {
            grid-area: right;
            padding-top: 5rem;
            border-left: 1px solid #222;
            padding-left: 1rem;
            height: 100vh;
            overflow: scroll;
            padding-bottom: 2rem;
          }
          .left {
            grid-area: left;
            margin-top: 10rem;
          }
          .permanent {
            color: #fff;
          }

          @-webkit-keyframes bounce {
            0%,
            20%,
            53%,
            80%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
            40%,
            43% {
              -webkit-transition-timing-function: cubic-bezier(
                0.755,
                0.05,
                0.855,
                0.06
              );
              transition-timing-function: cubic-bezier(
                0.755,
                0.05,
                0.855,
                0.06
              );
              -webkit-transform: translate3d(0, -30px, 0);
              transform: translate3d(0, -30px, 0);
            }
            70% {
              -webkit-transition-timing-function: cubic-bezier(
                0.755,
                0.05,
                0.855,
                0.06
              );
              transition-timing-function: cubic-bezier(
                0.755,
                0.05,
                0.855,
                0.06
              );
              -webkit-transform: translate3d(0, -15px, 0);
              transform: translate3d(0, -15px, 0);
            }
            90% {
              -webkit-transform: translate3d(0, -4px, 0);
              transform: translate3d(0, -4px, 0);
            }
          }
          @-webkit-keyframes flash {
            0%,
            50%,
            100% {
              opacity: 1;
            }

            25%,
            75% {
              opacity: 0;
            }
          }

          @keyframes flash {
            0%,
            50%,
            100% {
              opacity: 1;
            }

            25%,
            75% {
              opacity: 0;
            }
          }

          .flash {
            -webkit-animation-name: flash;
            animation-name: flash;
          }
          @-webkit-keyframes pulse {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }

            50% {
              -webkit-transform: scale3d(1.05, 1.05, 1.05);
              transform: scale3d(1.05, 1.05, 1.05);
            }

            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }

          @keyframes pulse {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }

            50% {
              -webkit-transform: scale3d(1.05, 1.05, 1.05);
              transform: scale3d(1.05, 1.05, 1.05);
            }

            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
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
          @keyframes shake {
            0%,
            100% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }

            10%,
            30%,
            50%,
            70%,
            90% {
              -webkit-transform: translate3d(-10px, 0, 0);
              transform: translate3d(-10px, 0, 0);
            }

            20%,
            40%,
            60%,
            80% {
              -webkit-transform: translate3d(10px, 0, 0);
              transform: translate3d(10px, 0, 0);
            }
          }
          @keyframes swing {
            20% {
              -webkit-transform: rotate3d(0, 0, 1, 15deg);
              transform: rotate3d(0, 0, 1, 15deg);
            }

            40% {
              -webkit-transform: rotate3d(0, 0, 1, -10deg);
              transform: rotate3d(0, 0, 1, -10deg);
            }

            60% {
              -webkit-transform: rotate3d(0, 0, 1, 5deg);
              transform: rotate3d(0, 0, 1, 5deg);
            }

            80% {
              -webkit-transform: rotate3d(0, 0, 1, -5deg);
              transform: rotate3d(0, 0, 1, -5deg);
            }

            100% {
              -webkit-transform: rotate3d(0, 0, 1, 0deg);
              transform: rotate3d(0, 0, 1, 0deg);
            }
          }
          @keyframes tada {
            0% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }

            10%,
            20% {
              -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
              transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            }

            30%,
            50%,
            70%,
            90% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
              transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            }

            40%,
            60%,
            80% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
              transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            }

            100% {
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
          @-webkit-keyframes wobble {
            0% {
              -webkit-transform: none;
              transform: none;
            }

            15% {
              -webkit-transform: translate3d(-25%, 0, 0)
                rotate3d(0, 0, 1, -5deg);
              transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
            }

            30% {
              -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
              transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
            }

            45% {
              -webkit-transform: translate3d(-15%, 0, 0)
                rotate3d(0, 0, 1, -3deg);
              transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
            }

            60% {
              -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
              transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
            }

            75% {
              -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
              transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
            }

            100% {
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes bounceIn {
            0%,
            20%,
            40%,
            60%,
            80%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: scale3d(0.3, 0.3, 0.3);
              transform: scale3d(0.3, 0.3, 0.3);
            }

            20% {
              -webkit-transform: scale3d(1.1, 1.1, 1.1);
              transform: scale3d(1.1, 1.1, 1.1);
            }

            40% {
              -webkit-transform: scale3d(0.9, 0.9, 0.9);
              transform: scale3d(0.9, 0.9, 0.9);
            }

            60% {
              opacity: 1;
              -webkit-transform: scale3d(1.03, 1.03, 1.03);
              transform: scale3d(1.03, 1.03, 1.03);
            }

            80% {
              -webkit-transform: scale3d(0.97, 0.97, 0.97);
              transform: scale3d(0.97, 0.97, 0.97);
            }

            100% {
              opacity: 1;
              -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
            }
          }
          @-webkit-keyframes bounceInDown {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -3000px, 0);
              transform: translate3d(0, -3000px, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(0, 25px, 0);
              transform: translate3d(0, 25px, 0);
            }

            75% {
              -webkit-transform: translate3d(0, -10px, 0);
              transform: translate3d(0, -10px, 0);
            }

            90% {
              -webkit-transform: translate3d(0, 5px, 0);
              transform: translate3d(0, 5px, 0);
            }

            100% {
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes bounceInLeft {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(-3000px, 0, 0);
              transform: translate3d(-3000px, 0, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(25px, 0, 0);
              transform: translate3d(25px, 0, 0);
            }

            75% {
              -webkit-transform: translate3d(-10px, 0, 0);
              transform: translate3d(-10px, 0, 0);
            }

            90% {
              -webkit-transform: translate3d(5px, 0, 0);
              transform: translate3d(5px, 0, 0);
            }

            100% {
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes bounceInRight {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(3000px, 0, 0);
              transform: translate3d(3000px, 0, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(-25px, 0, 0);
              transform: translate3d(-25px, 0, 0);
            }

            75% {
              -webkit-transform: translate3d(10px, 0, 0);
              transform: translate3d(10px, 0, 0);
            }

            90% {
              -webkit-transform: translate3d(-5px, 0, 0);
              transform: translate3d(-5px, 0, 0);
            }

            100% {
              -webkit-transform: none;
              transform: none;
            }
          }
          @keyframes bounceInUp {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 3000px, 0);
              transform: translate3d(0, 3000px, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
            }

            75% {
              -webkit-transform: translate3d(0, 10px, 0);
              transform: translate3d(0, 10px, 0);
            }

            90% {
              -webkit-transform: translate3d(0, -5px, 0);
              transform: translate3d(0, -5px, 0);
            }

            100% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }
          @-webkit-keyframes bounceOut {
            20% {
              -webkit-transform: scale3d(0.9, 0.9, 0.9);
              transform: scale3d(0.9, 0.9, 0.9);
            }

            50%,
            55% {
              opacity: 1;
              -webkit-transform: scale3d(1.1, 1.1, 1.1);
              transform: scale3d(1.1, 1.1, 1.1);
            }

            100% {
              opacity: 0;
              -webkit-transform: scale3d(0.3, 0.3, 0.3);
              transform: scale3d(0.3, 0.3, 0.3);
            }
          }

          @keyframes bounceOut {
            20% {
              -webkit-transform: scale3d(0.9, 0.9, 0.9);
              transform: scale3d(0.9, 0.9, 0.9);
            }

            50%,
            55% {
              opacity: 1;
              -webkit-transform: scale3d(1.1, 1.1, 1.1);
              transform: scale3d(1.1, 1.1, 1.1);
            }

            100% {
              opacity: 0;
              -webkit-transform: scale3d(0.3, 0.3, 0.3);
              transform: scale3d(0.3, 0.3, 0.3);
            }
          }
          @-webkit-keyframes bounceOutDown {
            20% {
              -webkit-transform: translate3d(0, 10px, 0);
              transform: translate3d(0, 10px, 0);
            }

            40%,
            45% {
              opacity: 1;
              -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(0, 2000px, 0);
              transform: translate3d(0, 2000px, 0);
            }
          }
          @keyframes bounceOutLeft {
            20% {
              opacity: 1;
              -webkit-transform: translate3d(20px, 0, 0);
              transform: translate3d(20px, 0, 0);
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(-2000px, 0, 0);
              transform: translate3d(-2000px, 0, 0);
            }
          }
          @keyframes bounceOutRight {
            20% {
              opacity: 1;
              -webkit-transform: translate3d(-20px, 0, 0);
              transform: translate3d(-20px, 0, 0);
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(2000px, 0, 0);
              transform: translate3d(2000px, 0, 0);
            }
          }
          @keyframes bounceOutUp {
            20% {
              -webkit-transform: translate3d(0, -10px, 0);
              transform: translate3d(0, -10px, 0);
            }

            40%,
            45% {
              opacity: 1;
              -webkit-transform: translate3d(0, 20px, 0);
              transform: translate3d(0, 20px, 0);
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(0, -2000px, 0);
              transform: translate3d(0, -2000px, 0);
            }
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }
          @-webkit-keyframes fadeInDown {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes fadeInDownBig {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, -2000px, 0);
              transform: translate3d(0, -2000px, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes fadeInLeft {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0);
              transform: translate3d(-100%, 0, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes fadeInLeftBig {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-2000px, 0, 0);
              transform: translate3d(-2000px, 0, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @keyframes fadeInRight {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @keyframes fadeInRightBig {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(2000px, 0, 0);
              transform: translate3d(2000px, 0, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes fadeInUp {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 100%, 0);
              transform: translate3d(0, 100%, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @keyframes fadeInUpBig {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 2000px, 0);
              transform: translate3d(0, 2000px, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
            }
          }
          @-webkit-keyframes fadeOutDown {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(0, 100%, 0);
              transform: translate3d(0, 100%, 0);
            }
          }
          @keyframes fadeOutLeft {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0);
              transform: translate3d(-100%, 0, 0);
            }
          }
          @-webkit-keyframes fadeOutRight {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0);
            }
          }
          @-webkit-keyframes fadeOutUp {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(0, -100%, 0);
              transform: translate3d(0, -100%, 0);
            }
          }
          @-webkit-keyframes flip {
            0% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
              transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }

            40% {
              -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
                rotate3d(0, 1, 0, -190deg);
              transform: perspective(400px) translate3d(0, 0, 150px)
                rotate3d(0, 1, 0, -190deg);
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }

            50% {
              -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
                rotate3d(0, 1, 0, -170deg);
              transform: perspective(400px) translate3d(0, 0, 150px)
                rotate3d(0, 1, 0, -170deg);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }

            80% {
              -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
              transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }

            100% {
              -webkit-transform: perspective(400px);
              transform: perspective(400px);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }
          }
          @-webkit-keyframes flipInX {
            0% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              -webkit-transition-timing-function: ease-in;
              transition-timing-function: ease-in;
              opacity: 0;
            }

            40% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              -webkit-transition-timing-function: ease-in;
              transition-timing-function: ease-in;
            }

            60% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
              transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
              opacity: 1;
            }

            80% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
              transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
            }

            100% {
              -webkit-transform: perspective(400px);
              transform: perspective(400px);
            }
          }
          @-webkit-keyframes flipInY {
            0% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
              transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
              -webkit-transition-timing-function: ease-in;
              transition-timing-function: ease-in;
              opacity: 0;
            }

            40% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
              transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
              -webkit-transition-timing-function: ease-in;
              transition-timing-function: ease-in;
            }

            60% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
              transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
              opacity: 1;
            }

            80% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
              transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
            }

            100% {
              -webkit-transform: perspective(400px);
              transform: perspective(400px);
            }
          }
          @-webkit-keyframes flipOutX {
            0% {
              -webkit-transform: perspective(400px);
              transform: perspective(400px);
            }

            30% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              opacity: 1;
            }

            100% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              opacity: 0;
            }
          }

          @keyframes flipOutX {
            0% {
              -webkit-transform: perspective(400px);
              transform: perspective(400px);
            }

            30% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              opacity: 1;
            }

            100% {
              -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              opacity: 0;
            }
          }
          @-webkit-keyframes flipOutY {
            0% {
              -webkit-transform: perspective(400px);
              transform: perspective(400px);
            }

            30% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
              transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
              opacity: 1;
            }

            100% {
              -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
              transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
              opacity: 0;
            }
          }
          @-webkit-keyframes lightSpeedIn {
            0% {
              -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
              transform: translate3d(100%, 0, 0) skewX(-30deg);
              opacity: 0;
            }

            60% {
              -webkit-transform: skewX(20deg);
              transform: skewX(20deg);
              opacity: 1;
            }

            80% {
              -webkit-transform: skewX(-5deg);
              transform: skewX(-5deg);
              opacity: 1;
            }

            100% {
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @-webkit-keyframes lightSpeedOut {
            0% {
              opacity: 1;
            }

            100% {
              -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
              transform: translate3d(100%, 0, 0) skewX(30deg);
              opacity: 0;
            }
          }
          @-webkit-keyframes rotateIn {
            0% {
              -webkit-transform-origin: center;
              transform-origin: center;
              -webkit-transform: rotate3d(0, 0, 1, -200deg);
              transform: rotate3d(0, 0, 1, -200deg);
              opacity: 0;
            }

            100% {
              -webkit-transform-origin: center;
              transform-origin: center;
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @-webkit-keyframes rotateInDownLeft {
            0% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: rotate3d(0, 0, 1, -45deg);
              transform: rotate3d(0, 0, 1, -45deg);
              opacity: 0;
            }

            100% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @keyframes rotateInDownRight {
            0% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              -webkit-transform: rotate3d(0, 0, 1, 45deg);
              transform: rotate3d(0, 0, 1, 45deg);
              opacity: 0;
            }

            100% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @keyframes rotateInUpLeft {
            0% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: rotate3d(0, 0, 1, 45deg);
              transform: rotate3d(0, 0, 1, 45deg);
              opacity: 0;
            }

            100% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @-webkit-keyframes rotateInUpRight {
            0% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              -webkit-transform: rotate3d(0, 0, 1, -90deg);
              transform: rotate3d(0, 0, 1, -90deg);
              opacity: 0;
            }

            100% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @keyframes rotateOut {
            0% {
              -webkit-transform-origin: center;
              transform-origin: center;
              opacity: 1;
            }

            100% {
              -webkit-transform-origin: center;
              transform-origin: center;
              -webkit-transform: rotate3d(0, 0, 1, 200deg);
              transform: rotate3d(0, 0, 1, 200deg);
              opacity: 0;
            }
          }
          @keyframes rotateOutDownLeft {
            0% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              opacity: 1;
            }

            100% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: rotate3d(0, 0, 1, 45deg);
              transform: rotate3d(0, 0, 1, 45deg);
              opacity: 0;
            }
          }
          @-webkit-keyframes rotateOutDownRight {
            0% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              opacity: 1;
            }

            100% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              -webkit-transform: rotate3d(0, 0, 1, -45deg);
              transform: rotate3d(0, 0, 1, -45deg);
              opacity: 0;
            }
          }
          @keyframes rotateOutUpLeft {
            0% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              opacity: 1;
            }

            100% {
              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: rotate3d(0, 0, 1, -45deg);
              transform: rotate3d(0, 0, 1, -45deg);
              opacity: 0;
            }
          }
          @keyframes rotateOutUpRight {
            0% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              opacity: 1;
            }

            100% {
              -webkit-transform-origin: right bottom;
              transform-origin: right bottom;
              -webkit-transform: rotate3d(0, 0, 1, 90deg);
              transform: rotate3d(0, 0, 1, 90deg);
              opacity: 0;
            }
          }
          @-webkit-keyframes hinge {
            0% {
              -webkit-transform-origin: top left;
              transform-origin: top left;
              -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
            }

            20%,
            60% {
              -webkit-transform: rotate3d(0, 0, 1, 80deg);
              transform: rotate3d(0, 0, 1, 80deg);
              -webkit-transform-origin: top left;
              transform-origin: top left;
              -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
            }

            40%,
            80% {
              -webkit-transform: rotate3d(0, 0, 1, 60deg);
              transform: rotate3d(0, 0, 1, 60deg);
              -webkit-transform-origin: top left;
              transform-origin: top left;
              -webkit-animation-timing-function: ease-in-out;
              animation-timing-function: ease-in-out;
              opacity: 1;
            }

            100% {
              -webkit-transform: translate3d(0, 700px, 0);
              transform: translate3d(0, 700px, 0);
              opacity: 0;
            }
          }
          @-webkit-keyframes rollIn {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0)
                rotate3d(0, 0, 1, -120deg);
              transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }
          @-webkit-keyframes rollOut {
            0% {
              opacity: 1;
            }

            100% {
              opacity: 0;
              -webkit-transform: translate3d(100%, 0, 0)
                rotate3d(0, 0, 1, 120deg);
              transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
            }
          }
          @-webkit-keyframes zoomIn {
            0% {
              opacity: 0;
              -webkit-transform: scale3d(0.3, 0.3, 0.3);
              transform: scale3d(0.3, 0.3, 0.3);
            }

            50% {
              opacity: 1;
            }
          }
          @-webkit-keyframes zoomInDown {
            0% {
              opacity: 0;
              -webkit-transform: scale3d(0.1, 0.1, 0.1)
                translate3d(0, -1000px, 0);
              transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
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
                translate3d(0, 60px, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1
              );
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
            }
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
          @keyframes zoomInUp {
            0% {
              opacity: 0;
              -webkit-transform: scale3d(0.1, 0.1, 0.1)
                translate3d(0, 1000px, 0);
              transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
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
                translate3d(0, -60px, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1
              );
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
            }
          }
          @keyframes zoomOut {
            0% {
              opacity: 1;
            }

            50% {
              opacity: 0;
              -webkit-transform: scale3d(0.3, 0.3, 0.3);
              transform: scale3d(0.3, 0.3, 0.3);
            }

            100% {
              opacity: 0;
            }
          }
          @keyframes zoomOutDown {
            40% {
              opacity: 1;
              -webkit-transform: scale3d(0.475, 0.475, 0.475)
                translate3d(0, -60px, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.55,
                0.055,
                0.675,
                0.19
              );
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }

            100% {
              opacity: 0;
              -webkit-transform: scale3d(0.1, 0.1, 0.1)
                translate3d(0, 2000px, 0);
              transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
              -webkit-transform-origin: center bottom;
              transform-origin: center bottom;
              -webkit-animation-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1
              );
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
            }
          }
          @-webkit-keyframes zoomOutLeft {
            40% {
              opacity: 1;
              -webkit-transform: scale3d(0.475, 0.475, 0.475)
                translate3d(42px, 0, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
            }

            100% {
              opacity: 0;
              -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
              transform: scale(0.1) translate3d(-2000px, 0, 0);
              -webkit-transform-origin: left center;
              transform-origin: left center;
            }
          }
          @keyframes zoomOutRight {
            40% {
              opacity: 1;
              -webkit-transform: scale3d(0.475, 0.475, 0.475)
                translate3d(-42px, 0, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
            }

            100% {
              opacity: 0;
              -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
              transform: scale(0.1) translate3d(2000px, 0, 0);
              -webkit-transform-origin: right center;
              transform-origin: right center;
            }
          }
          @-webkit-keyframes zoomOutUp {
            40% {
              opacity: 1;
              -webkit-transform: scale3d(0.475, 0.475, 0.475)
                translate3d(0, 60px, 0);
              transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
              -webkit-animation-timing-function: cubic-bezier(
                0.55,
                0.055,
                0.675,
                0.19
              );
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }

            100% {
              opacity: 0;
              -webkit-transform: scale3d(0.1, 0.1, 0.1)
                translate3d(0, -2000px, 0);
              transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
              -webkit-transform-origin: center bottom;
              transform-origin: center bottom;
              -webkit-animation-timing-function: cubic-bezier(
                0.175,
                0.885,
                0.32,
                1
              );
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
            }
          }
          @keyframes slideInDown {
            0% {
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
              visibility: visible;
            }

            100% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            0% {
              -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
              visibility: visible;
            }

            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            0% {
              -webkit-transform: translateX(100%);
              transform: translateX(100%);
              visibility: visible;
            }

            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
          }
          @keyframes slideInUp {
            0% {
              -webkit-transform: translateY(100%);
              transform: translateY(100%);
              visibility: visible;
            }

            100% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }
          }
          @keyframes slideOutDown {
            0% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }

            100% {
              visibility: hidden;
              -webkit-transform: translateY(100%);
              transform: translateY(100%);
            }
          }
          @keyframes slideOutLeft {
            0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }

            100% {
              visibility: hidden;
              -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
            }
          }
          @-webkit-keyframes slideOutRight {
            0% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }

            100% {
              visibility: hidden;
              -webkit-transform: translateX(100%);
              transform: translateX(100%);
            }
          }
          @-webkit-keyframes slideOutUp {
            0% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }

            100% {
              visibility: hidden;
              -webkit-transform: translateY(-100%);
              transform: translateY(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Animate;

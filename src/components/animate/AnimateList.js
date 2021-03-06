const animateList = [
  `@-webkit-keyframes bounce {
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
      }`,
  `@-webkit-keyframes flash {
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
      }`,
  `@keyframes pulse {
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
      }`,
  `  @keyframes rubberBand {
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
      }`,
  ` @keyframes shake {
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
      }`,
  `  @keyframes swing {
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
      }`,
  `   @keyframes tada {
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
      }`,
  ` @-webkit-keyframes wobble {
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
      }`,
  ` @-webkit-keyframes bounceIn {
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
      }`,
  ` @-webkit-keyframes bounceInDown {
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
      }`,
  `@-webkit-keyframes bounceInLeft {
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
      }`,
  `@-webkit-keyframes bounceInRight {
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
      }`,
  ` @keyframes bounceInUp {
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
      }`,
  `@-webkit-keyframes bounceOut {
        20% {
          -webkit-transform: scale3d(.9, .9, .9);
          transform: scale3d(.9, .9, .9);
        }
      
        50%, 55% {
          opacity: 1;
          -webkit-transform: scale3d(1.1, 1.1, 1.1);
          transform: scale3d(1.1, 1.1, 1.1);
        }
      
        100% {
          opacity: 0;
          -webkit-transform: scale3d(.3, .3, .3);
          transform: scale3d(.3, .3, .3);
        }
      }
      
      @keyframes bounceOut {
        20% {
          -webkit-transform: scale3d(.9, .9, .9);
          transform: scale3d(.9, .9, .9);
        }
      
        50%, 55% {
          opacity: 1;
          -webkit-transform: scale3d(1.1, 1.1, 1.1);
          transform: scale3d(1.1, 1.1, 1.1);
        }
      
        100% {
          opacity: 0;
          -webkit-transform: scale3d(.3, .3, .3);
          transform: scale3d(.3, .3, .3);
        }
      }
      `,
  `@-webkit-keyframes bounceOutDown {
        20% {
          -webkit-transform: translate3d(0, 10px, 0);
          transform: translate3d(0, 10px, 0);
        }
      
        40%, 45% {
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
      `,
  `@keyframes bounceOutLeft {
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
  }`,
  `@keyframes bounceOutRight {
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
  `,
  `@keyframes bounceOutUp {
    20% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }
  
    40%, 45% {
      opacity: 1;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }`,
  `@keyframes fadeIn {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }`,
  `@-webkit-keyframes fadeInDown {
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
  `,
  `@-webkit-keyframes fadeInDownBig {
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
  }`,
  `@-webkit-keyframes fadeInLeft {
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
  }`,
  `@-webkit-keyframes fadeInLeftBig {
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
  }`,
  `@keyframes fadeInRight {
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
  }`,
  `@keyframes fadeInRightBig {
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
  }`,
  `@-webkit-keyframes fadeInUp {
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
  }`,
  `@keyframes fadeInUpBig {
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
  }`,
  `@keyframes fadeOut {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
    }
  }`,
  `@-webkit-keyframes fadeOutDown {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }`,
  `@keyframes fadeOutLeft {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }`,
  `@-webkit-keyframes fadeOutRight {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }`,
  `@-webkit-keyframes fadeOutUp {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }`,
  `@-webkit-keyframes flip {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    40% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  
    50% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    80% {
      -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
      transform: perspective(400px) scale3d(.95, .95, .95);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  
    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }`,
  `@-webkit-keyframes flipInX {
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
  }`,
  `@-webkit-keyframes flipInY {
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
  }`,
  `@-webkit-keyframes flipOutX {
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
  }`,
  `@-webkit-keyframes flipOutY {
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
  }`,
  `@-webkit-keyframes lightSpeedIn {
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
  }`,
  `@-webkit-keyframes lightSpeedOut {
    0% {
      opacity: 1;
    }
  
    100% {
      -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
  }`,
  `@-webkit-keyframes rotateIn {
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
  }`,
  `@-webkit-keyframes rotateInDownLeft {
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
  }`,
  `@keyframes rotateInDownRight {
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
  }`,
  `@keyframes rotateInUpLeft {
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
  }`,
  `@-webkit-keyframes rotateInUpRight {
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
  }`,
  `@keyframes rotateOut {
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
  }`,
  `@keyframes rotateOutDownLeft {
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
  `,
  `@-webkit-keyframes rotateOutDownRight {
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
  }`,
  `@keyframes rotateOutUpLeft {
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
  }`,
  `@keyframes rotateOutUpRight {
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
  }`,
  `@-webkit-keyframes hinge {
    0% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }
  
    20%, 60% {
      -webkit-transform: rotate3d(0, 0, 1, 80deg);
      transform: rotate3d(0, 0, 1, 80deg);
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }
  
    40%, 80% {
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
  }`,
  `@-webkit-keyframes rollIn {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
  
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }`,
  `@-webkit-keyframes rollOut {
    0% {
      opacity: 1;
    }
  
    100% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }`,
  `@-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
  
    50% {
      opacity: 1;
    }
  }`,
  `@-webkit-keyframes zoomInDown {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }`,
  `@-webkit-keyframes zoomInLeft {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
      transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }`,
  `@keyframes zoomInRight {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
      transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }`,
  `@keyframes zoomInUp {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }`,
  `@keyframes zoomOut {
    0% {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
  
    100% {
      opacity: 0;
    }
  }`,
  `@keyframes zoomOutDown {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }`,
  `@-webkit-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
      transform: scale(.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      transform-origin: left center;
    }
  }`,
  `@keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
      transform: scale(.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      transform-origin: right center;
    }
  }`,
  `@-webkit-keyframes zoomOutUp {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
  
    100% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }`,
  `@keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
  
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }`,
  `@keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
  
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }`,
  `@keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
  
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }`,
  `@keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }
  
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }`,
  `@keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  
    100% {
      visibility: hidden;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }`,
  `@keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  
    100% {
      visibility: hidden;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }`,
  `@-webkit-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  
    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }`,
  `@-webkit-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  
    100% {
      visibility: hidden;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }`,
];

export default animateList;

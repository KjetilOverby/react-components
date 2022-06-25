import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <div className="firstContainer">
          <div className="firstSubContainer">
            <h1 className="header">Firmanavn AS</h1>
            <p className="headerText">Firmavegen 1</p>
            <p className="headerText">1010 Firma</p>
            <br />
            <p className="headerText">Tel: 121 21 212</p>
            <p className="headerText">Email: Firma@test.no</p>
          </div>
        </div>
        <div className="secondContainer">
          <div className="firstSubContainer">
            <h1 className="header">Åpningstider</h1>
            <h3 className="subheader">Verksted:</h3>
            <p className="headerText">mandag - torsdag: 07:00 - 16:00</p>
            <p className="headerText">fredag: 07:00 - 13:00</p>
            <h3 className="subheader2">Administrasjon:</h3>
            <p className="headerText">mandag - torsdag: 08:00 - 16:00</p>
            <p className="headerText">fredag: 08:00 - 13:00</p>
          </div>
        </div>
        <div className="thirdContainer">
          {/* <img
            className="logo"
            src="https://lh3.googleusercontent.com/pw/ACtC-3fXiI7_HzVyk9l0H85KMJVtoKnh3Y-f7E2CZPZ40uusS5CQtZAbm0XURt86EnZVvRthOWce5ZNLFq6LNo7xSUPFlctVVGCAAUxXkrUTYVRF7Ptgv9pDNfPtB85OSEsBCDLWZL-SBbJFmKf45lOy3NS4=w1191-h258-no?authuser=0"
            alt=""
          /> */}
          <p className="orgnr">Org.nr:F123456787</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 15rem 1fr 1fr 1fr 15rem;
            background: darkslateblue;
            height: 20rem;
            grid-template-areas: ". first second third. ";
            padding: 1rem 0 0 0;
            grid-area: footer;
          }
          .firstContainer {
            grid-area: first;
            display: flex;
            justify-content: center;
          }
          .firstSubContainer {
            display: inline-block;
          }
          .header {
            font-size: 1.3rem;
            font-weight: 400;
            font-style: italic;
          }
          .headerText {
            font-style: italic;
            font-weight: 300;
            color: #202020;
          }
          .secondContainer {
            grid-area: second;
            display: flex;
            justify-content: center;
          }
          .subheader {
            font-style: italic;
          }
          .subheader2 {
            font-style: italic;
            margin-top: 2rem;
          }
          .thirdContainer {
            grid-area: third;
          }
          .logo {
            height: 3rem;
            margin-top: 1rem;
          }
          .orgnr {
            font-style: italic;
            margin-left: 2rem;
          }

          @media screen and (max-width: 1400px) {
            .container {
              grid-template-columns: 0rem 1fr 1fr 1fr 0rem;
            }
          }

          @media screen and (max-width: 1000px) {
            .container {
              grid-template-columns: 0rem 1fr 1fr 1fr 0rem;
              height: 40rem;
              grid-template-areas:
                "first first first first first "
                "second second second second second"
                "third third third third third";
            }
            .firstContainer {
              display: flex;
              justify-content: flex-start;
              margin-left: 1rem;
            }
            .secondContainer {
              display: flex;
              justify-content: flex-start;
              margin-left: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;

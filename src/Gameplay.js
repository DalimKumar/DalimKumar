import React from "react";
function Gameplay() {
  const GamePlayArray = [
    {
      gif: "./assets/images/genesis.gif",

      title: "FOUR FAMILIES",
      text: "Genesis Narcos Drop. And so it begins...",
    },
    {
      gif: "./assets/images/gun.gif",

      title: "WAR ROOM",
      text: "Saddle Up, Lock and Load",
    },
    {
      gif: "./assets/images/terran.gif",

      title: "TERRAN SYNDIACTE INVASION",
      text: "All is fair in smuggling and war",
    },
    {
      gif: "./assets/images/goldenstarship.gif",

      title: "STARSHIPS ",
      text: "Only the lucky can make it offworld",
    },
  ];
  return (
    <>
      <section className="game-play-section1">
        <img
          className="left-img"
          src="assets/images/game-play/left-img.png"
          alt=""
        ></img>
        <img
          className="right-img"
          src="assets/images/game-play/right-img.png"
          alt=""
        ></img>
        <div className="container px-md-5">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-heading">
                <img src="assets/images/logo.png" alt="" height="150px"></img>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {GamePlayArray.map((el, i) => (
              <div
                className="col-xl-3 col-lg-4 col-sm-6 col-md-6 col-10  d-flex justify-content-center align-items-center my-3"
                key={i}
              >
                <div className="single-play-1" style={{ position: "relative" }}>
                  <img src={el.gif} alt="" className="img-gif" />
                  <img
                    src="assets/images/Vector.png"
                    alt=""
                    className="frame"
                  />
                  <div className="singlePlayTextContainer">
                    <h4 className="singlePlayTitle">{el.title}</h4>
                    <p className="singlePlayText">{el.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="#/" className="b-all-btn">
                Browser All <img src="assets/images/arrow.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gameplay;

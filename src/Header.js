import React, { useContext, useState } from "react";
import TheTLDRHowToPlay from "./TheTLDRHowToplay";
import StakModal from "./Modal";
import BankModal from "./NextModal";
import { BlockchainContext } from "./context/BlockchainContext";
import Stake from "./Stake";

function Header() {
  const { currentSignerAddress, connectWallet } = useContext(BlockchainContext);

  const [stake, setStake] = useState(false);
  const [bank, setBank] = useState(false);

  const [stackModal, setStackModal] = useState(false);
  const [howToPlay, setHowToPlay] = useState(false);

  function connectWalletHandler() {
    connectWallet();
  }

  const stakeHandler = () => {
    setStake(true);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* <StakModal stake={stake} setStake={setStake} />*/}
      <BankModal bank={bank} setBank={setBank} />
      <Stake myModal={stackModal} setMymodal={setStackModal} />
      <TheTLDRHowToPlay myModal={howToPlay} setMymodal={setHowToPlay} />

      <div className="Header">
        <header className="header">
          <div className="overlay"></div>

          <section className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content">
                    <div className="left-content">
                      <ul className="top-social-links">
                        <li>
                          <a href="#">
                            <img src="assets/images/icon-twitter.svg"></img>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/images/icon-discord.svg"></img>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/images/icon-instagram.svg"></img>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <ul className="right-list">
                        <li>
                          <div className="language-selector">
                            <select name="language" className="language">
                              <option value="1">EN</option>
                              <option value="2">IN</option>
                              <option value="3">BN</option>
                            </select>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mainmenu-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                      <img src="assets/images/logo.png" alt=""></img>
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#main_menu"
                      aria-controls="main_menu"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse fixed-height"
                      id="main_menu"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a
                            onClick={() => {
                              setHowToPlay(true);
                              scrollToTop();
                            }}
                            className="nav-link"
                          >
                            How To Play
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            // href="./Modal.js"
                            onClick={() => {
                              setStackModal(true);
                              scrollToTop();
                            }}
                            className="nav-link"
                            // data-toggle="modal"
                            // data-target="#mystake"
                          >
                            STAKE
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            onClick={() => setBank(true)}
                            className="nav-link"
                            data-toggle="modal"
                            data-target="#bank"
                          >
                            BANK
                          </a>
                        </li>
                      </ul>

                      {!currentSignerAddress ? (
                        <a
                          onClick={connectWalletHandler}
                          className="mybtn1"
                          // data-toggle="modal"
                          // data-target="#signin"
                        >
                          {" "}
                          CONNECT WALLET
                        </a>
                      ) : (
                        <a
                          className="mybtn1"
                          // data-toggle="modal"
                          // data-target="#signin"
                        >
                          {" "}
                          WALLET CONNECTED
                        </a>
                      )}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;

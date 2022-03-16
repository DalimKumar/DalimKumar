import { useContext, useState, useEffect } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

const Stake = (props) => {
  const [value, setValue] = useState(0);
  const [stake1, setStale] = useState(2);
  const [unstacked, setUnstacked] = useState(5);
  const [perDay, setPerDay] = useState(23000);
  const { rewardTokenBalance } = useContext(BlockchainContext);
  const stakeArray = [
    { name: "Stake", stakeNumber: 1500 },
    /* { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 },
    { name: "Stake", stakeNumber: 1500 }, */
  ];
  const name = "UnStaked";
  const stakenumbers = 0;
  const name2 = "Staked";
  const stakenumbers2 = 1500;
  const [selectedImages, setSelectedImages] = useState([]);
  const {
    unstakedNfts,
    stake,
    unstakedBalance,
    stakedBalance,
    stakedNfts,
    unstake,
  } = useContext(BlockchainContext);
  const handleClickOpen = () => {
    props.setStake(true);
  };

  const handleClose = () => {
    props.setStake(false);
  };

  const stakeHandler = async () => {
    // Stake NFT
    if (selectedImages.length > 0) {
      stake(selectedImages);
    } else {
      alert("No NFT selected!");
    }
  };

  const imageHandler = (tokenId) => {
    if (selectedImages.includes(tokenId)) {
      setSelectedImages(
        selectedImages.filter((token_id) => token_id !== tokenId)
      );
    } else {
      setSelectedImages((oldArray) => [...oldArray, tokenId]);
    }
  };

  const unstakeHandler = async () => {
    // Stake NFT
    unstake();
  };

  return (
    <section
      className="game-play-section"
      id="stake"
      style={{ marginTop: "200px" }}
    >
      <img
        className="left-img"
        src="assets/images/game-play/left-img.png"
        alt=""
      />
      <img
        className="right-img"
        src="assets/images/game-play/right-img.png"
        alt=""
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12  col-xl-8">
            <div className="single-playstack" style={{ borderRadius: "8px" }}>
              {/* <h5 className="subtitle">
                     Why Neo Narcos?
                  </h5>  */}
              <div
                className="container "
                style={{
                  padding: "32px",
                }}
              >
                {/* <!-- <img src="assets/images/bg-01 1.png" height="200px;" width="100%"> --> */}

                <div className="row">
                  {stakedNfts &&
                    stakedNfts.tokenIds &&
                    stakedNfts.tokenIds.map((tokenId, i) => {
                      return (
                        <div className="col-3 mt-3" key={i}>
                          <div
                            className={
                              value === i
                                ? "stack-active stack mr-4"
                                : "stack mr-4"
                            }
                          >
                            <div className="stack-card">
                              <a className="thumbnail">
                                <img
                                  style={{
                                    border: selectedImages.includes(tokenId)
                                      ? "4px solid red"
                                      : "",
                                  }}
                                  className="img-responsive"
                                  src={stakedNfts.metadatas[i]}
                                  alt=""
                                  onClick={() => {
                                    imageHandler(tokenId);
                                  }}
                                ></img>
                              </a>
                            </div>
                            <h1 className="stack-text">
                              {name2.toUpperCase()}
                            </h1>
                            <h3 className="stack-h3">
                              {stakenumbers2}
                              <span className="stack-span">
                                <img src="assets/images/diamond.png" alt="#" />
                              </span>
                            </h3>
                            <p className="stack-par">PER DAY</p>
                          </div>
                        </div>
                      );
                    })}

                  {unstakedNfts &&
                    unstakedNfts.tokenIds &&
                    unstakedNfts.tokenIds.map((tokenId, i) => {
                      return (
                        <div className="col-3 mt-3" key={i}>
                          <div
                            className={
                              value === i
                                ? "stack-active stack mr-4"
                                : "stack mr-4"
                            }
                          >
                            <div className="stack-card">
                              <a className="thumbnail">
                                <img
                                  style={{
                                    border: selectedImages.includes(tokenId)
                                      ? "4px solid red"
                                      : "",
                                  }}
                                  className="img-responsive"
                                  src={unstakedNfts.metadatas[i]}
                                  alt=""
                                  onClick={() => {
                                    imageHandler(tokenId);
                                  }}
                                ></img>
                              </a>
                            </div>
                            <h1 className="stack-text">{name.toUpperCase()}</h1>
                            <h3 className="stack-h3">
                              {stakenumbers}
                              <span className="stack-span">
                                <img src="assets/images/diamond.png" alt="#" />
                              </span>
                            </h3>
                            <p className="stack-par">PER DAY</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="row justify-content-center">
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12  col-xl-4 mx-auto mt-4 mt-xl-0">
            <div className="stack-play">
              <div className="container " style={{ padding: "32px" }}>
                <h2 className="stack-play-section">DAILY REVENUE</h2>

                <div className="row justify-content-between">
                  <div className=" col-7">
                    <label className="stack-play-lable">STAKED:</label>
                  </div>
                  <div className=" col-5 ">
                    <div
                      style={{
                        height: "42px",
                        top: "415px",
                        width: "100%",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: 600,

                        background: "#3E0762",
                        border: "1px solid #7A1BB4",
                        boxSizing: "border-box",
                        boxShadow: "0px 0px 25px #7A1BB4",
                        borderRadius: "25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "-8px",
                        marginBottom: "5px",
                      }}
                    >
                      {stakedBalance}
                    </div>
                  </div>
                  <div className=" col-7 mt-2">
                    <label className="stack-play-lable">UNSTAKED:</label>
                  </div>
                  <div className=" col-5 mt-0">
                    <div
                      className="stack-play-input"
                      style={{
                        height: "42px",
                        top: "415px",
                        width: "100%",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: 600,

                        background: "#3E0762",
                        border: "1px solid #7A1BB4",
                        boxSizing: "border-box",
                        boxShadow: "0px 0px 25px #7A1BB4",
                        borderRadius: "25px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {unstakedBalance}
                      {/* <span className="stack-span">
                        <img src="assets/images/diamond.png" alt="#" />
                      </span> */}
                    </div>
                  </div>

                  <div className=" col-7 mt-2">
                    <label className="stack-play-lable">
                      REWARDS PER DAY :
                    </label>
                  </div>
                  <div className=" col-5 mt-2">
                    <div className="stack-play-input">
                      {stakenumbers2}
                      <span className="stack-span">
                        <img src="assets/images/diamond.png" alt="#" />
                      </span>
                    </div>
                  </div>

                  <div className="col-7 mt-2">
                    <label className="stack-play-lable"></label>
                  </div>
                  <div className="col-5 mt-2 ">
                    <div className="stack-play-input">
                      X {stakedBalance}
                      <span className="stack-span">
                        <img src="assets/images/diamond.png" alt="#" />
                      </span>
                      <br />
                      (MULTIPLY)
                    </div>
                  </div>

                  <div className="w-100">
                    <hr className="stack-hr" />
                  </div>
                  <div className=" col-8">
                    <label className="stack-play-lable">TOTAL PER DAY :</label>
                  </div>
                  <div className=" col-4">
                    <div className="stack-play-input d-flex ">
                      {(1500 * stakedBalance).toFixed(2)}
                      <span className="stack-span">
                        <img src="assets/images/diamond.png" alt="#" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center px-1 px-xm-3">
                <a className="mybtn2 px-3 px-sm-4" onClick={stakeHandler}>
                  STAKE
                </a>
                <a  className="mybtn2 px-3 px-sm-4" onClick={unstakeHandler}>
                  UNSTAKE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stake;

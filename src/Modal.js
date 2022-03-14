import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import StakeModal from "./StakeModal";
import UnStakeModal from "./UnStakeModal";
import { useState, useContext } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

export default function Modal(props) {
  const [stake, setStake] = useState(false);
  const [unstake, setUnstake] = useState(false);

  const { unstakedBalance, stakedBalance, rewardTokenBalance } =
    useContext(BlockchainContext);

  const handleClickOpen = () => {
    props.setStake(true);
  };

  const handleClose = () => {
    props.setStake(false);
  };

  const handleStake = () => {
    console.log(unstakedBalance);
    setStake(true);
  };

  const handleUnStake = () => {
    setUnstake(true);
  };

  return (
    <div>
      <StakeModal stake={stake} setStake={setStake} />
      <UnStakeModal unstake={unstake} setUnStake={setUnstake} />

      <Dialog
        open={props.stake}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div
            className="modal fade login-modal sign-in"
            id="stake"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="stake"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered "
              role="document"
            >
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-body">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-m_login"
                      role="tabpanel"
                      aria-labelledby="pills-m_login-tab"
                    >
                      <div className="header-area">
                        <h4 className="title">THE BATTLEFIELD</h4>
                      </div>
                      <div className="form-area">
                        <form action="#" method="POST">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label  text-white"
                                  htmlFor="inputSuccess1"
                                >
                                  Unstaked
                                </label>
                                <input
                                  type="text"
                                  className="input-field"
                                  id="input-name"
                                  placeholder=""
                                  value={unstakedBalance}
                                  onChange={(event) => {}}
                                ></input>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label  text-white"
                                  htmlFor="inputSuccess1"
                                >
                                  Staked
                                </label>
                                <input
                                  type="text"
                                  className="input-field"
                                  id="input-name"
                                  placeholder=""
                                  value={stakedBalance}
                                  onChange={(event) => {}}
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label  text-white"
                                  htmlFor="inputSuccess1"
                                >
                                  Reward Token balance
                                </label>
                                <input
                                  type="text"
                                  className="input-field"
                                  id="input-name"
                                  placeholder=""
                                  value={rewardTokenBalance}
                                  onChange={(event) => {}}
                                ></input>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label  text-white"
                                  htmlFor="inputSuccess1"
                                >
                                  Reward Per Day
                                </label>
                                <input
                                  type="text"
                                  className="input-field"
                                  id="input-name"
                                  placeholder=""
                                  value="1500"
                                  onChange={(event) => {}}
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12"></div>
                          </div>

                          <div className="form-group">
                            <ul className="nav l-nav" role="tablist">
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link mybtn2 "
                                  id="pills-m_login-tab"
                                  href=""
                                  role="tab"
                                  aria-controls="pills-m_login"
                                  aria-selected="true"
                                  data-toggle="modal"
                                  data-target="#stake2"
                                  onClick={handleStake}
                                >
                                  Stake
                                </a>
                              </li>

                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link mybtn2 active"
                                  id="pills-m_register-tab"
                                  data-toggle="modal"
                                  data-target="#unstake"
                                  href=""
                                  role="tab"
                                  aria-controls="pills-m_register"
                                  aria-selected="false"
                                  onClick={handleUnStake}
                                >
                                  Unstake
                                </a>
                              </li>
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

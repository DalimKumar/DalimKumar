import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState, useEffect } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

export default function Modal(props) {
  const { stakedNfts, unstake, stakedBalance } = useContext(BlockchainContext);
  const handleClickOpen = () => {
    props.setUnStake(true);
  };

  const handleClose = () => {
    props.setUnStake(false);
  };

  const unstakeHandler = async () => {
    // Stake NFT
    unstake();
  };

  return (
    <div>
      <Dialog
        open={props.unstake}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div
            className="modal fade login-modal sign-in"
            id="unstake"
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

                {/* Body */}
                <div className="modal-body">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-m_login"
                      role="tabpanel"
                      aria-labelledby="pills-m_login-tab"
                    >
                      <div className="form-area">
                        <form action="#" method="POST">
                          <div className="row">
                            {stakedNfts &&
                              stakedNfts.tokenIds &&
                              stakedNfts.tokenIds.map((tokenId, i) => {
                                return (
                                  <div className="col-3 mt-3" key={i}>
                                    {/* Our main content of Nfts */}
                                    <a className="thumbnail" href="#">
                                      <img
                                        className="img-responsive"
                                        src={stakedNfts.metadatas[i]}
                                        alt=""
                                      ></img>
                                    </a>
                                    <h6>{tokenId.toString()}</h6>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="form-group mt-5">
                            <ul className="nav l-nav" role="tablist">
                              {stakedBalance == 0 ? (
                                <h5>You have 0 NFT to unstake</h5>
                              ) : (
                                <li className="nav-item" role="presentation">
                                  <a
                                    className="nav-link mybtn2 active"
                                    id="pills-m_register-tab"
                                    data-toggle="pill"
                                    href=""
                                    role="tab"
                                    aria-controls="pills-m_register"
                                    aria-selected="false"
                                    onClick={unstakeHandler}
                                  >
                                    Unstake
                                  </a>
                                </li>
                              )}
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

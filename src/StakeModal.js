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
  const [selectedImages, setSelectedImages] = useState([]);
  const { unstakedNfts, stake, unstakedBalance } =
    useContext(BlockchainContext);
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

  return (
    <div>
      <Dialog
        open={props.stake}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div
            className="modal fade login-modal sign-in"
            id="stake2"
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
                            {unstakedNfts &&
                              unstakedNfts.tokenIds &&
                              unstakedNfts.tokenIds.map((tokenId, i) => {
                                return (
                                  <div className="col-3 mt-3" key={i}>
                                    {/* Our main content of Nfts */}
                                    <a className="thumbnail" href="#">
                                      <img
                                        style={{
                                          border: selectedImages.includes(
                                            tokenId
                                          )
                                            ? "4px solid purple"
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
                                    <h6>{tokenId.toString()}</h6>
                                  </div>
                                );
                              })}
                          </div>

                          <div className="form-group mt-5">
                            <ul className="nav l-nav" role="tablist">
                              {unstakedBalance == 0 ? (
                                <h5>You have 0 NFT to stake</h5>
                              ) : (
                                <li className="nav-item" role="presentation">
                                  <a
                                    className="nav-link mybtn2 "
                                    id="pills-m_login-tab"
                                    data-toggle="pill"
                                    role="tab"
                                    aria-controls="pills-m_login"
                                    aria-selected="true"
                                    onClick={stakeHandler}
                                  >
                                    Stake
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

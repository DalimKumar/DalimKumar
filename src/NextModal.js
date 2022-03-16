import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

export default function Modal(props) {
  const { rewardTokenBalance, withdrawToERC20 } = useContext(BlockchainContext);
  const handleClickOpen = () => {
    props.setBank(true);
  };

  const handleClose = () => {
    props.setBank(false);
  };

  const withdrawToErc20Handler = () => {
    withdrawToERC20();
  };

  return (
    <div>
      <Dialog
        open={props.bank}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div
            className="modal fade login-modal sign-in"
            id="bank"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="bank"
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
                        <h4 className="title">$SPICE BANK</h4>
                      </div>
                      <div className="form-area">
                        <form>
                          <div className="form-group">
                            <label
                              className="form-control-label  text-white"
                              for="inputSuccess1"
                            >
                              Game Balance
                            </label>
                            <input
                              type="text"
                              className="input-field"
                              id="input-name"
                              placeholder=""
                              value={rewardTokenBalance}
                              onChange={(e) => {}}
                            ></input>
                            <small className="form-text text-white">
                              Your In-game SPICE balance avalible to withdraw
                            </small>
                          </div>
                          <div className="form-group">
                            <button
                              type="button"
                              className="mybtn2 btn-block"
                              onClick={withdrawToErc20Handler}
                            >
                              WITHDRAW TO ERC-20
                            </button>
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

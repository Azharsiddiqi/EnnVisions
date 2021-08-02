import React from "react";
import { Modal } from "react-bootstrap";

export default ({ show, handleClose }) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <div className="page12-custom">
        <div className="page12-container">
          <div className="logo-body-text">
            <img src="assets/images/ic-logo.svg" alt="Envision" />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
          <div className="btn-container">
            <button
              onClick={handleClose}
              type="button"
              className="btn cancelBtn"
            >
              CANCEL
            </button>
            <button onClick={handleClose} type="button" className="btn yesBtn">
              YES!
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

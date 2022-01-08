import React from 'react';
import { Modal } from 'react-bootstrap';

const ConfirmationAlert = ({ show, handleSave, handleClose, description }) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <div className="page12-custom">
        <div className="page12-container">
          <div className="logo-body-text">
            <img src="assets/images/ic-logo.svg" alt="Envision" />
            <p>{description}</p>
          </div>
          <div className="btn-container">
            <button onClick={handleSave} type="button" className="btn yesBtn">
              YES!
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="btn cancelBtn"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationAlert;
import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export const Modal = ({ showModal, hideModal, title, message, buttonText1, buttonText2}) => {
  return (
    showModal && (
      <>
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>{title}</h3>
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hideModal}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">{message}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="modal-close-button1"
                  onClick={hideModal}
                >
                  {buttonText1}
                </button>
                <button
                  type="button"
                  className="modal-close-button2"
                  onClick={hideModal}
                >
                  {buttonText2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};


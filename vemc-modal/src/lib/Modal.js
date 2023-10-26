import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export const Modal = ({ showModal, hideModal }) => {
  return (
    showModal && (
      <>
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h3>Enter your modal title here</h3>
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hideModal}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">Hello, your message here</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="modal-close-button1"
                  onClick={hideModal}
                >
                  Ok
                </button>
                <button
                  type="button"
                  className="modal-close-button2"
                  onClick={hideModal}
                >
                  Cancel
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


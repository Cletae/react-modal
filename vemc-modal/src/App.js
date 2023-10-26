import React, { useState } from "react";
import { Modal } from "./lib/index";
import "./App.css";

function App() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
      <button className="modal-toggle" onClick={() => setDisplayModal(true)}>
        show modal
      </button>
      <Modal
        showModal={displayModal}
        hideModal={() => setDisplayModal(false)}
        title="Enter your modal title here" 
        message="Hello, your message here"
        buttonText1='Ok' 
        buttonText2='Cancel'
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Modal from "./lib/Modal";
import "./App.css";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  console.log("coucou");
  

  return (
    <div className="App">
      <button className="modal-toggle" onClick={() => setDisplayModal(true)}>
        show modal
      </button>
      <Modal
        showModal={displayModal}
        hideModal={() => setDisplayModal(false)}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";


export default function Modal() {
  const [modal, setModal] = useState(false);


  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>

      <button onClick={toggleModal} className="btn-modal">
        WITHDRAW
      </button>

      <button onClick={toggleModal} className="btn-modal">
        DEPOSIT
      </button>

      <button onClick={toggleModal} className="btn-modal">
        TRANSFER
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <input type="Amount:" id="amount-label"  placeholder="Enter Amount" />
            <button>Submit</button>
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
          </div>
        </div>
      )}


        
       </>
  );
}
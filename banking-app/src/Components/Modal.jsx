import React from "react";
import { useEffect } from "react";


export default function Modal(props) {

  return (
    <>

      {props.isOpen && (
        <div id='modalcomponent' className="modal active-modal">
          <div onClick={props.toggleModal} className="overlay"></div>
          <div className="modal-content">
            {props.method === 'deposit' &&<input type="Amount:" id="amount-label"  placeholder="Enter Amount" />}
            <button>Submit</button>
            <button className="close-modal" onClick={props.toggleModal}>
              x
            </button>
          </div>
        </div>
      )}

       </>
  );
}
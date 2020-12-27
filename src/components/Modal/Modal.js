import React from "react";
import "./Modal.scss";
function Modal({ style, children }) {
  return (
    <div className="modal" style={style}>
      {children}
    </div>
  );
}
export default Modal;

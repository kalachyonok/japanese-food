import style from "./ModalWindow.module.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={style.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

export const ModalWindow = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

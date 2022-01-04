import React from "react";

import "./index.scss";

export default function Modal(params) {
  const { isShowModal, modalTitle, children } = params;
  console.log('Modal',isShowModal);
  return (
    <>
      {isShowModal ? (
        <div className="modal">
          <div className="inner">
            <div className="m-header">{modalTitle}</div>
            <div className="content-wrapper">
                {children}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

import React from "react";

import "./index.scss";

export default function Header(props) {
  const { openInput } = props;
  return (
    <div className="header">
      <h1>事件待办</h1>
      <span className="icon" onClick={openInput}>
        {/*  &#43; ==  + */}
        &#43;
      </span>
    </div>
  );
}

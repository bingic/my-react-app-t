import React, { useRef } from "react";
import "./index.scss";

export default function AddInput(params) {
  console.log("params", params);
  const { isInputShow,addItem } = params;

  const inputRef = useRef();
  const submitValue = (params) => {
    /* 获取输入的值 value */
    const inputValue = inputRef.current.value.trim();
    if (inputValue.length === 0) {
      return
    }

     /* 父子函数 addItem  添加输入的值 value */
    addItem(inputRef.current.value)
    // inputRef.current.value ==''
    console.log("inputValue", inputValue);


  };
  return (
    <>
      {isInputShow ? (
        <div className="input-wrapper">
          <input type="text" placeholder="请输入待办事件" ref={inputRef} />
          <button
            type="primary"
            className="btn btn-primary"
            onClick={submitValue}
          >
            增加
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

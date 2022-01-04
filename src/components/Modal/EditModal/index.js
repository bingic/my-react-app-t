import React, { useRef } from "react";
import Modal from "..";
import  formDataTime  from "../../../libs/utils";

import "./index.scss";

export default function EditModal(params) {
  const { isShowEditModal, data,submitEdit } = params;
  const inputRef = useRef();
  const checkRef = useRef();
  //const value = inputRef.current.value;

  const formatNewData = (params) => {
    const val = inputRef.current.value.trim();
    const valLen = val.length;

    if (valLen === 0) {
      // 长度等于0 把原来的值给放进去
      inputRef.current.value = data.content;
      return;
    }

    // 编辑后的新数据
    const newData = {
      id: new Date().getTime(),
      content: val,
      completed: checkRef.current.checked,
    };

    console.log('编辑后的新数据',newData);

    submitEdit(newData,data.id);


  };
  return (
    <Modal isShowModal={isShowEditModal} modalTitle="编辑事件">
      <p className="topic">时间：{formDataTime(data.id)}</p>
      <p className="topic">
        <textarea
          ref={inputRef}
          defaultValue={data.content}
          className="text-area"
        ></textarea>
      </p>

      <p className="topic">
        状态：
        <input
          type="checkbox"
          defaultChecked={data.completed ? true : false}
          ref={checkRef}
        ></input>
      </p>

      <button className="btn btn-primary confirm-btn" onClick={formatNewData}>
        提交
      </button>
    </Modal>
  );
}

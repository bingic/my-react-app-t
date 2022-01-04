import React from "react";
import Modal from "..";
import  formDataTime  from "../../../libs/utils";

import "./index.scss";

export default function CheckModal(params) {
  const { isShowCheckModal, data, closeModal } = params;
  console.log("CheckModal", isShowCheckModal);

  return (
    <Modal isShowModal={isShowCheckModal} modalTitle="查看事件">
      <p className="topic">时间：{formDataTime(data.id)}</p>
      <p className="topic">内容：{data.content}</p>
      <p className="topic">状态：{data.complete ? "完成" : "未完成"}</p>
      <button className="btn  btn-primary confirm-btn" onClick={closeModal}>
        确定
      </button>
    </Modal>
  );
}

// import React from 'react';

// import './index.scss';

// import Modal from '../';
// import { formatDateTime } from '../../../libs/utils';

// function CheckModal (props) {
//   const { isShowCheckModal, data, closeModal } = props;

//   return (
//     <Modal isShowModal={isShowCheckModal} modalTitle="查看事件">
//       <p className="topic">时间：{formatDateTime(data.id)}</p>
//       <p className="topic">内容：{ data.content }</p>
//       <p className="topic">状态：{ data.completed ? '已完成' : '未完成' }</p>
//       <button
//         className="btn btn-primary confirm-btn"
//         onClick={ closeModal }
//       >确定</button>
//     </Modal>
//   );
// }

// export default CheckModal;

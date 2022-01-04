import React from "react";
import "./index.scss";
export default function TodoItem(props) {
  const { data, openCheckModal,openEditModal } = props;
  return (
    <li className="todo-item">
      <div className="check-box">
        <input type="checkbox" checked={data.completed} />
      </div>
      <span
        className="content"
        style={{ textDecoration: data.completed ? "line-through" : "none" }}
      >
        {data.content}
      </span>
      <div className="btn-group">
        <botton
          className="btn btn-primary"
          onClick={() => {
            console.log('查看 data.id',data.id);
            openCheckModal(data.id);
          }}
        >
          查看
        </botton>
        <botton className="btn btn-warning" onClick={(params) => {
          openEditModal(data.id)
          
        }}>编辑</botton>
        <botton className="btn btn-danger">删除</botton>
      </div>
    </li>
  );
}

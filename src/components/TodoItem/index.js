import React from "react";
import "./index.scss";

export default function TodoItem(props) {
  const { data, openCheckModal, openEditModal, componentItem, removeItem } =
    props;

  return (
    <li className="todo-item">
      <div className="check-box">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={() => {
            componentItem(data.id);
          }}
        />
      </div>
      <span
        className="content"
        style={{ textDecoration: data.completed ? "line-through" : "none" }}
      >
        {data.content}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => {
            openCheckModal(data.id);
          }}
        >
          查看
        </button>
        <button
          className="btn btn-warning"
          onClick={(params) => {
            openEditModal(data.id);
          }}
        >
          编辑
        </button>
        <button
          className="btn btn-danger"
          onClick={(params) => {
            removeItem(data.id);
          }}
        >
          删除
        </button>
      </div>
    </li>
  );
}

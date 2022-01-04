import React from "react";

export default function Text(props) {
  console.log("props=>", props);
  const { title, changeTitle } = props;

  return (
    <>
      <h1>{title}</h1>
      <button
        type="primary"
        onClick={(params) => {
          changeTitle({title:'设置对象参数'})
        }}
      >
        更改
      </button>
    </>
  );
}

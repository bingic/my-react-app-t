import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import AddInput from "./components/AddInput";
import MyHeader from "./components/Header";
import CheckModal from "./components/Modal/CheckModal";
import EditModal from "./components/Modal/EditModal";
import TodoItem from "./components/TodoItem/index";

// import Text from './components/Text'
function App() {
  // const [titie, setTitie] = useState('标题测试')
  const [isInputShow, setInputShow] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [isShowCheckModal, setShowCheckModal] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [isShowEditModal, setShowEditModal] = useState(false);

  // 子组件传递来的传参数包含在匿名函数e里
  // const changeTitle = (e) => {
  //   console.log('匿名函数',e);
  //   setTitie(e.title)
  // }

  useEffect(() => {
    // 把数据todoList 用parse方法存入 localStorage
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]");
    setTodoList(todoData);
  }, []);

  // 从localStorage 用json方法解析 获得data
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoList));
    return () => {};
  }, [todoList]);

  // useCallback 返回一个被缓存的函数
  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    };

    //params默认接收 todoList
    setTodoList((todoList) => {
      return [...todoList, dataItem];
    });

    // console.log("todoList=>", todoList);
    setInputShow(false);
  }, []);

  const removeItem = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  }, []);

  const componentItem = useCallback((id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }, []);

  const openCheckModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id);
      setShowCheckModal(true);
    },
    [todoList]
  );

  const openEditModal = useCallback(
    (id) => {
      _setCurrentData(todoList, id);
      setShowEditModal(true);
    },
    [todoList]
  );

  function _setCurrentData(todoList, id) {
    setCurrentData(() => todoList.filter((item) => item.id === id)[0]);
  }

  const submitEdit = useCallback((newData, id) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          item = newData;
        }
        return item;
      })
    );
    setShowEditModal(false);
  }, []);

  /* 老师写法，切记 重点 ！！！setTodoList((todoList) => 后面跟return */
  // const submitEdit = useCallback((newData, id) => {
  //   setTodoList((todoList) =>
  //     todoList.map((item) => {
  //       if (item.id === id) {
  //         item = newData;
  //       }
  //       return item;
  //     })
  //   );
  //   setShowEditModal(false);
  // }, []);

  return (
    <div className="App">
      <CheckModal
        isShowCheckModal={isShowCheckModal}
        data={currentData}
        // 关闭CheckModal
        closeModal={() => {
          setShowCheckModal(false);
        }}
      />
      {/* <Text title={titie} changeTitle={changeTitle}/> */}

      <EditModal
        isShowEditModal={isShowEditModal}
        data={currentData}
        submitEdit={submitEdit}
      />
      <MyHeader
        //  将isInputShow设置为反之
        openInput={() => setInputShow(!isInputShow)}
      />

      <AddInput isInputShow={isInputShow} addItem={addItem} />

      <ul className="todo-list">
        {todoList.map((item, index) => {
          return (
            <>
              <TodoItem
                data={item}
                key={index}
                openCheckModal={openCheckModal}
                openEditModal={openEditModal}
                componentItem={componentItem}
                removeItem={removeItem}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

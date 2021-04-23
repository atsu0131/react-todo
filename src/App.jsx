import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "iii"]);
  const [completetodos, setCompleteTodos] = useState(["aaaa"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    alert(todoText);
  };

  return (
    <>
      <div>
        <input
          placeholder="TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="input-area">未完了</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>あああ</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}

          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {completetodos.map((todo) => {
            return (
              <div className="list-row">
                <li>あああ</li>
                <button>戻す</button>
              </div>
            );
          })}
          ;
        </ul>
      </div>
    </>
  );
};

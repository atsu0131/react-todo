import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODO" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="input-area">未完了</p>
        <ul>
          <div className="list-row">
            <li>あああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
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
          <li>あああ</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};

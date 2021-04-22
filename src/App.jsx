import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODO" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          <li>あああ</li>
          <button>完了</button>
          <button>削除</button>
          <li>あああ</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div>
        <p>完了</p>
        <ul>
          <li>あああ</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};

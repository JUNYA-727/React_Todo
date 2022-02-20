import React from "react";

export const Incomplete = (props) => {
  const { Todos, Complete, Delete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {Todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => Complete(index)}>完了</button>
              <button onClick={() => Delete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

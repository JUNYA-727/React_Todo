import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Incomplete } from "./components/IncompleteTodo";
import { Complete } from "./components/CompleteTodo";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [compleTodos, setcompleteTodos] = useState([]);
  const [todoText, settodoText] = useState("");
  const onChangetext = (event) => settodoText(event.target.value);
  const onClickadd = () => {
    if (todoText === "") {
      return;
    }
    //配列の最後に入力した値を追加する
    const newTodos = [...incompleteTodos, todoText];
    //更新
    setIncompleteTodos(newTodos);
    //inputの枠を元々の形に更新
    settodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickcomplete = (index) => {
    const newTodos = [...compleTodos, incompleteTodos[index]];
    setcompleteTodos(newTodos);
    const newTodos2 = [...incompleteTodos];
    newTodos2.splice(index, 1);
    setIncompleteTodos(newTodos2);
  };
  const onClickBack = (index) => {
    const completeTodos2 = [...compleTodos];
    const incompleteTodos2 = [...incompleteTodos, completeTodos2[index]];
    completeTodos2.splice(index, 1);
    setIncompleteTodos(incompleteTodos2);
    setcompleteTodos(completeTodos2);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangetext}
        onClick={onClickadd}
        disable={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは5個までです｡</p>
      )}
      <Incomplete
        Todos={incompleteTodos}
        Complete={onClickcomplete}
        Delete={onClickDelete}
      />
      <Complete complete={compleTodos} onClickBack={onClickBack} />
    </>
  );
};

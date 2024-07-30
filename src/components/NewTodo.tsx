import React from "react";
import {useTodoActions} from "../hooks/useTodoActions.ts";

const NewTodo = () => {
  console.log('new todo render');

  const {addTodo} = useTodoActions()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo({id: Date.now(), text: event.currentTarget.todo.value, completed: false});
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" name="todo" placeholder="New Todo"/>
    </form>
  );
}

export {NewTodo};

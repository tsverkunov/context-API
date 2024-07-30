import {Todo} from "../types/Todo.ts";
import {FC, memo} from "react";
import {useTodoActions} from "../hooks/useTodoActions.ts";

export const TodoItem: FC<Todo> = memo(({id, text, completed}) => {
  console.log('TodoItem render');

  const {toggleTodo, deleteTodo} = useTodoActions()

  return (
    <li key={id} style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>X</button>
    </li>
  );
});

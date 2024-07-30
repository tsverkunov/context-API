import {useTodo} from "../hooks/useTodo.ts";
import {TodoItem} from "./TodoItem.tsx";

function TodoList() {
  console.log('TodoList render');

  const {todos} = useTodo()
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo}/>
      ))}
    </ul>
  );
}

export {TodoList};
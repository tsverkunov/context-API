import {useTodo} from "../hooks/useTodo.ts";

const TodoInfo = () => {
  console.log('TodoInfo render');

  const {totalTodos} = useTodo()

  return (
    <div>
      Total Todo: {totalTodos}
    </div>
  );
};

export {TodoInfo};
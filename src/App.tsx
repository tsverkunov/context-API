import './App.css'
import {TodoInfo} from "./components/TodoInfo.tsx";
import {NewTodo} from "./components/NewTodo.tsx";
import {TodoProvider} from "./context/TodoContext.tsx";
import {TodoList} from "./components/TodoList.tsx";

function App() {
  console.log('App rendered');

  return (
    <>
      <h1>Todo List</h1>
      <br/>
      <TodoProvider>
        <div className="conteiner">
          <NewTodo/>
          <TodoList/>
          <TodoInfo/>
        </div>
      </TodoProvider>
    </>
  )
}

export default App

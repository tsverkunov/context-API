import {createContext, FC, PropsWithChildren, useCallback, useMemo, useState} from "react";
import {Todo} from "../types/Todo.ts";

type TodoContextProps = {
  todos: Todo[]
  totalTodos: number

}
type TodoActionsProps = {
  addTodo: (text: Todo) => void
  deleteTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

export const TodoContext = createContext<TodoContextProps | null>(null)
export const TodoActionsContext = createContext<TodoActionsProps | null>(null)

export const TodoProvider: FC<PropsWithChildren> = ({children}) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const totalTodos = todos.length;

  const addTodo = useCallback((todo: Todo) => {
    setTodos((todos) => [...todos, todo])
  }, [])

  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }, [])

  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) => (
      todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    )}, [])

  const value = useMemo(() => (
    {todos, totalTodos}
  ), [todos, totalTodos])

  const actions = useMemo(() => (
    {addTodo, deleteTodo, toggleTodo}
    ), [addTodo, deleteTodo, toggleTodo]
  )

  return (
    <TodoContext.Provider value={value}>
      <TodoActionsContext.Provider value={actions}>
      {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  )
}
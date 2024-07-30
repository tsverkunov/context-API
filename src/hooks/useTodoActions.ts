import {useContext} from 'react';
import {TodoActionsContext} from "../context/TodoContext.tsx";

export const useTodoActions = () => {
  const todoContext = useContext(TodoActionsContext);

  if (!todoContext) {
    throw new Error('useTodoActions must be used within a TodoActionsProvider')
  }
  return todoContext
};

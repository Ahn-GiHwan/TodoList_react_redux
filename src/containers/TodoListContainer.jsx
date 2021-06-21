import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { checkTodo, deleteTodo, getTodos } from "../redux/modules/todolist";

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todolist.todos);

  const dispatch = useDispatch();

  const onGetTodos = useCallback(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const onDeleteTodo = (id) => {
    const result = window.confirm("정말 삭제하시겠습니까?");
    if (result) {
      dispatch(deleteTodo(id));
    } else {
      return false;
    }
  };

  const onCheck = (id) => {
    dispatch(checkTodo(id));
  };

  return (
    <TodoList
      todos={todos}
      onGetTodos={onGetTodos}
      onDeleteTodo={onDeleteTodo}
      onCheck={onCheck}
    />
  );
}

import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import {
  checkTodo,
  deleteTodo,
  getTodos,
  modifyTodos,
  setDetail,
} from "../redux/modules/todolist";
import { closeModal, openModal } from "../redux/modules/detail";
import { useEffect } from "react";

export default function TodoListContainer() {
  const todos = useSelector((state) => state.todolist.todos);
  const isModal = useSelector((state) => state.detail.isModal);
  const focus = useSelector((state) => state.todolist.focus);

  const [value, setValue] = useState();

  const resetValue = useCallback(() => {
    setValue(focus.text);
  }, [focus.text]);

  useEffect(() => {
    resetValue();
  }, [resetValue]);

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

  const showModal = (id) => {
    dispatch(openModal());
    dispatch(setDetail(id));
  };

  const handleOk = () => {
    if (focus.text === value) {
      alert("수정할 내용이 없습니다.");
      return false;
    }
    const result = window.confirm(
      `" ${focus.text} "-> " ${value} "로 수정 맞습니까?`
    );
    if (result) {
      dispatch(closeModal());
      dispatch(modifyTodos(value));
    } else {
      return false;
    }
  };

  const handleCancel = useCallback(() => {
    dispatch(closeModal());
    resetValue();
  }, [dispatch, resetValue]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <TodoList
      todos={todos}
      isModal={isModal}
      value={value}
      onGetTodos={onGetTodos}
      onDeleteTodo={onDeleteTodo}
      onCheck={onCheck}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChange={onChange}
    />
  );
}

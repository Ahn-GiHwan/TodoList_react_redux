import { useRef } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../components/InputForm";
import { addTodo } from "../redux/modules/todolist";

export default function InputFormContainer() {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const onAddTodo = useCallback(() => {
    let value = inputRef.current.value;
    if (value === "") {
      alert("내용을 입력해 주세요");
      return false;
    }
    dispatch(addTodo(value));

    inputRef.current.value = "";
  }, [dispatch]);

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onAddTodo();
    }
  };

  return (
    <InputForm onAddTodo={onAddTodo} inputRef={inputRef} onEnter={onEnter} />
  );
}

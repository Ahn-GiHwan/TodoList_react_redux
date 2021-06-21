import { useEffect } from "react";
import { Modal, Button, Input } from "antd";

export default function TodoList({
  todos,
  isModal,
  value,
  onGetTodos,
  onDeleteTodo,
  onCheck,
  showModal,
  handleOk,
  handleCancel,
  onChange,
}) {
  useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  const stylesDiv = {
    display: "flex",
  };

  const stylesFont = {
    color: "gray",
  };

  return (
    <>
      <div style={stylesDiv}>
        <div className="container-sm">
          <h1 className="display-6">No</h1>
          <ol className="list-group list-group-numbered">
            {todos.length > 0 &&
              todos
                .filter((v) => !v.state)
                .map((todo) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-start"
                      key={todo.id}
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{todo.text}</div>
                      </div>
                      <span className="badge rounded-pill">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={() => onCheck(todo.id)}
                          >
                            Check
                          </button>
                          <Button
                            type="primary"
                            onClick={() => showModal(todo.id)}
                          >
                            Modify
                          </Button>
                          <Modal
                            title="Todo Change"
                            visible={isModal}
                            onOk={handleOk}
                            onCancel={handleCancel}
                          >
                            <Input
                              value={value}
                              onChange={(e) => onChange(e)}
                            />
                          </Modal>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => onDeleteTodo(todo.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </span>
                    </li>
                  );
                })}
          </ol>
        </div>
        <div className="container-sm">
          <h1 className="display-6">Yes</h1>
          <ol className="list-group list-group-numbered">
            {todos.length > 0 &&
              todos
                .filter((v) => v.state)
                .map((todo) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-start"
                      key={todo.id}
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          <strike style={stylesFont}>{todo.text}</strike>
                        </div>
                      </div>
                      <span className="badge rounded-pill">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={() => onCheck(todo.id)}
                          >
                            unCheck
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => onDeleteTodo(todo.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </span>
                    </li>
                  );
                })}
          </ol>
        </div>
      </div>
    </>
  );
}

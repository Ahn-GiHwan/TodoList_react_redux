import { useEffect } from "react";

export default function TodoList({ todos, onGetTodos, onDeleteTodo, onCheck }) {
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
                          {/* <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            // onClick={() => detail(todo.id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Change
                          </button> */}
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

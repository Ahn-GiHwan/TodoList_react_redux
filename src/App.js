import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import InputForm from "./page/InputForm";
import TodoList from "./page/TodoList";
import Nav from "./page/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="container-sm">
        <InputForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;

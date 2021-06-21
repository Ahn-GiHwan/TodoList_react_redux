export default function InputForm({ onAddTodo, inputRef, onEnter }) {
  const styles = {
    border: "1px solid #eee",
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "3% auto",
  };
  return (
    <div className="container-sm" style={styles}>
      <div>What are you doing? </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          onKeyPress={onEnter}
          ref={inputRef}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={onAddTodo}>
        Submit
      </button>
    </div>
  );
}

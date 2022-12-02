import "./App.css";
import { useState } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

function App() {
  const [task, setTask] = useState({ id: uniqid(), text: "" });
  const [tasks, setTasks] = useState([]);
  function handleChange(e) {
    if (e.target.value === "") return;
    setTask({ id: task.id, text: e.target.value });
  }
  function handleSubmit(e) {
    if (e.target[0].value === "") return;
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask({ id: uniqid(), text: "" });
    e.target[0].value = "";
  }
  function handleResubmit(id, value) {
    let newTasks = [...tasks];
    newTasks.find((task) => task.id === id).text = value;
    setTasks(newTasks);
  }

  function handleDelete(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }
  return (
    <div className="App">
      <Overview
        tasks={tasks}
        handleDelete={handleDelete}
        handleResubmit={handleResubmit}
      />
      <form onSubmit={handleSubmit}>
        <label>Task Name:</label>
        <input type="text" onChange={handleChange} />
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default App;

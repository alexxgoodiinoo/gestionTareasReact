import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
}

export default TaskForm;

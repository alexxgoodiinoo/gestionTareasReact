import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksGuardadas = localStorage.getItem("tareas");
    return tasksGuardadas ? JSON.parse(tasksGuardadas) : [];
  });

  const [filter, setFilter] = useState(() => {
    const storedFilter = localStorage.getItem("filtro");
    return storedFilter ? JSON.parse(storedFilter) : [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filtro", filter);
  }, [filter]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const editTask = (index, text) => {
    setTasks(tasks.map((task, i) => i == index ? {text, completed:task.completed} : task));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filtrarTask = (filtro) => {
    console.log(filtro);
    setFilter(filtro);
  }

  return (
    <div className="app">
      <h1>Gestión de Tareas - 2º DAW</h1>
      <TaskFilter onAddFilter={filtrarTask}/>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
        filtro={filter}
      />
    </div>
  );
}

export default App;

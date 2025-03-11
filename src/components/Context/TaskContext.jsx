import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext(); {/* Creamos un context */}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    {/* Comprobamos si el usuario esta logueado o no y si es asi, recoge todas las tareas del json para posteriormente guardarlas en la variable Task */}
    if (localStorage.getItem("logueado") === "true") {
      fetch("/tareas.json")
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
          console.log(data);
        })
        .catch(() => console.log("No se pueden cargar las tareas"));
    }
  }, []);

  useEffect(() => {
    fetch("/tareas.json", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tasks),
    })
    .then(response => {
        if(!response.ok){
            throw new Error('No se han podido cargar las tareas');
        }
        return response.json();
    })
    .catch(error => console.error(error));
  }, [tasks]);

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

  return (
    <TaskContext.Provider value={{tasks, addTask, editTask, deleteTask, toggleTask }}>
      {/* Utilizamos las funciones para el hijo */}
        {children}
    </TaskContext.Provider>
  )
}

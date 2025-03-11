import { useContext, useEffect, useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import "./App.css";
import { TaskProvider } from "./components/Context/TaskContext";
import { AuthContext } from "./components/Context/AuthContext";
import Login from "./components/Login/Login";

function App() {
  const { logout, logueado } = useContext(AuthContext); {/* Cogemos las funciones o variables que tenemos guardadas en el AuthContext */}

  const [filter, setFilter] = useState(() => {
    const storedFilter = localStorage.getItem("filtro");
    return storedFilter ? storedFilter : '';
  }); {/* Nos creamos en el localStorage un filtrado */}

  useEffect(() => {
    localStorage.setItem("filtro", filter);
  }, [filter]);

  const filtrarTask = (filtro) => {
    setFilter(filtro);
  };

  return (
    <TaskProvider> 
      {/* Añadimos todo dentro del TaskProvider para poder usar las funciones que tenemos, como el añadir una tarea */}
      <div className="app">
        <h1>Gestor de Tareas</h1>
        {logueado ? (
          <>
            <TaskFilter onAddFilter={filtrarTask} />
            <TaskForm filter={filter} />
            <TaskList filter={filter} />
            <button onClick={logout}>Cerrar Sesion</button>
          </>
        ) : (
          <Login />
        )}
      </div>
    </TaskProvider>
  );
}

export default App;

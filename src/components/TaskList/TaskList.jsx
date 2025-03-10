import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList({ filtro = null }) {
  const {tasks, editTask, deleteTask, toggleTask} = useContext(TaskContext)
  let tareaFiltrada = tasks;
  if(filtro){
    const filtroActual = filtro === 'true' ? true:false;
    tareaFiltrada = tasks.filter((task) => task.completed === filtroActual);
  }
  const botonEditar = async(index, texto) => {
    const {value: newContent} = await Swal.fire({
      title: "Edita la tarea",
      input: 'text',
      inputLabel: "Contenido",
      inputValue: texto
    });
    if(newContent){
      editTask(index, newContent);
    }
  }
  return (
    <ul>
      {tareaFiltrada.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button class="editar" onClick={() => botonEditar(index, task.text)}>Editar</button>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
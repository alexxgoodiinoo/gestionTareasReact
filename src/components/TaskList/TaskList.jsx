function TaskList({ tasks, onEditTask, onDeleteTask, onToggleTask, filtro = null }) {
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
      console.log(newContent);
      onEditTask(index, newContent);
    }
  }
  return (
    <ul>
      {tareaFiltrada.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
          />
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>
          <button class="editar" onClick={() => botonEditar(index, task.text)}>Editar</button>
          <button onClick={() => onDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
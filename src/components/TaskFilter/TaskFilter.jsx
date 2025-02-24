function TaskFilter({filtro, onAddFilter}){
    return <div>
            <label htmlFor="filtro">Filtro</label>
            <select name="filtro" id="filtro" onChange={(e) => onAddFilter(e.target.value)} value={filtro}>
                <option value="">Todas</option>
                <option value="true">Completadas</option>
                <option value="false">No completadas</option>
            </select>
        </div>
}

export default TaskFilter;
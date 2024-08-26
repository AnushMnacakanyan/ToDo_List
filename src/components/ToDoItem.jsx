export const ToDoItem = ({ item, changeDone, deleteToDo }) => {
    return <div>
        <div className="todo_item">
            <div>
                <h4 style={item.done ? { textDecoration: 'line-through', color: "#363535" } : { textDecoration: 'none' }}>name:{item.name}</h4>
                <p style={item.done ? { textDecoration: 'line-through', color: "#363535" } : { textDecoration: 'none' }}>description:{item.description}</p>
            </div>
            <div>
                <button className="btn btn-danger" onClick={() => changeDone(item)}>Complete</button>
                <button className="btn btn-success" onChange={() => deleteToDo(item.id)}>Delete</button>
            </div>
        </div>
    </div>
}

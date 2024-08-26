import { ToDoItem } from "./ToDoItem"

export const List = ({ toDo ,changeDone,deleteToDo}) => {
    return <div>
        <h3>ToDo List</h3>
        {
            toDo.map(item => <ToDoItem key={item.id} item={item} deleteToDo={deleteToDo} changeDone={changeDone} />)
        }
    </div>
}
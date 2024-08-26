import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"

export const ToDoList = () => {

    const [toDo, setToDo] = useState([
        { id: 1, name: "Task1", description: "This is my task one", done: false },
        { id: 2, name: "Task2", description: "This is my task two", done: false },
        { id: 3, name: "Task3", description: "This is my task three", done: false },
        { id: 4, name: "Task4", description: "This is my task four", done: false },
        { id: 5, name: "Task5", description: "This is my task five", done: false },

    ])

    const deleteToDo = (id) => {
        setToDo([...toDo.filter(elm => elm.id != id)])
    }

    const addToDo = (elm) => {
        setToDo([...toDo, { ...elm, id: Date.now() }])
    }

    const changeDone = (data) => {
        data.done = !data.done
        setToDo([...toDo])
      }

    return <div className="toDoList">
        <List toDo={toDo} changeDone={changeDone} deleteToDo={deleteToDo} />
        <AddToDo addToDo={addToDo} />
    </div>
}

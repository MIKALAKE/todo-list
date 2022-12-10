import React, { useState } from "react"
import { AiFillEdit, AiOutlineClose } from "react-icons/ai"
import TodoForm from "./TodoForm"

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  })

  const sumbmitUpdate = (value) => {
    editTodo(edit.id, value)
    setEdit({ id: null, value: "" })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={sumbmitUpdate} />
  }
  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineClose
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <AiFillEdit
          onClick={() => setEdit({ id: todo.id, vlaue: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

export default Todo

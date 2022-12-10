import React, { useState, useEffect, useRef } from "react"

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "")

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    })

    setInput("")
  }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        ></input>
        {props.edit ? (
          <button className="todo-button">Update</button>
        ) : (
          <button className="todo-button">Add Task</button>
        )}
      </form>
    </div>
  )
}

export default TodoForm

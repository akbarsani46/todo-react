import HeaderTodo from "./elements/HeaderTodo"
import InputTodo from "./elements/InputTodo"
import TodoItem from "./components/TodoItem"

import "./App.css"
import { useState } from "react"
import { useEffect } from "react"

const getSavedTodo = () => {
    const todos = localStorage.getItem("todos")

    return todos !== null ? JSON.parse(todos) : []
}

const App = () => {
    const savedTodo = getSavedTodo()

    const [todoValue, setTodoValue] = useState("")
    const [todos, setTodos] = useState(savedTodo)

    const handleTodoValue = (event) => {
        setTodoValue(event.target.value)
    }

    const handleTodo = () => {
        if (todoValue === "") return console.error("Todo Cannot Be Empty")

        const todoItem = {
            id: todos.length + 1,
            content: todoValue,
            isDone: false,
        }

        setTodos([...todos, todoItem])
        setTodoValue((prevTodo) => (prevTodo = ""))
    }

    const handleRemove = (event) => {
        const filteredTodo = todos.filter(
            (todo) => todo.id.toString() !== event.target.id
        )
        setTodos(filteredTodo)
    }

    const handleDone = (event) => {
        const changeStatus = todos.map((todo) => {
            if (event.target.id === todo.id.toString()) {
                return {
                    id: todo.id,
                    content: todo.content,
                    isDone: true,
                }
            }

            return todo
        })

        setTodos(changeStatus)
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <div className="app">
            <HeaderTodo />

            <InputTodo
                handleTodo={handleTodo}
                handleTodoValue={handleTodoValue}
                todoValue={todoValue}
            />

            <div className="todo--item--container">
                {todos.map(({ content, id, isDone }) => [
                    <TodoItem
                        content={content}
                        handleRemove={handleRemove}
                        handleDone={handleDone}
                        key={id}
                        id={id}
                        isDone={isDone}
                    />,
                ])}
            </div>
        </div>
    )
}

export default App

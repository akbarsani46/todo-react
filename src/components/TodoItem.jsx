import { useEffect } from "react"
import Button from "./Button"

const TodoItem = ({ content, id, isDone, handleDone, handleRemove }) => {
    useEffect(() => {
        console.log("change")
    }, [isDone])

    return (
        <div className="todo--item">
            <p
                className="todo--text"
                style={{
                    textDecoration: isDone ? "line-through" : "none",
                    opacity: isDone ? 0.5 : 1,
                    pointerEvents: isDone ? "none" : "all",
                }}
            >
                {content}
            </p>

            <div className="button--group">
                <Button
                    style={{
                        opacity: isDone ? 0.5 : 1,
                        pointerEvents: isDone ? "none" : "all",
                    }}
                    content="&#10003;"
                    onClick={handleDone}
                    id={id}
                />
                <Button content="X" onClick={handleRemove} id={id} />
            </div>
        </div>
    )
}

export default TodoItem

import Input from "../components/Input"
import Button from "../components/Button"

const InputTodo = ({ handleTodoValue, handleTodo, todoValue }) => {
    return (
        <div className="input--todo">
            <Input
                onChange={handleTodoValue}
                placeholder="Enter your activity"
                value={todoValue}
            />

            <Button content="+" onClick={handleTodo} />
        </div>
    )
}

export default InputTodo

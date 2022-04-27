import Input from "../components/Input"
import Button from "../components/Button"

const InputTodo = ({ handleTodoValue, handleTodo, todoValue }) => {
    return (
        <form
            className="input--todo"
            onSubmit={(event) => event.preventDefault()}
        >
            <Input
                onChange={handleTodoValue}
                placeholder="Enter your activity"
                value={todoValue}
            />

            <Button content="+" onClick={handleTodo} onSubmit={handleTodo} />
        </form>
    )
}

export default InputTodo

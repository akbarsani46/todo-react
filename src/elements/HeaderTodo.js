import logo from "../logo.svg"

const HeaderTodo = () => {
    return (
        <div className="header--todo">
            <img className="header--todo--logo" src={logo} alt="" />
            <h1 className="header--todo-title">React Todo</h1>
        </div>
    )
}

export default HeaderTodo

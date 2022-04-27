const Button = ({ content, style, onClick, id }, prop) => {
    return (
        <button
            style={style}
            id={id}
            onClick={onClick}
            onSubmit={prop.onSubmit}
        >
            {content}
        </button>
    )
}

export default Button

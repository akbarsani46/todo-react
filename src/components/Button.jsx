const Button = ({ content, style, onClick, id }) => {
    return (
        <button style={style} id={id} onClick={onClick}>
            {content}
        </button>
    )
}

export default Button

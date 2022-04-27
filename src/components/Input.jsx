const Input = ({ inputType, placeholder, value, onChange }) => {
    return (
        <input
            onChange={onChange}
            value={value}
            type={inputType}
            placeholder={placeholder}
        />
    )
}

export default Input

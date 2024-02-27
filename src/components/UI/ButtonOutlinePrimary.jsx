
const ButtonOutlinePrimary = (props, chidlren) => {
    const className = props.className + 'text-blue-400 hover:bg-gradient-to-r hover:from-blue-400 border rounded-md';
    return (
        <button type={props.type} className={className} onClick={props.handleClick}>
            {props.children ? props.children : 'Button'}
        </button>
    )
}

export default ButtonOutlinePrimary;
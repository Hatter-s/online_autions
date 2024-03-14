
const ButtonPrimary = (props) => {
    const className = props.className + ' bg-gradient-to-r from-blue-400 hover:opacity-90 p-2 rounded-md border';
    return (
        <button type={props.type} className={className} onClick={props.handleClick} disabled={props.disabled}>
            {props.children ? props.children : 'Button'}
        </button>
    )
}

export default ButtonPrimary;
import './Button.css'

const Button = ({text, onClick, ...props}) => {

    
    return (
        <button type={props.type} onClick={(event) => {
            event.preventDefault()

           onClick()

        }}>{text}</button>
    )
}

export default Button
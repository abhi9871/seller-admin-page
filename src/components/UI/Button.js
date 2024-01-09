import './Button.css';

const Button = (props) => {
    const {type, text} = props;
    const classes = 'button__actions ' + props.className;
    return (
        <div className={classes}>
          <button type={type}>{text}</button>
        </div>
    )
}

export default Button;
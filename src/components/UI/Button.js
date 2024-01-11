import { useContext } from "react";
import ProductContext from "../../store/product-context";
import './Button.css';

const Button = (props) => {
  const productCtx = useContext(ProductContext);

  const {type, text, id } = props;

    const deleteHandler = () => {
    if(text === 'Delete Product'){
      productCtx.onDeleteProduct(id);
    }
  }

    const classes = (props.className) ? 'button__actions ' + props.className : 'button__actions' ;
    return (
        <div className={classes}>
          <button type={type} onClick={deleteHandler}>{text}</button>
        </div>
    )
}

export default Button;
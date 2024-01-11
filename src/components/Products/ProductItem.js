import Button from "../UI/Button";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { productItems } = props;
  
  return (
    <ul>
      {productItems.map((product) => (
        <li className="product-list" key={product.productId}>
          {product.category} - {product.productName} - ${product.sellingPrice}
          <Button
            className="delete-product__action"
            type="button"
            text="Delete Product"
            id={product.productId}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductItem;

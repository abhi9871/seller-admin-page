import Button from "../UI/Button";

const ProductItem = (props) => {
    const { productItems } = props;
    return (
        <ul>
          {productItems.map((product) => (
            <li key={product.productId}>
              {product.category} - {product.productName} - $
              {product.sellingPrice}
              <Button className='delete-product__action' type='button' text='Delete Product' />
            </li>
          ))}
        </ul>
    )
}

export default ProductItem;
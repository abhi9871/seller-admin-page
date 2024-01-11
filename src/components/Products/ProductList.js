import {useContext} from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../store/product-context';
import "./ProductList.css";

const ProductList = () => {
  const productCtx = useContext(ProductContext);

  //Separate products based on their categories
  const electronicItems = productCtx.products.filter(
    (product) => product.category === "Electronics"
  );

  const foodItems = productCtx.products.filter((product) => product.category === "Food");

  const skincareItems = productCtx.products.filter(
    (product) => product.category === "Skincare"
  );

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="category">
        <h3>Electronic Items</h3>
        <ProductItem productItems = {electronicItems} onDeleteProduct={productCtx.onDeleteProduct} />
      </div>
      <div className="category">
        <h3>Food Items</h3>
        <ProductItem productItems = {foodItems} onDeleteProduct={productCtx.onDeleteProduct} />
      </div>
      <div className="category">
        <h3>Skincare Items</h3>
        <ProductItem productItems = {skincareItems} onDeleteProduct={productCtx.onDeleteProduct} />
      </div>
    </div>
  );
};

export default ProductList;

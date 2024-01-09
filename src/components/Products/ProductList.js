import ProductItem from './ProductItem';
import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  //Separate products based on their categories
  const electronicItems = products.filter(
    (product) => product.category === "Electronics"
  );

  const foodItems = products.filter((product) => product.category === "Food");

  const skincareItems = products.filter(
    (product) => product.category === "Skincare"
  );

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="category">
        <h3>Electronic Items</h3>
        <ProductItem productItems = {electronicItems} />
      </div>
      <div className="category">
        <h3>Food Items</h3>
        <ProductItem productItems = {foodItems} />
      </div>
      <div className="category">
        <h3>Skincare Items</h3>
        <ProductItem productItems = {skincareItems} />
      </div>
    </div>
  );
};

export default ProductList;

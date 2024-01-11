import { useState, useContext } from 'react';
import ProductContext from '../../store/product-context';
import Button from '../UI/Button';
import "./AdminPage.css";

const AdminPage = () => {

  const productCtx = useContext(ProductContext);

  const [enteredProductId, setProductId] = useState('');
  const [enteredSellingPrice, setSellingPrice] = useState('');
  const [enteredProductName, setProductName] = useState('');
  const [enteredCategory, setCategory] = useState('');

  const productIdHandler = (event) => {
      setProductId(event.target.value);
  }

  const sellingPriceHandler = (event) => {
      setSellingPrice(event.target.value);
  }

  const productNameHandler = (event) => {
      setProductName(event.target.value);
  }

  const categoryHandler = (event) => {
      setCategory(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const productData = {
      productId: +enteredProductId,
      sellingPrice: +enteredSellingPrice,
      productName: enteredProductName,
      category: enteredCategory
    }
    productCtx.onAddProduct(productData);
    setProductId('');
    setSellingPrice('');
    setProductName('');
    setCategory('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-product__controls">
        <div className="new-product__control">
          <label htmlFor="product-id">Product ID:</label>
          <input type="number" id="product-id" value={enteredProductId} onChange={productIdHandler} />
        </div>
        <div className="new-product__control">
          <label htmlFor="selling-price">Selling Price:</label>
          <input type="number" id="selling-price" value={enteredSellingPrice} onChange={sellingPriceHandler} />
        </div>
        <div className="new-product__control">
          <label htmlFor="product-name">Product Name:</label>
          <input type="text" id="product-name" value={enteredProductName} onChange={productNameHandler} />
        </div>
        <div className="new-product__control">
          <label htmlFor="category">Choose a category:</label>
          <select value={enteredCategory} onChange={categoryHandler}>
            <option>Choose a category...</option>
            <option value='Electronics'>Electronics</option>
            <option value='Food'>Food</option>
            <option value='Skincare'>Skincare</option>
          </select>
        </div>
        <Button type='submit' text='Add Product' />
      </div>
    </form>
    
  );
};

export default AdminPage;

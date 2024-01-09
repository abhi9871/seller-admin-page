import { useState } from 'react';
import AdminPage from './components/Admin/AdminPage';
import ProductList from './components/Products/ProductList';
import './App.css';

function App() {
  const [productData, setProductData] = useState([]);

  const onAddProductHandler = (product) => {
    setProductData((prevProducts) => {
        return ([...prevProducts, product]);
    });
  };

  return (
    <div className="App">
      <AdminPage onAddProduct={onAddProductHandler} />
      <ProductList products={productData} />
    </div>
  );
}

export default App;

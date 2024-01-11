import React from 'react';
import AdminPage from './components/Admin/AdminPage';
import ProductList from './components/Products/ProductList';
import './App.css';

function App() {
  return (
    <React.Fragment>
       <AdminPage />
      <ProductList />
    </React.Fragment>
  );
}

export default App;

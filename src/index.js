import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductContextProvider } from './store/product-context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductContextProvider>
    <App />
</ProductContextProvider>);
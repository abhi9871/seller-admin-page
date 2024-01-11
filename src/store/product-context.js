import React, { useState } from "react";

const ProductContext = React.createContext({
    products: [],
  onAddProduct: () => {},
  onDeleteProduct: () => {},
});

export const ProductContextProvider = (props) => {
  const [productData, setProductData] = useState([]);

  const onAddProductHandler = (product) => {
    console.log(product)
    localStorage.setItem(product.productId, JSON.stringify(product));
    setProductData((prevProducts) => {
      return [...prevProducts, product];
    });
  };

  const onDeleteProductHandler = (productId) => {
    localStorage.removeItem(productId.toString());
    setProductData((prevProducts) =>
      prevProducts.filter((product) => product.productId !== productId)
    );
  };

  console.log(onAddProductHandler)
  return (
    <ProductContext.Provider
      value={{
        products: productData,
        onAddProduct: onAddProductHandler,
        onDeleteProduct: onDeleteProductHandler,
      }}
    >
        {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

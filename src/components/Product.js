import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.products.name}</h2>
      <div>
        <img width="200" height="200" src={product.products.imageUrl} />
      </div>
      <p>Fiyat: {product.products.price} $</p>
      <p>Oran: {product.products.rate} %</p>
    </div>
  );
};

export default Product;

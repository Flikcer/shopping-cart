import React from "react";
import "./products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((product) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div>
            <h3 className="product-name">{product.name}</h3>
          </div>
          <div className="product-price">${product.price}</div>

          <div>
            <button
              className="product-add-button"
              onClick={() => {
                handleAddProduct(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

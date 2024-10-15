import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContextDetails } from '../../Context';
import './Details.css';

function ProductDetails() {
  const { id } = useParams();
  const { product } = useContext(ContextDetails);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (product.length > 0) {
      const foundProduct = product.find(item => item.id.toString() === id);
      if (foundProduct) {
        setSelectedProduct(foundProduct);
      } else {
        navigate('/'); // Redirect if product not found
      }
    }
  }, [id, product, navigate]);

  if (product.length === 0) {
    return <div>Loading product details...</div>;
  }

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1 className="title">Product Details</h1>
      <div className="product-container">
        <div className="product-leftside">
          <h2>{selectedProduct.title}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
        <div className="product-rightside">
          <div className="accordion">
            <div className="accordion-header" onClick={toggleOpen}>
              <p>Description</p>
              <span>{isOpen ? '-' : '+'}</span>
            </div>
          </div>
          {isOpen && (
            <div className="accordion-content">
              <p>{selectedProduct.description}</p>
            </div>
          )}
          <p>Price: ${selectedProduct.price}</p>
          <div className="btn-boxs">
            <button id="btn-1">Add to Cart</button>
            <button id="btn-2">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

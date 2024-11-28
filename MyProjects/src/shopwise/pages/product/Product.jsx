import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Context/Context";
import "./index.css";

function Product() {
  const { products } = useContext(productContext);
  const [filterData, setFilterData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setFilterData(products);
  }, [products]);

  const uniqueCategory = [...new Set(products.map((item) => item.category))]; // done here

  const handleCategoryChange = (category) => {
    const newSelectedCategory = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newSelectedCategory);

    if (newSelectedCategory.length === 0) {
      setFilterData(products);
    } else {
      setFilterData(
        products.filter((product) =>
          newSelectedCategory.includes(product.category)
        )
      );
    }
  };

  return (
    <div className="product-container">
      <div className="left-side">
        <h2>Filtered List</h2>
        {uniqueCategory.map((category, idx) => (
          <div className="left-card" key={idx}>
            <span>
              <input
                type="checkbox"
                value={category}
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategories.includes(category)}
              />
              {category}
            </span>
          </div>
        ))}
      </div>

      <div className="right-side">
        {filterData.map((prod, idx) => (
          <div key={idx} className="card-items">
            <img src={prod.image} alt="" width={300} />
            <h3>{prod.title}</h3>
            <p>$:{prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

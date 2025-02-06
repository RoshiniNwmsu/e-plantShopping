import React, { useState } from "react";
import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice"; // Import Redux action
import CartItem from "./CartItem";

function ProductList() {
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const dispatch = useDispatch(); // Redux dispatch

  const plantsArray = [
    // Plant categories and details (as provided)
    {
      category: "Air Purifying Plants",
      plants: [
        {
          id: 1,
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: 15,
        },
        {
          id: 2,
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: 12,
        },
      ],
    },
    // Other categories ...
  ];

  const handleAddToCart = (plant) => {
    // Dispatch the addItem action with plant details
    dispatch(addItem(plant));
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar" style={{ backgroundColor: "#4CAF50", padding: "15px", display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ color: "white" }}>Paradise Nursery</h3>
        <button
          style={{
            color: "white",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => setShowCart(true)}
        >
          Cart
        </button>
      </div>

      {/* Product Grid or Cart */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category) => (
            <div key={category.category} className="category">
              <h2>{category.category}</h2>
              <div className="plants">
                {category.plants.map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>${plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
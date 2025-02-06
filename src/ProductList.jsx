import React, { useState } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

function ProductList() {
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const plantsArray = [
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
    {
      category: "Medicinal Plants",
      plants: [
        {
          id: 3,
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Known for its soothing gel for burns and wounds.",
          cost: 10,
        },
        {
          id: 4,
          name: "Peppermint",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description: "Helps with digestion and relieves headaches.",
          cost: 8,
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          id: 5,
          name: "Lavender",
          image: "https://cdn.pixabay.com/photo/2018/07/27/01/29/lavender-3560565_1280.jpg",
          description: "Calming aroma, used in essential oils.",
          cost: 20,
        },
        {
          id: 6,
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2021/09/28/12/38/rosemary-6661004_1280.jpg",
          description: "Aromatic herb used in cooking and aromatherapy.",
          cost: 18,
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Add plant to the cart
  };

  const handleContinueShopping = () => {
    setShowCart(false); // Close the cart view
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className="navbar"
        style={{
          backgroundColor: "#4CAF50",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
          Cart ({totalItems})
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
                    <button onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
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
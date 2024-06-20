/* eslint-disable react/jsx-key */
import React from "react";

const Menu = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>Authentic Italian Cuisin. 6 creative dishes to choose from. All from our store
        oven, all organic, all delicious.
      </p>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={`..\\..\\${pizza.photoName}`} alt={pizza.name} />
            <div>
              <h3 key={1}>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

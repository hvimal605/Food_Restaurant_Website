// App.jsx

import React from 'react';
import './BestSells.css'; // Import your CSS file for styling

const BestSells = () => {
  // Best selling dishes data
  const bestSellers = [
    { name: 'Dish 1', description: 'Description of Dish 1', price: '$10' },
    { name: 'Dish 2', description: 'Description of Dish 2', price: '$12' },
    { name: 'Dish 3', description: 'Description of Dish 3', price: '$15' },
    // Add more best-selling dishes here
  ];

  return (
    <>
    <div className="App">
      <header>
        <h1>Welcome to Harshmeal</h1>
      </header>
      <main>
        <section id="best-sellers">
          <h2>Best Sellers</h2>
          <div className="best-sellers-list">
            {bestSellers.map((dish, index) => (
              <div className={`dish dish-${index}`} key={index}>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <p>Price: {dish.price}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Add more sections/components for other content */}
      </main>
      <footer>
        <p>&copy; 2024 Harshmeal. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default BestSells;

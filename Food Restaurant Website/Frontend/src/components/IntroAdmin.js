

import React from 'react';
import './IntroAdmin.css';
import { Link } from 'react-router-dom';

function IntroAdmin() {
  return (
    <div className="restaurant-admin">
      <header className="admin-header">
        <h1>Restaurant Admin Dashboard</h1>
      </header>
      <div className="admin-container">
        <main className="admin-main-content">
          <h2>Welcome to Restaurant Admin Panel</h2>
          {/* Add more content and components here */}
        </main>
        <div className='links'>
        <Link className="link-createcards" to="/CreateCards">Add Pizzas Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Burger Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Cofees Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Pizzas Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Burger Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Cofees Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Pizzas Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Burger Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Cofees Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Pizzas Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Burger Item</Link>
        <Link className="link-createcards" to="/CreateCards">Add Cofees Item</Link>
        </div>
      </div>
    </div>
  );
}

export default IntroAdmin;

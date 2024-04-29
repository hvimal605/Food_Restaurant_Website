import React, { useEffect, useState } from "react";
import './card.css'
import cart from '../Svg/cart.svg'

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch all cards
    fetch("http://localhost:5000/allCards", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
    }) 
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-container">
      {data.map((card) => (
        <div key={card.id} className="cardhai">
          <div className="image-box">
            <img src={card.photo} alt="" className="card-image" />
          </div>
          <div className="detailshai">
            <div className="titlehai">{card.itemName}</div>
            <span className="categoryhai">{card.category}</span>
            <div className="price">{card.price.toLocaleString()}</div>
            <button>
              <img src={cart} alt=""  />
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

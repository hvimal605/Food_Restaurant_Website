import React from 'react';
import './About.css';
import Pandeypic from '../img/ayushPandey.png'
import headchef from '../img/head-chef.webp'

const About = () => {
  return (
    <>
      

      <section id="about-hero">
        <div className="container">
          <h2>Welcome to HarshMeal</h2>
          <p>HarshMeal is your premier destination for fast, convenient, and delicious food delivery. We strive to bring you the best dining experience right to your doorstep.</p>
          
        </div>
      </section>

      <section id="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>At HarshMeal, our mission is simple: to provide our customers with an exceptional dining experience from start to finish.</p>
          <p>We are committed to:</p>
          <ul>
            <li>Delivering high-quality meals that exceed your expectations.</li>
            <li>Offering a diverse menu with options for every taste and dietary preference.</li>
            <li>Ensuring fast and reliable delivery services.</li>
            <li>Providing outstanding customer support.</li>
          </ul>
         
        </div>
      </section>

      <section id="values">
        <div className="container">
          <h2>Our Values</h2>
          <p>At HarshMeal, we hold ourselves to the highest standards of integrity, quality, and service. Our values shape every aspect of our business:</p>
          <ul>
            <li><strong>Quality:</strong> We believe in using only the freshest ingredients and upholding the highest standards of food preparation and delivery.</li>
            <li><strong>Customer Satisfaction:</strong> We prioritize the needs and preferences of our customers, striving to exceed their expectations with every order.</li>
            
          </ul>
          
        </div>
      </section>

      <section id="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p>Behind every successful delivery is a dedicated team of professionals who are passionate about food and customer service. Get to know the faces behind HarshMeal:</p>
          <div className="teamcont">
            <div className="team-member">
              <img src={headchef} alt="Team Member 1" />
              <h3>Harsh</h3>
              <p>Head Chef</p>
            </div>
            <div className="team-member">
              <img src={headchef} alt="Team Member 2" />
              <h3>Devansh Dubey</h3>
              <p>Delivery Specialist</p>
            </div>
            <div className="team-member">
              <img src={headchef} alt="Team Member 3" />
              <h3>harsh</h3>
              <p>Marketing Manager</p>
            </div>
            <div className="team-member">
              <img src={headchef} alt="Team Member 4" />
              <h3>Ayush Pandey</h3>
              <p> cleaning department head</p>
            </div>
            <div className="team-member">
              <img src={headchef} alt="Team Member 5" />
              <h3>harsh</h3>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <img src={headchef} alt="Team Member 6" />
              <h3>harsh</h3>
              <p>Quality Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

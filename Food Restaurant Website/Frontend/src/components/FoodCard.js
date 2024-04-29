import React from 'react';
import './FoodCard.css'; 
import pizzaimg from '../img/pizza.png'
import SouthIndianimg from '../img/SoutnFood.png'
import burgerimg from '../img/burger.png'

import noddlesimg from '../img/noddles.png'
import comboimg from '../img/combo.png'
import shakesimg from '../img/shakes .png'
import sweet from '../img/sweets.png'
import  cofee from '../img/coffee.png'
import chaaat from '../img/chaaat.png'
import indianfood from '../img/indianfoods.png'
import burgerWalking from '../img/burger_walking_dribble.gif'
import leftslide from '../Svg/slideleft.svg'
import rightslide from '../Svg/slideright.svg'
import { Link } from 'react-router-dom';

class FoodCard extends React.Component {
    render() {
        return (
            <div className="foodcard">
                <div className="cardhead">
                    <div className="cardheadtxt">
                        Browse Our Hottest
                        <img src={burgerWalking} alt="" height="70px" />
                        <span className="highlightword">Categories</span>
                    </div>
                    <div className="slideicon">
                        <span id="slideRight" onClick={this.rightslide}>
                            <img src={leftslide} height="40" alt="" />
                        </span>
                        <span id="slideLeft" onClick={this.leftslide}>
                            <img src={rightslide} height="40" alt="" />
                        </span>
                    </div>
                </div>
                <div className="carditem">
                    <Link to="/Pizza">
                        <div id="jump" className="card1 card">
                            <div className="cardimg">
                                <img src={pizzaimg} alt="" />
                            </div>
                            <div className="cardcontent">
                                <div className="foodname"> Pizzas</div>
                                <div className="noofitem">(25 items)</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/Pizza"></Link>
                    <div className="card2 card">
                        <div className="cardimg">
                            <img src={SouthIndianimg} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">SouthIndian</div>
                            <div className="noofitem">(17 items)</div>
                        </div>
                    </div>
                    <Link to="/Pizza">

                    
                        <div className="card3 card">
                            <div className="cardimg">
                                <img src={burgerimg} alt="" />
                            </div>
                            <div className="cardcontent">
                                <div className="foodname">Burgers</div>
                                <div className="noofitem">(12 items)</div>
                            </div>
                        </div>
                    
                    </Link>
                    <Link to="/Pizza">
                    <div className="card4 card">
                        <div className="cardimg">
                            <img src={noddlesimg} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">Noddles</div>
                            <div className="noofitem">(8 items)</div>
                        </div>
                    </div>
                    </Link>

                    {/* Add the remaining card structures similarly */}
                    <Link to="/Pizza">
                    <div className="card5 card">
                        <div className="cardimg">
                            <img src={comboimg}alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">ComboFoods</div>
                            <div className="noofitem">(10 items)</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/Pizza">
                    <div className="card6 card">
                        <div className="cardimg">
                            <img src={shakesimg} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">Shakes</div>
                            <div className="noofitem">(13 items)</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/Pizza">
                    <div className="card7 card">
                        <div className="cardimg">
                            <img src={sweet} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">Sweets</div>
                            <div className="noofitem">(35 items)</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/Pizza">
                    <div className="card8 card">
                        <div className="cardimg">
                            <img src={cofee} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">Coffees</div>
                            <div className="noofitem">(12 items)</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/Pizza">
                    <div className="card9 card">
                        <div className="cardimg">
                            <img src={chaaat} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">Chaats</div>
                            <div className="noofitem">(7 items)</div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/Pizza">
                    <div className="card10 card">
                        <div className="cardimg">
                            <img src={indianfood} alt="" />
                        </div>
                        <div className="cardcontent">
                            <div className="foodname">IndianFood</div>
                            <div className="noofitem">(9 items)</div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        );
    }

    rightslide() {
        // Your right slide logic here
    }

    leftslide() {
        // Your left slide logic here
    }
}

export default FoodCard;

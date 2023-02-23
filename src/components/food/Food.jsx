import React from 'react'
import { useState } from 'react'
import './food.css'

let pizzaHandler = 0;
let burgerHandler = 0;
let biriyaniHandler = 0;
let dosaHandler = 0;

function Food() {

    let [pizzaHandler, setPizzaNew] = useState(0);
    let [burgerHandler, setBurgerNew] = useState(0);
    let [biriyaniHandler, setBiriyaniNew] = useState(0);
    let [dosaHandler, setDosaNew] = useState(0);

    function pizzaCount () {
        setPizzaNew(pizzaHandler + 1)
    }

    function burgerCount () {
        setBurgerNew(burgerHandler + 1)
    }

    function biriyaniCount () {
        setBiriyaniNew(biriyaniHandler + 1)
    }

    function dosaCount () {
        setDosaNew(dosaHandler + 1)
    }



  return (
    <div>
        <div className="food-container">
            <div className="card">
                <img src="https://source.unsplash.com/1600x800/?pizza" />
                <h4>Spicy Cheesy Pizza</h4>
                <p>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some .</p>
                <button className='btn' onClick={pizzaCount}>Order Now</button>
                <div className="food-tag">
                    <a href="#">{pizzaHandler} times ordered</a>
                </div>
            </div>
            
            <div className="card">
                <img src="https://source.unsplash.com/1600x800/?burger" />
                <h4>Spicy Cheesy Burger</h4>
                <p>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some .</p>
                <button className='btn' onClick={burgerCount}>Order Now</button>
                <div className="food-tag">
                    <a href="#">{burgerHandler} times ordered</a>
                </div>
            </div>

            <div className="card">
                <img src="https://source.unsplash.com/1600x800/?biriyani" />
                <h4>Chicken Biriyani</h4>
                <p>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some .</p>
                <button className='btn' onClick={biriyaniCount}>Order Now</button>
                <div className="food-tag">
                    <a href="#">{biriyaniHandler} times ordered</a>
                </div>
            </div>

            <div className="card">
                <img src="https://source.unsplash.com/1600x800/?dosa" />
                <h4>Crispy Ghee Dosa</h4>
                <p>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some .</p>
                <button className='btn' onClick={dosaCount}>Order Now</button>
                <div className="food-tag">
                    <a href="#">{dosaHandler} times ordered</a>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default Food
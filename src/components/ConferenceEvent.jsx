import React from "react";
import { useState } from "react";
import './ConferenceEvent.css'
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "/src/venueSlice";

function ConferenceEvent(){
  
    const [showItems, setShowItems] = useState(false);
    const venueItems = useSelector((state) => state.venue);
    const dispatch = useDispatch();

    const handleToggleItems = () => {
        console.log("handleToggleItems called");
        setShowItems(!showItems);
    };


    const handleAddToCart = (index)=>{
        dispatch(incrementQuantity(index));
    }

    const handleRemoveToCart = (index)=>{
        dispatch(decrementQuantity(index));
    }

    const calculateTotalCost = () =>{
        let totalCostLocal = 0;
        venueItems.forEach(item => {
            totalCostLocal += item.quantity * item.cost;
        });
        return totalCostLocal;
    }

    const totalCost = calculateTotalCost();


    return<>
        <navbar className="navbar_event_conference">
            <div className="company_logo">Conference Expense Planner</div>
            <div className="left_navbar">
                <div className="nav_links">
                    <a href="#venue">Venue</a>
                    <a href="#addons">Add-ons</a>
                    <a href="#meals">Meals</a>
                </div>
                <button className="details_button" onClick={handleToggleItems}>
                        Show Details
                </button>
            </div>
        </navbar>

        <div className="main_container">
            {!showItems ? 
                (
                    <div className="items-information">
                        <div id="venue" className="venue_container">
                            <div className="text">
                                <h1>Venue Room Selection</h1>
                            </div>
                            <div className="venue_selection">
                                {venueItems.map((item, index) => (
                                    <div className="venue_main" key={index}>
                                        <div>
                                            <img className="img" src={item.img} alt={item.name} />
                                        </div>
                                        <div className="item_name">{item.name}</div>
                                        <div className="item_price">${item.cost}</div>
                                        <div className="button_container">
                                            <button className={item.quantity === 0?("btn_disabled btn"):("btn_minus btn")}
                                                onClick={() => handleRemoveToCart(index)}>&#8211;</button> 
                                            <span>{item.quantity}</span>
                                            <button className={item.quantity > item.max_quantity?("btn_disabled btn"):("btn_plus btn")}
                                                onClick={() => handleAddToCart(index)}>&#43;</button>
                                        </div>
                                    </div>
                                   ))} 
                            </div>           
                        </div>
                    </div> ) : <p>Nije prikazano nista</p> }

                    <div className="total_cost">Total Cost: $ {totalCost}</div>             
        </div>

                
    </>
};
export default ConferenceEvent;
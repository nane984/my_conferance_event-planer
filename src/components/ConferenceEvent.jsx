import React from "react";
import { useState } from 'react'
import './ConferenceEvent.css'

function ConferenceEvent(){
    const [showItems, setShowItems] = useState(false);

    const handleToggleItems = () => {
        console.log("handleToggleItems called");
        setShowItems(!showItems);
    };

    return<>
        <navbar className="navbar_event_conference">
            <div className="company_logo">Conference Expense Planner</div>
            <div className="left_navbar">
                <div className="nav_links">
                    <a href="#venue">Venue</a>
                    <a href="#addons">Add-ons</a>
                    <a href="#meals">Meals</a>
                </div>
            </div>
        </navbar>
        <div className="main_container">
            <div className="text"> 
                <h1>Venue Room Selection</h1>
            </div>
        </div>
        <div>Total Cost: </div>
        <div className="total_amount_detail">
            <button onClick={handleToggleItems}>Pocetna</button>
        </div>
    </>
}
export default ConferenceEvent;
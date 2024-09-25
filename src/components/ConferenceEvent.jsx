import React from "react";
import './ConferenceEvent.css'
import { useSelector, useDispatch } from "react-redux";

function ConferenceEvent(){
  
    const venueItems = useSelector((state) => state.venue);

    return<>
        <navbar className="navbar_event_conference">
            <div className="company_logo">Conference Expense Planner</div>
            <div className="left_navbar">
                <div className="nav_links">
                    <a href="#venue">Venue</a>
                    <a href="#addons">Add-ons</a>
                    <a href="#meals">Meals</a>
                </div>
                <button className="details_button">
                        Show Details
                </button>
            </div>
        </navbar>
        <div id="venue" className="venue_container container_main">
            <div className="main_container">
                <div className="text"> 
                    <h1>Venue Room Selection</h1>
                </div>
                <div className="venue_selection">
                {venueItems.map((item, index) => (
            <div className="venue_main" key={index}>
              <div className="img">
                <img src={item.img} alt={item.name} />
              </div>
              </div>
                ))}
            </div>
        </div>
        </div>
    </>
};
export default ConferenceEvent;
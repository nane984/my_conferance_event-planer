import React from "react";
import "./TotalCost.css";
import ItemDisplay from "./ItemDisplay";

function TotalCost({totalCost, items}){
    return(
        <div className="pricing-app">
            <div className="display_box">
	            <div className="header">
                    <p className="preheading"><h3>Total cost for the event</h3></p>
	            </div>
            <div>
	            <h2 id="pre_fee_cost_display" className="price">${totalCost}</h2>
	                <div className="render_items"><ItemDisplay items={items}/></div>
	            </div>
	        </div>
	    </div>
	);
        
}export default TotalCost;
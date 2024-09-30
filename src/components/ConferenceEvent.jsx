import React from "react";
import { useState } from "react";
import './ConferenceEvent.css'
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "/src/venueSlice";
import { incrementQuantityAV, decrementQuantityAV } from "/src/avSlice";
import { toggleMeals } from "/src/mealsSlice";
import TotalCost from "./TotalCost";

function ConferenceEvent(){
  
    const [showItems, setShowItems] = useState(false);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const venueItems = useSelector((state) => state.venue);
    const audioVideoItems = useSelector((state) => state.audioVideo)
    const mealsItems = useSelector((state) => state.mealsSl)
    const dispatch = useDispatch();

    const handleToggleItems = () => {
        setShowItems(!showItems);
    };


    const handleAddVenueToCart = (index)=>{
        dispatch(incrementQuantity(index));
    }

    const handleRemoveVenueFromCart = (index)=>{
        dispatch(decrementQuantity(index));
    }

    const handleAddAVToCart = (index)=>{
        dispatch(incrementQuantityAV(index));
    }

    const handleRemoveAVFromCart = (index) => {
        dispatch(decrementQuantityAV(index));

    }

    const handleMealSelection = (index) =>{
        dispatch(toggleMeals(index));
    }

    const calculateTotalCostVenue = () =>{
        let totalCostLocal = 0;
        venueItems.forEach(item => {
            totalCostLocal += item.quantity * item.cost;
        });
        return totalCostLocal;
    }

    const calculateTotalCostAV = () =>{
        let totalCostLocal = 0;
        audioVideoItems.forEach(item => {
            totalCostLocal += item.quantity * item.cost;
        });
        return totalCostLocal;
    }

    const calculateTotalCostMeals = () => {
        let totalCostLocal = 0;
        mealsItems.forEach(item => {
            if(item.selected){
                totalCostLocal += numberOfPeople * item.cost;
            }
        })
        return totalCostLocal;
    }

    const totalCostVenue = calculateTotalCostVenue();
    const totalCostAV = calculateTotalCostAV();
    const totalCostMeals = calculateTotalCostMeals();

    const getItemsFromTotalCost = () =>{
        const items = [];
        venueItems.forEach(item=>{
            if(item.quantity>0){
                items.push({...item, type: "venue"})
            }
        })
        audioVideoItems.forEach(item=>{
            if(item.quantity>0){
                items.push({...item, type: "av"})
            }
        })
        mealsItems.forEach(item=>{
            if(item.selected){
                items.push({...item, type: "meal", brLjudi: numberOfPeople});
            }
        })
        console.log(items);
        
        return items;
    }
    const items = getItemsFromTotalCost();


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
                                                onClick={() => handleRemoveVenueFromCart(index)}>&#8211;</button> 
                                            <span>{item.quantity}</span>
                                            <button className={item.quantity > item.max_quantity?("btn_disabled btn"):("btn_plus btn")}
                                                onClick={() => handleAddVenueToCart(index)}>&#43;</button>
                                        </div>
                                    </div>
                                   ))} 
                            </div>
                            <div className="total_cost">Total Cost: $ {totalCostVenue}</div>           
                        </div>

                        <div id="addons" className="venue_container">
                            <div className="text">
                                <h1>Audio and visual Selection</h1>
                            </div>
                            <div className="venue_selection"> 
                                {audioVideoItems.map((avItem, avIndex) => (
                                    <div className="venue_main" key={avIndex}>
                                        <div>
                                            <img className="img" src={avItem.img} alt={avItem.name}/>
                                        </div>
                                        <div className="item_name">{avItem.name}</div>
                                        <div className="item_price">${avItem.cost}</div>
                                        <div className="button_container">
                                            <button className={avItem.quantity === 0?("btn_disabled btn"):("btn_minus btn")}
                                                    onClick={() => handleRemoveAVFromCart(avIndex)}>&#8211;</button> 
                                            <span>{avItem.quantity}</span>
                                            <button className={avItem.quantity > avItem.max_quantity?("btn_disabled btn"):("btn_plus btn")}
                                                    onClick={() => handleAddAVToCart(avIndex)}>&#43;</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="total_cost">Total Cost: $ {totalCostAV}</div>
                        </div>
                        <div id="meals" className="venue_container">
                            <div className="text">
                                <h1>Meals</h1>
                            </div>
                            <div className="meals">
                                    <label htmlFor="numberOfPeople"><h3>Number of people</h3></label>
                                    <input type="number" id="numberOfPeople"
                                        className="number" min="1" value={numberOfPeople}
                                        onChange={(e)=> setNumberOfPeople(e.target.value)}/>
                                </div>
                            <div className="venue_selection"> 
                                {mealsItems.map((mItem, mIndex) => (
                                    <div className="venue_main" key={mIndex}>
                                        <div className="item_name">
                                            <input type="checkbox" className="checkbox"
                                                checked={ mItem.selected } 
                                                onChange={() => handleMealSelection(mIndex)}/>
                                            {mItem.name}
                                        </div>
                                        <div className="item_price">${mItem.cost}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="total_cost">Total Cost: $ {totalCostMeals}</div>
                        </div>    
                    </div> ) : <TotalCost totalCost={totalCostMeals + totalCostAV + totalCostVenue} items={items}/> }
        </div>

                
    </>
};
export default ConferenceEvent;
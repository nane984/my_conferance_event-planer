import React from "react";
import './ItemDisplay.css'

function ItemDisplay ({items}){
    return(
        <div className="display_box1">
            {items.lenght===0 ? (<p>No items select</p>) :(
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit cost</th>
                            <th>Quantitz</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index)=>(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>
                                    {item.type==="meal" ? (item.brLjudi):(item.quantity)}
                                </td>
                                <td>
                                    {item.type==="meal" ? (item.brLjudi * item.cost):(item.quantity * item.cost)}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        </div>
    );
}export default ItemDisplay;
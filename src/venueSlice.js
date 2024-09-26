// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
      max_quantity: 7,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
      max_quantity: 6,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
      max_quantity: 5,
    },
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
      max_quantity: 4,
    },
    {
      img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
      max_quantity: 3,
    },
  
  ],reducers: {
      incrementQuantity(state, action){
        const {payload: index} = action
        if(state[index] && (state[index].quantity <= state[index].max_quantity)){
          state[index].quantity++;
        }
      },

      decrementQuantity(state, action){
        const {payload: index} = action
        if(state[index] && (state[index].quantity > 0)){
          state[index].quantity--;
        }
      }
  },
});

export const {incrementQuantity, decrementQuantity} = venueSlice.actions;
export default venueSlice.reducer;
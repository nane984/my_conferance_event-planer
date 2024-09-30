import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "audioVideo",
    initialState: [
        {
            img: "https://pixabay.com/images/download/business-20031_640.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
            max_quantity: 25,
        },
        {
            img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
            max_quantity: 35,
        },
        {
            img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
            max_quantity: 55,
        },
        {
            img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
            max_quantity: 2,
        },
        {
            img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
            max_quantity: 10,
        },    
    ],
    reducers:{
        incrementQuantityAV(state, action){
            const {payload: index} = action
            if(state[index] && (state[index].quantity <= state[index].max_quantity)){
              state[index].quantity++;
            }
        },

        decrementQuantityAV(store, action){
            const {payload: index} = action
            if(store[index] && store[index].quantity > 0){
                store[index].quantity--;
            }
        },
    }
});

export const { incrementQuantityAV, decrementQuantityAV } = avSlice.actions;
export default avSlice.reducer;
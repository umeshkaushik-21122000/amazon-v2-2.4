import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{
    "id": 14,
    "title": "Unbranded Fresh Gloves",
    "price": 258,
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "category":"Clothes",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=8311"
    }],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items=[...state.items,action.payload]
    },
    
    removeFromBasket: (state, action) => {
      const idx=state.items.findIndex(
        basketItems=>basketItems.id===action.payload.id
      )
      let newbasket=[...state.items];
      newbasket.splice(idx,1);
      state.items=newbasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selecttotal = (state) =>state.basket.items.reduce((total,items)=>total+items.price,0);

export default basketSlice.reducer;

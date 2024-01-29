import { ProductProps } from "../../Type";
import { createSlice } from "@reduxjs/toolkit";

interface StoreState {
    productData: ProductProps[];
};

const initialState: StoreState = {
    productData: []
};

export const orebiSlice = createSlice({
    name: "orebi",
    initialState,
    reducers: {
        addToCart: (state, action) => { },
        increaseQuantity: (state, action) => { },
        decreaseQuantity: (state, action) => { },
        deleteProduct: (state, action) => { },
        resetCart: (state) => {
            state.productData = [];
        },
    }
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart,
} = orebiSlice.actions;

export default orebiSlice.reducer;
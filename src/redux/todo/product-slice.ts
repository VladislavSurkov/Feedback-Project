import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './product-operations';
import { ItodoState } from 'helpers/types/product';
import { isError } from 'redux/isError';


const initialState: ItodoState = {
    products: [],
    isLoading: false,
    error: null,
};

export const todoSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            }).addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.products = payload;
                state.error = null;
                state.isLoading = false;
            }).addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
                state.error = payload;
                state.isLoading = false;
            });
    },

});

export const todoReducer = todoSlice.reducer


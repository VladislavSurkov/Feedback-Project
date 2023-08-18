import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchProducts, createProducts } from './product-operations';
import { ITodoState } from 'helpers/types/product';
import { isError } from 'redux/isError';


const initialState: ITodoState = {
    products: [],
    isLoading: false,
    error: null,

};

const extraActions = [fetchProducts, createProducts];

export const todoSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.products = payload;
            }).addCase(createProducts.fulfilled, (state, { payload }) => {
                state.products.push(payload.result);
            }).addMatcher(
                isAnyOf(...extraActions.map((extraAction) => extraAction.pending)),
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            ).addMatcher(
                isAnyOf(...extraActions.map((extraAction) => extraAction.fulfilled)),
                (state) => {
                    state.isLoading = false;
                    state.error = null;
                }
            ).addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
                state.error = payload;
                state.isLoading = false;
            });
    },

});

export const todoReducer = todoSlice.reducer


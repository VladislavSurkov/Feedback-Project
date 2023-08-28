import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    overflow: false,
};

const modalSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setOverflow(state, { payload }) {
            const body = document.body;
            payload
                ? (body.style.overflow = 'hidden')
                : (body.style.overflow = '');
            state.overflow = payload;
        }
    },
});

export const { setOverflow, } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
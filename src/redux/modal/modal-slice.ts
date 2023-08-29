import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sidebar: false,
    modal: false,
};

const setBodyOverflow = (value: boolean) => {
    const body = document.body;
    body.style.overflow = value ? "hidden" : "";
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setSidebar(state, { payload }) {
            state.sidebar = payload;
            setBodyOverflow(payload)
        },
        setModal(state, { payload }) {
            state.modal = payload;
            setBodyOverflow(payload)
        },
    },
});

export const { setSidebar, setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
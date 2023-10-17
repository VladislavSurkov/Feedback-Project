import { createSlice } from "@reduxjs/toolkit";
import { SidebarData, } from "helpers/items/selectItems";


const initialState = {
    categories: SidebarData[0].value,
    sort: null
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoriesFilter(state, { payload }) {
            state.categories = payload;
        },
        setSortFilter(state, { payload }) {
            state.sort = payload;
        },
    },
});

export const { setCategoriesFilter, setSortFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
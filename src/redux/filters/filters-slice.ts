import { createSlice } from "@reduxjs/toolkit";
import { SidebarData,  } from "selectItems/selectItems";


const initialState = {
    status: SidebarData[0].value,
    sort: null
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setStatusFilter(state, { payload }) {
            state.status = payload;
        },
        setSortFilter(state, { payload }) {
            state.sort = payload;
        },
    },
});

export const { setStatusFilter, setSortFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
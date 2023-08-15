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
    },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
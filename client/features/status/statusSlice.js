import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: "status",
    initialState: {},
    reducers: {
        add: (state, action) => {
            state[action.payload._id] = action.payload;
        },
        update: (state, action) => {
            state[action.payload._id] = action.payload;
        },
    }
});

export const { add } = statusSlice.actions

export default statusSlice.reducer;
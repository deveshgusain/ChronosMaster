import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
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

export const { add, update } = taskSlice.actions;

export default taskSlice.reducer;
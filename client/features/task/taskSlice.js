import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: { "1": { _id: "1", name: "Gym", startTime: "16:00", endTime: "17:30" }, "2": { _id: "2", name: "Dinner", startTime: "20:00", endTime: "21:00" } },
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
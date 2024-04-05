import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    newHabit: false,
}

const habitSlice = createSlice({
    name: 'Habit',
    initialState,
    reducers: {
        addHabit : (state, action) => {
            state.newHabit = true;
        },
        closeHabit : (state, action) => {
            state.newHabit = false;
        }
    }
});

export const habitReducer = habitSlice.reducer;
export const habitActions = habitSlice.actions;

export const habitSelector = (state) => state.habitReducer.newHabit; 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    newHabit: false,
}

const habitSlice = createSlice({
    name: 'Habit',
    initialState,
    reducers: {
        showHabit: (state, action) => {
            state.newHabit = true;
        },
        addHabit: (state, action) => {
            state.habits = [...state.habits, {
                habit : action.payload.habitName,
                url : action.payload.url
            }]
        },
        closeHabit: (state, action) => {
            state.newHabit = false;
        }
    }
});

export const habitReducer = habitSlice.reducer;
export const habitActions = habitSlice.actions;

export const habitSelector = (state) => state.habitReducer.newHabit; 
export const habitsList = (state) => state.habitReducer.habits;
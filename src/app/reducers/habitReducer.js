import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    newHabit: false,
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    today: '',
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
                id: action.payload.id,
                habit: action.payload.habitName,
                url: action.payload.url,
                // done: false,
                // skip: true,
                // failed:false
            }]
        },
        setToday: (state, action) => {
            state.today = state.day[action.payload.getday]
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
export const today = (state) => state.habitReducer.today;
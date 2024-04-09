import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    newHabit: false,
    day: [
        { day: 'Sunday' },
        { day: 'Monday' },
        { day: 'Tuesday' },
        { day: 'Wednesday' },
        { day: 'Thursday' },
        { day: 'Friday' },
        { day: 'Saturday' }],
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
            }]
        },
        setDay:(state, action) => {
            state.day = state.day.map((day, index) => {    // getday = 2 , index = 0 - 2 = -2
                let date = new Date();
                date.setDate(date.getDate() + (index - action.payload.getday))

                return (
                    {
                        day: day.day,
                        dateTime: date.toLocaleString().split(',')[0]
                    }
                )
            })
        },
        setToday: (state, action) => {
            state.today = state.day[action.payload.getday].day
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
export const days = (state) => state.habitReducer.day;
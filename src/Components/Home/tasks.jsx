import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './home.module.css'
import AddHabit from '../Habits/addHabit';
import Suggestions from './suggestion';
import { SuggestedHabit } from '../../Assets/data/habit_info';
import { useDispatch, useSelector } from 'react-redux';
import { habitActions, habitSelector } from '../../app/reducers/habitReducer';


function HabitsContainer() {

    const [predefined, setPredefined] = useState('');

    const dispatch = useDispatch();
    const habit = useSelector(habitSelector);


    // takes the current value from the suggestions and sets it as the
    // pre defined value
    const add = (curVal) => {
        if (typeof (curVal) == 'string') {
            setPredefined(curVal);
        }else{
            setPredefined(null);
        }
        dispatch(habitActions.showHabit())
    }

    // closes the Add habit modal component
    const close = () => {
        dispatch(habitActions.closeHabit())
    }

    // submits the value entered in the input field
    const submit = (habitName) => {
        const url = 'working fine';
        dispatch(habitActions.addHabit({habitName, url}))
        close();
    }

    return (
        <div className={styles.habits}>
            <div className={styles.header}>
                <h2>Suggestions</h2>
                <Button onClick={add}>Add Habit +</Button>
            </div>

            {/* Creating the list of suggestions */}
            <div className={styles.suggestion}>
                <Suggestions habit={add} habitList={SuggestedHabit} />
            </div>


            {/* Accessing the add habit component */}
            <AddHabit
                show={habit}
                onHide={close}
                submit={submit}
                value={predefined}
            />
        </div>
    );
}

export default HabitsContainer;
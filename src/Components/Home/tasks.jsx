import { Button } from 'react-bootstrap';
import styles from './home.module.css'
import AddHabit from '../Habits/addHabit';
import Suggestions from './suggestion';
import { SuggestedHabit } from '../../Assets/data/habit_info';
import { useDispatch, useSelector } from 'react-redux';
import { habitActions, habitSelector } from '../../app/reducers/habitReducer';
import { useState } from 'react';

function HabitsContainer() {

    const [predefined, setPredefined] = useState('');

    const dispatch = useDispatch();
    const habit = useSelector(habitSelector);

    const add = (curVal) => {
        setPredefined(curVal);
        dispatch(habitActions.addHabit())
    }

    const close = () => {
        dispatch(habitActions.closeHabit())
    }

    const submit = (input) => {
        console.log(input);
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
                <Suggestions habit={add} habitList= {SuggestedHabit}/>
            </div>


            {/* Accessing the add habit component */}
            <AddHabit
                show={habit}
                onHide={close}
                submit = {submit}
                value = {predefined}
            />
        </div>
    );
}

export default HabitsContainer;
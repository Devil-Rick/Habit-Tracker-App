import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './home.module.css'
import AddHabit from '../Habits/addHabit';
import Suggestions from './suggestion';
import { SuggestedHabit } from '../../Assets/data/habit_info';
import { useDispatch, useSelector } from 'react-redux';
import { habitActions, habitSelector, habitsList } from '../../app/reducers/habitReducer';


function HabitsContainer() {

    const [predefined, setPredefined] = useState('');
    const [url, setUrl] = useState('');
    const [id, setId] = useState('');


    const dispatch = useDispatch();
    const habit = useSelector(habitSelector);
    const h_list = useSelector(habitsList);

    // takes the current value from the suggestions and sets it as the
    // pre defined value
    const add = (curVal, url) => {
        if (typeof (curVal) == 'string') {
            setPredefined(curVal);
            setUrl(url)
        }else{
            setPredefined(null);
        }
        setId((h_list.length)+1)
        dispatch(habitActions.showHabit())
    }

    // closes the Add habit modal component
    const close = () => {
        dispatch(habitActions.closeHabit())
    }

    // submits the value entered in the input field
    const submit = (
        habitName, 
        url = 'https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png') => {
        dispatch(habitActions.addHabit({habitName, url, id}))
        close();
    }

    return (
        <div className='habits'>
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
                url = {url}
            />
        </div>
    );
}

export default HabitsContainer;
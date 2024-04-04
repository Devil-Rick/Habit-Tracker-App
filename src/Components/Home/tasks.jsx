import { Button } from 'react-bootstrap';
import styles from './home.module.css'
import { useState } from 'react';
import AddHabit from '../Habits/addHabit';
import Suggestions from './suggestion';

function HabitsContainer() {

    const [newHabit, setNewHabit] = useState(false);

    const add = () => {
        setNewHabit(true);
    }

    return (
        <div className={styles.habits}>
            <div className={styles.header}>
                <h2>Suggestions</h2>
                <Button onClick={() => setNewHabit(true)}>Add Habit +</Button>
            </div>

            {/* Creating the list of suggestions */}
            <div className={styles.suggestion}>
                <Suggestions habit={add} />
            </div>


            {/* Accessing the add habit component */}
            <AddHabit
                show={newHabit}
                onHide={() => setNewHabit(false)}
            />
        </div>
    );
}

export default HabitsContainer;
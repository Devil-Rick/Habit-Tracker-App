import { Button, Card } from 'react-bootstrap';
import styles from './home.module.css'
import { useState } from 'react';
import AddHabit from '../Habits/addHabit';

function HabitsContainer() {

    const [newHabit, setNewHabit] = useState(false);

    return (
        <div className={styles.habits}>
            <div className={styles.header}>
                <h2>Suggestions</h2>
                <Button onClick={() => setNewHabit(true)}>Add Habit +</Button>
            </div>

            <Card className={styles.cardStyle} onClick={() => setNewHabit(true)}>
                <Card.Body className={styles.body}>
                    This is some text within a card body.
                </Card.Body>
            </Card>
            <AddHabit
                show={newHabit}
                onHide={() => setNewHabit(false)}
            />
        </div>
    );
}

export default HabitsContainer;
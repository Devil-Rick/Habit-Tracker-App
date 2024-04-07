import { Button } from "react-bootstrap";
import styles from "./habits.module.css"


export default function ButtonContainer() {
    return (
        <div className={styles.btnContainer} >
            <Button className={styles.button} >
                Weekly
            </Button>
            <Button className={styles.button} >
                Add Habit +
            </Button>
            <Button className={styles.button} >
                Monthly
            </Button>
        </div>
    )
}
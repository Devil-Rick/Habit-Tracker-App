import { useOutletContext } from "react-router-dom"
import { habitActions, today } from "../../app/reducers/habitReducer";
import { useDispatch, useSelector } from "react-redux";
import styles from './habits.module.css'

export default function WeekTracker() {
    const date = new Date();
    const getday = date.getDay();


    const dispatch = useDispatch();
    dispatch(habitActions.setToday({getday}));
    const day = useSelector(today)

    const habitName = useOutletContext();

    return (
        <div className={`${styles.status} habits`}>
            <h2 className={styles.header}>
                <span>Weekly Tracker</span>
                <span>{day}</span>
            </h2>

            <h3>
                {habitName}
            </h3>

            <div>

            </div>
        </div>
    )
}
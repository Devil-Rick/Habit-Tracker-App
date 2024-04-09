import { useOutletContext } from "react-router-dom"
import { days, habitActions, today } from "../../app/reducers/habitReducer";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import styles from './habits.module.css'
import ButtonContainer from './buttons'
import { useEffect } from "react";

export default function WeekTracker() {
    const date = new Date();
    const getday = date.getDay();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(habitActions.setDay({ getday }));
        dispatch(habitActions.setToday({ getday }));
    }, [dispatch,getday]);

    const day = useSelector(today)
    const dayList = useSelector(days)

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

            <div className={styles.weekStatus}>
                {dayList.map((dayitem, index) => {
                    return (
                        <Card key={index} className={(dayitem.day === day) ? styles.dailyStatus : styles.disStatus}>
                            <Card.Header>
                                <span> {dayitem.day} </span>
                                <span> {dayitem.dateTime} </span>
                            </Card.Header>
                            <Card.Body className={styles.btnHolder}>
                                <ButtonContainer dayitem= {dayitem} day={day}/>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
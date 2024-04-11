import { useOutletContext } from "react-router-dom"
import { days, today, habitActions, habitsList } from "../../app/reducers/habitReducer";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import styles from './habits.module.css'
import ButtonContainer from './buttons'

export default function WeekTracker() {
    const day = useSelector(today)
    const dayList = useSelector(days)

    const habit = useSelector(habitsList);

    const dispatch = useDispatch();
    const setVal = (id, value, getday) => {
        dispatch(habitActions.validate({id, val:value, getday}));
    }

    const habitName = useOutletContext();
    return (
        <div className={`${styles.status} habits`}>
            <h2 className={styles.header}>
                <span>Weekly Tracker</span>
                <span>{day}</span>
            </h2>

            <h3>
                {habitName.name}
            </h3>

            <div className={styles.weekStatus}>
                {dayList.map((dayitem, index) => {

                    const done = habit[habitName.id - 1].day[index].done;
                    const cross = habit[habitName.id - 1].day[index].notDone;
                    const skip = habit[habitName.id - 1].day[index].skip;

                    return (
                        <Card key={index} className={(dayitem.day === day) ? styles.dailyStatus : styles.disStatus}>
                            <Card.Header>
                                <span> {dayitem.day} </span>
                                <span> {dayitem.dateTime} </span>
                            </Card.Header>
                            <Card.Body className={styles.btnHolder}>
                                <ButtonContainer
                                    dayVal = {(dayitem.day === day) ? false : true}
                                    setVal={setVal}
                                    id = {habitName.id}
                                    done={done}
                                    cross={cross}
                                    skip={skip}
                                />
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
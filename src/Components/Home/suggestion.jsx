import { Card } from "react-bootstrap";
import styles from './home.module.css'
import { SuggestedHabit } from "../../Assets/data/habit_info";

export default function Suggestions({ habit }) {
    return (
        <>
            {SuggestedHabit.map((h) => {
                return (
                    <Card key={h.id} className={styles.cardStyle} onClick={habit}>
                        <Card.Body className={styles.body}>
                            {h.habit}
                            <span>
                                <img src={h.url} alt={`Icon: ${h.id}`} />
                            </span>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}
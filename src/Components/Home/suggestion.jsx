import { Card } from "react-bootstrap";
import styles from './home.module.css'

export default function Suggestions({ habit, habitList }) {

    return (
        <>
            {habitList.map((h) => {
                return (
                    <Card key={h.id} className={styles.cardStyle} onClick={() => habit(h.habit)}>
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
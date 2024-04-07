import { Card } from "react-bootstrap";
import styles from './home.module.css'

export default function Suggestions({ habit, habitList }) {
    return (
        <>
            {habitList.map((h, index) => {
                return (
                    <Card key={index} className={styles.cardStyle} onClick={() => habit(h.habit, h.url, h.id)}>
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
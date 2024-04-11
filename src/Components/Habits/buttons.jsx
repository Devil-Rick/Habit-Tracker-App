import { Button } from "react-bootstrap";
import styles from "./habits.module.css"
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { MdDoneAll } from "react-icons/md";

export default function ButtonContainer({ dayVal, setVal, id, done, cross, skip }) {
    const date = new Date();
    const getday = date.getDay();

    return (
        <>
            <Button
                className={`${styles.btnStyle} ${styles.btnDone} ${done && styles.done}`}
                onClick={() => setVal(id, 'done', getday)}
                disabled={dayVal}
            >
                <MdDoneAll />
            </Button>
            <Button
                className={`${styles.btnStyle} ${styles.btnCross} ${cross && styles.cross}`}
                onClick={() => setVal(id, 'notDone', getday)}
                disabled={dayVal}
            >
                <ImCross />
            </Button>
            <Button
                className={`${styles.btnStyle} ${styles.btnLeft} ${skip && styles.skip}`}
                onClick={() => setVal(id, 'skip', getday)}
                disabled={dayVal}
            >
                <BsThreeDots />
            </Button>
        </>
    )
}
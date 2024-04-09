import { Button } from "react-bootstrap";
import styles from "./habits.module.css"
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { MdDoneAll } from "react-icons/md";


export default function ButtonContainer({dayitem, day}) {
    return (
        <>
            <Button
                className={`${styles.btnStyle} ${styles.btnDone}`}
                disabled={(dayitem.day === day) ? false : true}
            >
                <MdDoneAll />
            </Button>
            <Button
                className={`${styles.btnStyle} ${styles.btnCross}`}
                variant="primary"
                disabled={(dayitem.day === day) ? false : true}
            >
                <ImCross />
            </Button>
            <Button
                className={`${styles.btnStyle} ${styles.btnLeft}`}
                variant="primary"
                disabled={(dayitem.day === day) ? false : true}
            >
                <BsThreeDots />
            </Button>
        </>
    )
}
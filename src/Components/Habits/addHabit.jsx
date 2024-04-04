import { Button, Modal } from "react-bootstrap";
import styles from "./habits.module.css"

export default function AddHabit(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName={styles.modal}
            contentClassName={styles.modalContent}
        >
            <Modal.Header className={styles.title}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Habit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input name="newHabit" id="add" placeholder='Track your Habit...'></input>
                <div className={styles.buttonContainer}>
                    <Button onClick={props.onHide} className={styles.submit}>Submit</Button>
                    <Button onClick={props.onHide} className={styles.close}>Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
import { Button, Modal } from "react-bootstrap";
import styles from "./habits.module.css"
import { useState } from "react";

export default function AddHabit({show, onHide, submit, value, url}) {

    const [newHabit, setNewhabit] = useState()

    const handleSubmit = (val) => {
        if (val == null) {
            submit(value,url)
        } else {
            submit(val)
        }
        setNewhabit(null)
    }

    return (
        <Modal
            show={show} 
            onHide={onHide}
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
                <input name="newHabit"
                    id="add"
                    placeholder='Track your Habit...'
                    onChange={(e) => {setNewhabit(e.target.value)}}
                    defaultValue={value}
                    required
                />

                <div className={styles.buttonContainer}>
                    <Button onClick={() => {handleSubmit(newHabit)}} className={styles.submit}>Submit</Button>
                    <Button onClick={onHide} className={styles.close}>Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
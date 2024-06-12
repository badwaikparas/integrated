// EditDialog.js
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function EditDialog({ isOpen, onClose, rowData, onSave }) {
    const [formData, setFormData] = useState(JSON.parse(JSON.stringify(rowData)));
    useEffect(() => {
        setFormData(JSON.parse(JSON.stringify(rowData)));
    }, [rowData]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        onSave(formData);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit Row">
            <h2>Edit Row</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Staff: </label>
                    <input
                        name="staff"
                        value={formData.staff}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Task: </label>
                    <input
                        name="task"
                        value={formData.task}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Start Time: </label>
                    <input
                        name="start-time"
                        type="datetime-local"
                        value={formData['start-time']}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>End Time: </label>
                    <input
                        name="end-time"
                        type="datetime-local"
                        value={formData['end-time']}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Time Captured: </label>
                    <input
                        name="time-captured"
                        type="datetime-local"
                        value={formData['time-captured']}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </Modal>
    );
}

export default EditDialog;

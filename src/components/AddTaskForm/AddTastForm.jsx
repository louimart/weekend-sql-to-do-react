import { useState } from "react";

import { postTask } from "../../todoApi/todo.api";

function AddTaskForm (props) {
    const [taskValue, setTaskValue] = useState('');
    const [statusValue, setStatusValue] = useState('FALSE');

    const handleSubmitTask = (event) => {
        event.preventDefault();
        console.log('Submitting Task:', {
            task: taskValue,
            status: statusValue,
        });

        postTask({
            task: taskValue,
            status: statusValue,
        })
            .then((response) => {
                props.taskRefreshCallBack();

                // clearing field on submit
                setTaskValue('');
                setStatusValue('');
            })
            .catch((err) => {
                console.error('ERROR:', err);
            })
    };

    return (
        <form onSubmit={handleSubmitTask}>
            <label>
                <span>New Task:</span>
                <input
                    id = "task"
                    onChange={(event) => setTaskValue(event.target.value)}
                    value={taskValue}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    );

}

export default AddTaskForm;